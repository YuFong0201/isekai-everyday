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

    this.selectedCard = null;
    this.displayCardEl = null;
  }

  close() {
    this.stopSelectionTimer();
    
    if (this.stageContainer) {
      this.stageContainer.classList.add('hidden');
    }

    if (this.judgeBox) {
      this.judgeBox.classList.add('hidden');
    }

    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.add('hidden');
      this.modalStoryRecorder.style.display = 'none';
    }

    if (this.storyInput) {
      this.storyInput.value = '';
    }

    bgm.setStorytellingMode(false);
  }

  startSelectionTimer(cardsRow, cards) {
    this.stopSelectionTimer();
    if (!this.timerBox) return;

    this.timerBox.classList.remove('hidden', 'warning');
    let timeLeft = 20;
    const totalDash = 264;

    this.timerCountNum.textContent = timeLeft;
    this.timerProgress.style.strokeDashoffset = '0';

    this.countdownInterval = setInterval(() => {
      timeLeft--;
      this.timerCountNum.textContent = timeLeft;
      const offset = totalDash * (1 - timeLeft / 20);
      this.timerProgress.style.strokeDashoffset = offset;

      if (timeLeft <= 5) this.timerBox.classList.add('warning');

      if (timeLeft <= 0) {
        this.stopSelectionTimer();
        const passCard = cards.find(c => c.isPass) || cards[cards.length - 1];
        const passCardEl = cardsRow.querySelector('.pass-card') || cardsRow.lastElementChild;
        if (passCardEl) this.handleCardClick(passCardEl, cardsRow, passCard);
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

    return 'type-event'; // 預設類別
  }

  showOptions(cards) {
    if (!this.stageContainer) return;

    this.stageContainer.classList.remove('hidden');
    bgm.setStorytellingMode(false);

    if (this.judgeBox) this.judgeBox.classList.add('hidden');
    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.add('hidden');
      this.modalStoryRecorder.style.display = 'none';
    }
    if (this.storyInput) this.storyInput.value = '';

    const hasEnding = cards.some(c => c.isEnding || (c.tag && c.tag.includes('結局')));
    if (this.stageTitle) {
      this.stageTitle.textContent = hasEnding ? '👑 進入故事大結局！請挑選結局卡：' : '✨ 請選擇一張卡牌展開故事：';
    }

    const cardsRow = this.stageContainer.querySelector('.cards-row');
    if (!cardsRow) return;
    cardsRow.innerHTML = '';

    cards.forEach((card) => {
      const typeClass = this.getCardTypeClass(card);
      const cardEl = document.createElement('div');
      
      // 🎯 確保加上正確認知的 class 與 data-tag 屬性
      cardEl.className = `card ${typeClass}`;
      cardEl.dataset.tag = card.tag || (card.isEnding ? '結局' : '卡牌');
      
      cardEl.innerHTML = `
        <span class="card-tag">${card.tag || (card.isEnding ? '結局' : '卡牌')}</span>
        <div class="card-icon">${card.icon || (card.isEnding ? '👑' : '🃏')}</div>
        <div class="card-title">${card.name}</div>
      `;

      cardEl.addEventListener('click', (e) => {
        e.stopPropagation();
        sfx.playClickCard(); 
        this.stopSelectionTimer();
        this.handleCardClick(cardEl, cardsRow, card);
      });

      cardsRow.appendChild(cardEl);
    });

    this.startSelectionTimer(cardsRow, cards);
  }

  handleCardClick(cardEl, container, card) {
    this.stopSelectionTimer();
    this.selectedCard = card;

    if (card.isPass) {
      if (this.storyInput) this.storyInput.value = '';
      bgm.setStorytellingMode(false);
      Array.from(container.children).forEach(child => child.classList.add('card-fall'));
      setTimeout(() => {
        this.stageContainer.classList.add('hidden');
        if (this.onResult) this.onResult(false, card, true, '');
      }, 400);
      return;
    }

    container.innerHTML = '';
    
    const typeClass = this.getCardTypeClass(card);
    this.displayCardEl = document.createElement('div');
    this.displayCardEl.className = `card card-selected-display ${typeClass}`;
    this.displayCardEl.dataset.tag = card.tag || (card.isEnding ? '結局' : '卡牌');

    this.displayCardEl.innerHTML = `
      <span class="card-tag">${card.tag || (card.isEnding ? '結局' : '卡牌')}</span>
      <div class="card-icon">${card.icon || (card.isEnding ? '👑' : '🃏')}</div>
      <div class="card-title">${card.name}</div>
    `;
    container.appendChild(this.displayCardEl);

    if (this.stageTitle) this.stageTitle.textContent = card.isEnding ? '👑 請為故事寫下完美的結局！' : '請發表您的故事內容！';
    
    // 進入發表故事環節：自動調小背景音量
    bgm.setStorytellingMode(true);

    if (this.storyInput) this.storyInput.value = '';
    if (this.judgeBox) this.judgeBox.classList.remove('hidden');
    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.remove('hidden');
      this.modalStoryRecorder.style.display = 'block';
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
        if (this.onResult) this.onResult(true, this.selectedCard, false, textSnippet);
      });
    } else {
      if (this.storyInput) this.storyInput.value = '';
      if (this.displayCardEl) this.displayCardEl.classList.add('card-fall');
      if (this.modalStoryRecorder) {
        this.modalStoryRecorder.classList.add('hidden');
        this.modalStoryRecorder.style.display = 'none';
      }
      setTimeout(() => {
        this.stageContainer.classList.add('hidden');
        if (this.onResult) this.onResult(false, this.selectedCard, false, '');
      }, 400);
    }
  }

  animateDirectFlyToTop(onComplete) {
    if (!this.displayCardEl || !this.drawnContainer) {
      this.stageContainer.classList.add('hidden');
      onComplete();
      return;
    }

    const cardRect = this.displayCardEl.getBoundingClientRect();
    const targetRect = this.drawnContainer.getBoundingClientRect();

    if (this.judgeBox) this.judgeBox.classList.add('hidden');
    if (this.modalStoryRecorder) {
      this.modalStoryRecorder.classList.add('hidden');
      this.modalStoryRecorder.style.display = 'none';
    }
    if (this.stageTitle) this.stageTitle.textContent = '';

    this.displayCardEl.style.position = 'fixed';
    this.displayCardEl.style.left = `${cardRect.left}px`;
    this.displayCardEl.style.top = `${cardRect.top}px`;
    this.displayCardEl.style.margin = '0';
    this.displayCardEl.style.zIndex = '9999';
    this.displayCardEl.style.transition = 'all 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)';

    this.stageContainer.classList.add('hidden');

    requestAnimationFrame(() => {
      this.displayCardEl.style.left = `${targetRect.right + 10}px`;
      this.displayCardEl.style.top = `${targetRect.top + 5}px`;
      this.displayCardEl.style.transform = 'scale(0.35)';
      this.displayCardEl.style.opacity = '0.7';
    });

    setTimeout(() => {
      this.addPlayedCardToTop(this.selectedCard);
      onComplete();
    }, 750);
  }

  // 🃏 渲染直向完整展示的像素迷你卡片
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