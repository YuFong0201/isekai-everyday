// js/components/CardStage.js
import { bgm, sfx } from '../utils/audio.js';

export class CardStage {
  constructor(stageEl, drawnContainerEl, onResultCallback) {
    this.stageContainer = stageEl; 
    this.drawnContainer = drawnContainerEl;
    this.onResult = onResultCallback;

    this.judgeBox = document.getElementById('judge-actions');
    this.btnGood = document.getElementById('btn-judge-good');
    this.btnFail = document.getElementById('btn-judge-fail');
    this.stageTitle = document.getElementById('stage-title');
    this.modalStoryRecorder = document.getElementById('modal-story-recorder');
    this.storyInput = document.getElementById('story-input');

    this.timerBox = document.getElementById('selection-timer-box');
    this.timerCountNum = document.getElementById('timer-count-num');
    this.timerProgress = document.getElementById('timer-progress');
    this.countdownInterval = null;

    this.selectedCards = [];
    this.displayCardEls = [];
    this.confirmActionBox = null;
    this.passConfirmModal = null;
    this.maxSelectCount = 3;
  }

  // 建立或取得放棄確認彈窗
  ensurePassConfirmModal() {
    if (this.passConfirmModal) return this.passConfirmModal;

    const overlay = document.createElement('div');
    overlay.id = 'pass-confirm-overlay';
    overlay.className = 'pass-confirm-overlay hidden';
    overlay.innerHTML = `
      <div class="pass-confirm-box" role="dialog" aria-modal="true" aria-labelledby="pass-confirm-title">
        <div class="pass-confirm-icon">🤡</div>
        <h3 id="pass-confirm-title" class="pass-confirm-title">確定放棄?</h3>
        <p class="pass-confirm-desc">選擇放棄牌將跳過本回合，且本輪不會獲得分數喔！</p>
        <div class="pass-confirm-actions">
          <button type="button" id="btn-pass-confirm-yes" class="btn-pass-yes">是</button>
          <button type="button" id="btn-pass-confirm-no" class="btn-pass-no">否</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    this.passConfirmModal = overlay;
    return overlay;
  }

  openPassConfirm(cardsRow, passCard) {
    const modal = this.ensurePassConfirmModal();
    const btnYes = modal.querySelector('#btn-pass-confirm-yes');
    const btnNo = modal.querySelector('#btn-pass-confirm-no');

    btnYes.onclick = (e) => {
      e.stopPropagation();
      sfx.playClickCard();
      this.closePassConfirm();
      this.triggerPass(cardsRow, passCard);
    };

    btnNo.onclick = (e) => {
      e.stopPropagation();
      sfx.playClickCard();
      this.closePassConfirm();
    };

    // 點擊半透明遮罩視同取消
    modal.onclick = (e) => {
      if (e.target === modal) {
        sfx.playClickCard();
        this.closePassConfirm();
      }
    };

    modal.classList.remove('hidden');
  }

  closePassConfirm() {
    if (this.passConfirmModal) {
      this.passConfirmModal.classList.add('hidden');
    }
  }

  close() {
    this.stopSelectionTimer();
    this.closePassConfirm();
    
    if (this.stageContainer) {
      this.stageContainer.classList.add('hidden');
    }

    if (this.judgeBox) {
      this.judgeBox.classList.add('hidden');
    }

    if (this.confirmActionBox) {
      this.confirmActionBox.classList.add('hidden');
    }

    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.add('hidden');
      this.modalStoryRecorder.style.display = 'none';
    }

    if (this.storyInput) {
      this.storyInput.value = '';
    }

    this.selectedCards = [];
    this.displayCardEls = [];
    bgm.setStorytellingMode(false);
  }

  startSelectionTimer(cardsRow, cards, isPureEndingOnly = false) {
    this.stopSelectionTimer();
    if (!this.timerBox) return;

    this.timerBox.classList.remove('hidden', 'warning');
    const totalSeconds = 25;
    let timeLeft = totalSeconds;
    const totalDash = 264;

    this.timerCountNum.textContent = timeLeft;
    this.timerProgress.style.strokeDashoffset = '0';

    this.countdownInterval = setInterval(() => {
      timeLeft--;
      this.timerCountNum.textContent = timeLeft;
      const offset = totalDash * (1 - timeLeft / totalSeconds);
      this.timerProgress.style.strokeDashoffset = offset;

      if (timeLeft <= 5) this.timerBox.classList.add('warning');

      if (timeLeft <= 0) {
        this.stopSelectionTimer();
        this.closePassConfirm();

        // 倒數結束處理：已有勾選則確認、純結局階段自動進入結局、其餘自動放棄
        if (this.selectedCards.length > 0) {
          this.confirmSelection(cardsRow);
        } else if (isPureEndingOnly) {
          const endingCard = cards.find(c => c.isEnding);
          if (endingCard) {
            this.selectedCards = [endingCard];
            this.confirmSelection(cardsRow);
          }
        } else {
          const passCard = cards.find(c => c.isPass) || cards[cards.length - 1];
          this.triggerPass(cardsRow, passCard);
        }
      }
    }, 1000);
  }

  stopSelectionTimer() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
    if (this.timerBox) this.timerBox.classList.add('hidden');
  }

  getCardTypeClass(card) {
    if (!card) return 'type-event';
    const tag = card.tag || '';

    if (card.isEnding || tag.includes('結局')) return 'ending-card';
    if (card.isPass || tag.includes('放棄')) return 'pass-card';

    if (tag.includes('人物') || tag.includes('角色')) return 'type-character';
    if (tag.includes('地點') || tag.includes('場景')) return 'type-location';
    if (tag.includes('事件') || tag.includes('動作')) return 'type-event';
    if (tag.includes('狀況') || tag.includes('難題')) return 'type-condition';

    return 'type-event';
  }

  ensureConfirmBox() {
    if (this.confirmActionBox) return this.confirmActionBox;
    const contentEl = this.stageContainer.querySelector('.card-stage-content');
    if (!contentEl) return null;

    this.confirmActionBox = document.createElement('div');
    this.confirmActionBox.id = 'multi-select-confirm-box';
    this.confirmActionBox.className = 'multi-select-confirm-box hidden';
    this.confirmActionBox.innerHTML = `
      <div id="multi-select-hint" class="multi-select-hint">請點選 1 ~ 3 張想融入故事的卡牌</div>
      <button type="button" id="btn-confirm-cards" class="btn-confirm-cards" disabled>
        ✨ 確定選牌 (已選 0 / 3 張)
      </button>
    `;
    contentEl.appendChild(this.confirmActionBox);
    return this.confirmActionBox;
  }

  updateMultiSelectUI(cardsRow) {
    const confirmBox = this.ensureConfirmBox();
    if (!confirmBox) return;

    const btnConfirm = confirmBox.querySelector('#btn-confirm-cards');
    const hintEl = confirmBox.querySelector('#multi-select-hint');
    const count = this.selectedCards.length;

    // 更新卡片選取狀態與左上/右上序號徽章
    const cardEls = cardsRow.querySelectorAll('.card');
    cardEls.forEach(el => {
      const cid = el.dataset.cardId;
      const selIdx = this.selectedCards.findIndex(c => c.id === cid);
      let badge = el.querySelector('.card-select-badge');

      if (selIdx !== -1) {
        el.classList.add('is-selected');
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'card-select-badge';
          el.appendChild(badge);
        }
        badge.textContent = selIdx + 1;
      } else {
        el.classList.remove('is-selected');
        if (badge) badge.remove();
      }
    });

    if (btnConfirm) {
      btnConfirm.disabled = (count === 0);
      btnConfirm.textContent = count > 0
        ? `✨ 確定選牌 (已選 ${count} / ${this.maxSelectCount} 張)`
        : `請至少選擇 1 張卡牌`;
    }

    if (hintEl) {
      if (count >= this.maxSelectCount) {
        hintEl.textContent = `已達上限 ${this.maxSelectCount} 張！可點擊已選卡牌取消重選，或按下確定`;
        hintEl.classList.add('limit-reached');
      } else {
        hintEl.textContent = `點擊卡牌可複選（最多 ${this.maxSelectCount} 張），再點一次可取消`;
        hintEl.classList.remove('limit-reached');
      }
    }
  }

  showOptions(cards) {
    if (!this.stageContainer) return;

    this.selectedCards = [];
    this.displayCardEls = [];
    this.closePassConfirm();
    this.stageContainer.classList.remove('hidden');
    bgm.setStorytellingMode(false);

    if (this.judgeBox) this.judgeBox.classList.add('hidden');
    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.add('hidden');
      this.modalStoryRecorder.style.display = 'none';
    }
    if (this.storyInput) this.storyInput.value = '';

    const hasEnding = cards.some(c => c.isEnding || (c.tag && c.tag.includes('結局')));
    const storyCardsCount = cards.filter(c => !c.isEnding && !c.isPass).length;
    // 僅當牌庫完全沒有剩餘故事牌時，進入純單選結局模式
    const isPureEndingOnly = hasEnding && storyCardsCount === 0;

    if (this.stageTitle) {
      if (isPureEndingOnly) {
        this.stageTitle.textContent = '👑 進入故事大結局！請挑選結局卡：';
      } else if (hasEnding) {
        this.stageTitle.textContent = '✨ 牌庫即將見底！可複選 1 ~ 3 張（含結局卡）完成冒險：';
      } else {
        this.stageTitle.textContent = '✨ 請挑選 1 ~ 3 張卡牌串連成故事：';
      }
    }

    const cardsRow = this.stageContainer.querySelector('.cards-row');
    if (!cardsRow) return;
    cardsRow.innerHTML = '';
    cardsRow.classList.remove('story-display-mode');

    const confirmBox = this.ensureConfirmBox();
    if (confirmBox) {
      if (isPureEndingOnly) {
        confirmBox.classList.add('hidden');
      } else {
        confirmBox.classList.remove('hidden');
        const btnConfirm = confirmBox.querySelector('#btn-confirm-cards');
        if (btnConfirm) {
          btnConfirm.onclick = () => {
            if (this.selectedCards.length > 0) {
              sfx.playClickCard();
              this.confirmSelection(cardsRow);
            }
          };
        }
      }
    }

    cards.forEach((card, index) => {
      const typeClass = this.getCardTypeClass(card);
      const cardEl = document.createElement('div');
      const uniqueId = card.id || `opt_${index}`;
      card.id = uniqueId;
      
      cardEl.className = `card ${typeClass}`;
      cardEl.dataset.cardId = uniqueId;
      cardEl.dataset.tag = card.tag || (card.isEnding ? '結局' : '卡牌');
      
      cardEl.innerHTML = `
        <span class="card-tag">${card.tag || (card.isEnding ? '結局' : '卡牌')}</span>
        <div class="card-icon">${card.icon || (card.isEnding ? '👑' : '🃏')}</div>
        <div class="card-title">${card.name}</div>
      `;

      cardEl.addEventListener('click', (e) => {
        e.stopPropagation();
        sfx.playClickCard();

        // 點擊放棄牌時跳出二次確認彈窗避免誤觸
        if (card.isPass) {
          this.openPassConfirm(cardsRow, card);
          return;
        }

        // 純結局階段單選直接進入結局發表
        if (isPureEndingOnly) {
          this.selectedCards = [card];
          this.confirmSelection(cardsRow);
          return;
        }

        // 一般卡牌與混合結局階段切換選取或取消（最多 3 張）
        const existIdx = this.selectedCards.findIndex(c => c.id === uniqueId);
        if (existIdx !== -1) {
          this.selectedCards.splice(existIdx, 1);
        } else {
          if (this.selectedCards.length >= this.maxSelectCount) {
            cardEl.classList.remove('card-shake');
            void cardEl.offsetWidth;
            cardEl.classList.add('card-shake');
            return;
          }
          this.selectedCards.push(card);
        }

        this.updateMultiSelectUI(cardsRow);
      });

      cardsRow.appendChild(cardEl);
    });

    if (!isPureEndingOnly) {
      this.updateMultiSelectUI(cardsRow);
    }

    this.startSelectionTimer(cardsRow, cards, isPureEndingOnly);
  }

  triggerPass(container, passCard) {
    this.stopSelectionTimer();
    this.closePassConfirm();
    this.selectedCards = [passCard];

    if (this.confirmActionBox) this.confirmActionBox.classList.add('hidden');
    if (this.storyInput) this.storyInput.value = '';
    bgm.setStorytellingMode(false);

    Array.from(container.children).forEach(child => child.classList.add('card-fall'));
    setTimeout(() => {
      this.stageContainer.classList.add('hidden');
      if (this.onResult) this.onResult(false, [passCard], true, '');
    }, 400);
  }

  confirmSelection(container) {
    this.stopSelectionTimer();
    this.closePassConfirm();
    if (this.confirmActionBox) this.confirmActionBox.classList.add('hidden');

    container.innerHTML = '';
    container.classList.add('story-display-mode');
    this.displayCardEls = [];

    const isEnding = this.selectedCards.some(c => c.isEnding);

    // 並排顯示選中的 1 ~ 3 張卡牌
    this.selectedCards.forEach((card) => {
      const typeClass = this.getCardTypeClass(card);
      const cardEl = document.createElement('div');
      cardEl.className = `card card-selected-display ${typeClass}`;
      cardEl.dataset.tag = card.tag || (card.isEnding ? '結局' : '卡牌');

      cardEl.innerHTML = `
        <span class="card-tag">${card.tag || (card.isEnding ? '結局' : '卡牌')}</span>
        <div class="card-icon">${card.icon || (card.isEnding ? '👑' : '🃏')}</div>
        <div class="card-title">${card.name}</div>
      `;
      container.appendChild(cardEl);
      this.displayCardEls.push(cardEl);
    });

    if (this.stageTitle) {
      this.stageTitle.textContent = isEnding
        ? '👑 請為故事寫下完美的結局！'
        : `🗣️ 請將這 ${this.selectedCards.length} 張卡牌串連成一個故事！`;
    }
    
    // 進入發表故事環節時調小背景音量
    bgm.setStorytellingMode(true);

    if (this.storyInput) this.storyInput.value = '';
    if (this.judgeBox) this.judgeBox.classList.remove('hidden');
    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.remove('hidden');
      this.modalStoryRecorder.style.display = 'block';
    }

    // 依有效故事牌張數動態更新按鈕加分數
    const validCount = this.selectedCards.filter(c => c && !c.isPass).length;
    if (this.btnGood) {
      this.btnGood.textContent = `👍 說得好 (+${validCount} 分)`;
    }

    this.btnGood.onclick = () => {
      sfx.playClickCard(); 
      this.handleJudge(true);
    };

    this.btnFail.onclick = () => {
      sfx.playClickCard(); 
      this.handleJudge(false);
    };
  }

  handleJudge(isGood) {
    const textSnippet = this.storyInput ? this.storyInput.value.trim() : '';
    bgm.setStorytellingMode(false);

    if (isGood) {
      if (this.storyInput) this.storyInput.value = '';
      this.animateDirectFlyToTop(() => {
        if (this.onResult) this.onResult(true, this.selectedCards, false, textSnippet);
      });
    } else {
      if (this.storyInput) this.storyInput.value = '';
      this.displayCardEls.forEach(el => el.classList.add('card-fall'));
      if (this.modalStoryRecorder) {
        this.modalStoryRecorder.classList.add('hidden');
        this.modalStoryRecorder.style.display = 'none';
      }
      setTimeout(() => {
        this.stageContainer.classList.add('hidden');
        if (this.onResult) this.onResult(false, this.selectedCards, false, '');
      }, 400);
    }
  }

  animateDirectFlyToTop(onComplete) {
    if (this.displayCardEls.length === 0 || !this.drawnContainer) {
      this.stageContainer.classList.add('hidden');
      onComplete();
      return;
    }

    const targetRect = this.drawnContainer.getBoundingClientRect();

    if (this.judgeBox) this.judgeBox.classList.add('hidden');
    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.add('hidden');
      this.modalStoryRecorder.style.display = 'none';
    }
    if (this.stageTitle) this.stageTitle.textContent = '';

    // 取得所有卡片在畫面上的原始位置
    const rects = this.displayCardEls.map(el => el.getBoundingClientRect());

    this.displayCardEls.forEach((el, idx) => {
      el.style.position = 'fixed';
      el.style.left = `${rects[idx].left}px`;
      el.style.top = `${rects[idx].top}px`;
      el.style.margin = '0';
      el.style.zIndex = `${9999 + idx}`;
      el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s`;
    });

    this.stageContainer.classList.add('hidden');

    requestAnimationFrame(() => {
      this.displayCardEls.forEach((el, idx) => {
        el.style.left = `${targetRect.right + 10 + idx * 24}px`;
        el.style.top = `${targetRect.top + 5}px`;
        el.style.transform = 'scale(0.32)';
        el.style.opacity = '0.75';
      });
    });

    setTimeout(() => {
      this.selectedCards.forEach(card => this.addPlayedCardToTop(card));
      // 動畫結束後移除暫時建立的飛行動畫元素避免殘留
      this.displayCardEls.forEach(el => el.remove());
      this.displayCardEls = [];
      onComplete();
    }, 780);
  }

  addPlayedCardToTop(card) {
    if (!this.drawnContainer || !card || card.isPass) return;

    const typeClass = this.getCardTypeClass(card);
    const miniCard = document.createElement('div');
    miniCard.className = `played-card-mini ${typeClass}`;
    miniCard.dataset.tag = card.tag || (card.isEnding ? '結局' : '卡牌');
    miniCard.title = card.name; 

    miniCard.innerHTML = `
      <span class="mini-tag">${card.tag ? card.tag.substring(0, 2) : (card.isEnding ? '結局' : '卡牌')}</span>
      <div class="mini-icon">${card.icon || (card.isEnding ? '👑' : '📖')}</div>
      <div class="mini-title">${card.name}</div>
    `;

    this.drawnContainer.appendChild(miniCard);
  }
}