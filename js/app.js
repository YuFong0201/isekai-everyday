// js/app.js
import { AvailableDecks } from '../data/manifest.js';
import { GameEngine } from './engine/GameEngine.js';
import { GameTimer } from './engine/Timer.js';
import { TableView } from './components/TableView.js';
import { CardStage } from './components/CardStage.js';
import { GuideModal } from './components/GuideModal.js';
import { generateStorybook } from './utils/pdfExport.js';
import { sfx, bgm } from './utils/audio.js';

// 8 個 PNG 像素頭像列表路徑
const AVATAR_LIST = Array.from({ length: 8 }, (_, i) => `./assets/avatars/player${i + 1}.png`);

function initApp() {
  const setupForm = document.getElementById('setup-form');
  const playerCountInput = document.getElementById('player-count');
  const playerNamesContainer = document.getElementById('player-names-container');
  const gameDurationSlider = document.getElementById('game-duration');
  const durationDisplay = document.getElementById('duration-val-display');

  // 🎯 自動將首頁選單 Logo 下方的設定項目包入獨立捲動容器，保持 Logo 固定不動
  if (setupForm && !document.getElementById('setup-scroll-body')) {
    const logoWrapper = setupForm.querySelector('.logo-wrapper');
    if (logoWrapper) {
      const scrollBody = document.createElement('div');
      scrollBody.id = 'setup-scroll-body';
      scrollBody.className = 'setup-scroll-body';
      while (logoWrapper.nextSibling) {
        scrollBody.appendChild(logoWrapper.nextSibling);
      }
      setupForm.appendChild(scrollBody);
    }
  }

  // 📖 初始化遊戲說明大彈窗組件
  const guideModal = new GuideModal();

  const btnOpenGuide = document.getElementById('btn-open-guide');
  if (btnOpenGuide) {
    btnOpenGuide.addEventListener('click', () => {
      guideModal.open();
    });
  }

  // 自訂像素下拉選單 DOM
  const deckTrigger = document.getElementById('pixel-deck-trigger');
  const deckOptionsContainer = document.getElementById('pixel-deck-options');
  const deckSelectedText = document.getElementById('pixel-deck-selected-text');
  const deckValueInput = document.getElementById('deck-select-value');

  // 頭像 Modal DOM
  const avatarPickerModal = document.getElementById('avatar-picker-modal');
  const avatarPickerGrid = document.getElementById('avatar-picker-grid');
  const btnCloseAvatarPicker = document.getElementById('btn-close-avatar-picker');
  let currentTargetAvatarBtn = null;

  const drawTriggerBox = document.getElementById('draw-trigger-container');
  const drawCardBtn = document.getElementById('draw-card-btn');

  const audioOverlay = document.getElementById('audio-start-overlay');
  const btnStartAudio = document.getElementById('btn-start-audio');

  const btnMute = document.getElementById('btn-mute-toggle');
  const volumeSlider = document.getElementById('volume-slider');
  const btnFullscreen = document.getElementById('btn-fullscreen-toggle');

  // 控制列與側邊欄 DOM
  const leftControlsBar = document.getElementById('left-controls-bar');
  const btnQuickMenu = document.getElementById('btn-quick-menu');
  const btnQuickFinish = document.getElementById('btn-quick-finish');

  const btnViewHistory = document.getElementById('btn-view-story-history');
  const historySidebar = document.getElementById('story-history-sidebar');
  const historyList = document.getElementById('story-history-list');

  // 像素 Confirm 彈窗 DOM
  const confirmModal = document.getElementById('pixel-confirm-modal');
  const confirmTitle = document.getElementById('confirm-modal-title');
  const confirmMsg = document.getElementById('confirm-modal-msg');
  const btnConfirmYes = document.getElementById('btn-confirm-yes');
  const btnConfirmNo = document.getElementById('btn-confirm-no');
  let onConfirmAction = null;

  let playedStorySnippets = [];

  if (volumeSlider) volumeSlider.value = 0.2;

  function unlockAndPlayAudio() {
    bgm.playTrack('home');
    if (audioOverlay) {
      audioOverlay.classList.add('hidden');
    }
  }

  if (btnStartAudio) {
    btnStartAudio.addEventListener('click', unlockAndPlayAudio);
  }

  document.body.addEventListener('click', () => {
    if (bgm.audio.paused) {
      unlockAndPlayAudio();
    }
  }, { once: true });

  // 📖 瀏覽故事記錄側邊欄開關控制
  function closeStoryHistory() {
    if (historySidebar) historySidebar.classList.add('hidden');
    if (btnViewHistory) {
      const iconSpan = btnViewHistory.querySelector('.btn-icon');
      const textSpan = btnViewHistory.querySelector('.btn-text');
      if (iconSpan) iconSpan.textContent = '📜';
      if (textSpan) textSpan.textContent = '瀏覽故事記錄';
    }
  }

  function openStoryHistory() {
    if (!historySidebar || !historyList) return;
    historyList.innerHTML = '';
    if (playedStorySnippets.length === 0) {
      historyList.innerHTML = '<div class="history-item-empty">目前尚未錄入任何故事段落喔！</div>';
    } else {
      playedStorySnippets.forEach((snippet, index) => {
        const item = document.createElement('div');
        item.className = 'history-item-box';
        item.innerHTML = `
          <div class="history-item-index">段落 #${index + 1}</div>
          <div class="history-item-text">${snippet.replace(/\n/g, '<br>')}</div>
        `;
        historyList.appendChild(item);
      });
    }
    historySidebar.classList.remove('hidden');
    if (btnViewHistory) {
      const iconSpan = btnViewHistory.querySelector('.btn-icon');
      const textSpan = btnViewHistory.querySelector('.btn-text');
      if (iconSpan) iconSpan.textContent = '✖';
      if (textSpan) textSpan.textContent = '關閉故事記錄';
    }
  }

  if (btnViewHistory) {
    btnViewHistory.addEventListener('click', () => {
      if (historySidebar.classList.contains('hidden')) {
        openStoryHistory();
      } else {
        closeStoryHistory();
      }
    });
  }

  function showPixelConfirm(title, msg, onYes) {
    if (!confirmModal) return;
    confirmTitle.textContent = title;
    confirmMsg.textContent = msg;
    onConfirmAction = onYes;
    confirmModal.classList.remove('hidden');
  }

  if (btnConfirmYes) {
    btnConfirmYes.addEventListener('click', () => {
      if (confirmModal) confirmModal.classList.add('hidden');
      if (onConfirmAction) onConfirmAction();
    });
  }

  if (btnConfirmNo) {
    btnConfirmNo.addEventListener('click', () => {
      if (confirmModal) confirmModal.classList.add('hidden');
    });
  }

  function openAvatarPicker(triggerBtn) {
    currentTargetAvatarBtn = triggerBtn;
    const currentSelectedAvatar = triggerBtn.dataset.avatar;

    const usedAvatars = new Set();
    document.querySelectorAll('.avatar-select-btn').forEach(btn => {
      if (btn !== triggerBtn && btn.dataset.avatar) {
        usedAvatars.add(btn.dataset.avatar);
      }
    });

    avatarPickerGrid.innerHTML = '';
    AVATAR_LIST.forEach(avatarUrl => {
      const isUsed = usedAvatars.has(avatarUrl);
      const isCurrent = (avatarUrl === currentSelectedAvatar);

      const item = document.createElement('div');
      item.className = `avatar-picker-item ${isUsed ? 'disabled' : ''} ${isCurrent ? 'selected' : ''}`;
      
      const img = document.createElement('img');
      img.src = avatarUrl;
      item.appendChild(img);

      if (!isUsed) {
        item.addEventListener('click', () => {
          currentTargetAvatarBtn.dataset.avatar = avatarUrl;
          const imgInside = currentTargetAvatarBtn.querySelector('img');
          if (imgInside) imgInside.src = avatarUrl;
          avatarPickerModal.classList.add('hidden');
        });
      }

      avatarPickerGrid.appendChild(item);
    });

    avatarPickerModal.classList.remove('hidden');
  }

  if (btnCloseAvatarPicker) {
    btnCloseAvatarPicker.addEventListener('click', () => {
      avatarPickerModal.classList.add('hidden');
    });
  }

  if (btnQuickMenu) {
    btnQuickMenu.addEventListener('click', () => {
      showPixelConfirm('返回首頁', '是否退出遊戲返回選單？', () => {
        returnToMenu();
      });
    });
  }

  if (btnQuickFinish) {
    btnQuickFinish.addEventListener('click', () => {
      showPixelConfirm('結束故事', '是否直接結束故事進入結算？', () => {
        showPodiumScreen();
      });
    });
  }

  function returnToMenu() {
    if (window.gameTimer) window.gameTimer.stop();
    if (cardStage) cardStage.close();

    playedStorySnippets = [];
    closeStoryHistory();

    if (btnViewHistory) btnViewHistory.classList.add('hidden');
    if (leftControlsBar) leftControlsBar.classList.add('hidden');

    bgm.resetUserOverride();
    bgm.playTrack('home');

    document.getElementById('table-view').classList.remove('active');
    document.getElementById('result-view').classList.remove('active');
    document.getElementById('drawn-cards').innerHTML = '';
    document.getElementById('setup-view').classList.add('active');
  }

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      bgm.setUserVolume(val);
      if (btnMute) btnMute.textContent = val === 0 ? '🔇' : '🔊';
    });
  }

  if (btnMute) {
    btnMute.addEventListener('click', () => {
      const isMuted = bgm.toggleMute();
      btnMute.textContent = isMuted ? '🔇' : '🔊';
    });
  }

  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  const countBtns = document.querySelectorAll('.btn-count-opt');
  countBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      countBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const count = parseInt(btn.dataset.count) || 4;
      if (playerCountInput) playerCountInput.value = count;
      updatePlayerInputFields(count);
    });
  });

  function getRandomUniqueAvatars(count) {
    const shuffled = [...AVATAR_LIST].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  function updatePlayerInputFields(countOverride) {
    if (!playerNamesContainer) return;
    const count = countOverride || (playerCountInput ? parseInt(playerCountInput.value) : 4);
    playerNamesContainer.innerHTML = '';
    
    const defaultAvatars = getRandomUniqueAvatars(count);

    for (let i = 1; i <= count; i++) {
      const fieldWrapper = document.createElement('div');
      fieldWrapper.className = 'player-input-row';

      const avatarBtn = document.createElement('button');
      avatarBtn.type = 'button';
      avatarBtn.className = 'avatar-select-btn';
      avatarBtn.dataset.avatar = defaultAvatars[i - 1];

      const avatarImg = document.createElement('img');
      avatarImg.src = defaultAvatars[i - 1];
      avatarImg.alt = `頭像 ${i}`;
      avatarBtn.appendChild(avatarImg);

      avatarBtn.addEventListener('click', () => {
        openAvatarPicker(avatarBtn);
      });

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'player-name-input';
      input.placeholder = `玩家 ${i}`;
      input.value = `玩家 ${i}`;

      fieldWrapper.appendChild(avatarBtn);
      fieldWrapper.appendChild(input);
      playerNamesContainer.appendChild(fieldWrapper);
    }
  }

  if (gameDurationSlider && durationDisplay) {
    gameDurationSlider.addEventListener('input', (e) => {
      durationDisplay.textContent = `${e.target.value} 分鐘`;
    });
  }

  function loadDecks() {
    if (!deckOptionsContainer) return;
    deckOptionsContainer.innerHTML = '';
    const decks = (AvailableDecks && AvailableDecks.length > 0) ? AvailableDecks : [];

    if (decks.length > 0) {
      deckSelectedText.textContent = `${decks[0].name} (${decks[0].description || ''})`;
      deckValueInput.value = decks[0].id;
    }

    decks.forEach((deck, idx) => {
      const optDiv = document.createElement('div');
      optDiv.className = `pixel-select-option ${idx === 0 ? 'selected' : ''}`;
      optDiv.textContent = `${deck.name} (${deck.description || ''})`;
      optDiv.dataset.value = deck.id;

      optDiv.addEventListener('click', () => {
        deckSelectedText.textContent = optDiv.textContent;
        deckValueInput.value = deck.id;
        document.querySelectorAll('.pixel-select-option').forEach(el => el.classList.remove('selected'));
        optDiv.classList.add('selected');
        deckOptionsContainer.classList.add('hidden');
        deckTrigger.parentElement.classList.remove('open');
      });

      deckOptionsContainer.appendChild(optDiv);
    });
  }

  if (deckTrigger && deckOptionsContainer) {
    deckTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !deckOptionsContainer.classList.contains('hidden');
      if (isOpen) {
        deckOptionsContainer.classList.add('hidden');
        deckTrigger.parentElement.classList.remove('open');
      } else {
        deckOptionsContainer.classList.remove('hidden');
        deckTrigger.parentElement.classList.add('open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!deckTrigger.contains(e.target) && !deckOptionsContainer.contains(e.target)) {
        deckOptionsContainer.classList.add('hidden');
        deckTrigger.parentElement.classList.remove('open');
      }
    });
  }

  loadDecks();
  updatePlayerInputFields(4);

  const threeCanvas = document.getElementById('three-canvas');
  let tableView = null;
  if (threeCanvas) tableView = new TableView(threeCanvas);

  // 🎯 支援多張卡牌（1~3張）的動態計分與記錄邏輯
  const cardStage = new CardStage(
    document.getElementById('card-stage'),
    document.getElementById('drawn-cards'),
    (isGood, selectedCardsInput, isPass, textSnippet) => {
      const currentIdx = window.game.currentPlayerIndex;
      const playerName = window.game.players[currentIdx].name;
      const cardsList = Array.isArray(selectedCardsInput) ? selectedCardsInput : [selectedCardsInput];

      // 計算實際選出的有效故事牌張數（1張=1分、2張=2分、3張=3分，放棄牌=0分）
      const validCardsCount = cardsList.filter(c => c && !c.isPass).length;
      const earnedPoints = (isGood && !isPass) ? validCardsCount : 0;

      const popup = document.createElement('div');
      popup.className = `score-popup ${earnedPoints > 0 ? 'good' : 'fail'}`;

      if (earnedPoints > 0) {
        window.game.players[currentIdx].score += earnedPoints;
        popup.innerHTML = `🌟 +${earnedPoints}分`;
        if (sfx && sfx.playTurn) sfx.playTurn();

        if (textSnippet && textSnippet.length > 0) {
          const cardNamesTitle = cardsList.map(c => c.name).join('、');
          playedStorySnippets.push(`【${playerName} · ${cardNamesTitle} (+${earnedPoints}分)】\n${textSnippet}`);
        }
      } else {
        popup.innerHTML = `❌ +0分`;
      }
      document.body.appendChild(popup);
      setTimeout(() => popup.remove(), 1600);

      const effectType = isPass ? 'fail' : (isGood ? 'good' : 'fail');
      if (tableView) tableView.renderSeats(window.game.players, currentIdx, effectType);

      setTimeout(() => {
        const isEnding = cardsList.some(c => c && (c.isEnding || c.tag === '結局'));
        const isEndingSuccess = isEnding && isGood;

        if (isEndingSuccess) {
          if (tableView) {
            tableView.triggerGrandEndingSequence(() => {
              showPodiumScreen();
            });
          } else {
            showPodiumScreen();
          }
          return;
        }

        const nextIndex = window.game.nextTurn(isGood ? cardsList : null);

        const activeNameBanner = document.getElementById('active-player-name');
        if (activeNameBanner) activeNameBanner.textContent = window.game.players[nextIndex].name;

        if (tableView) tableView.renderSeats(window.game.players, nextIndex);

        setTimeout(() => {
          if (drawTriggerBox) drawTriggerBox.classList.remove('hidden');
        }, 800);
      }, 1800);
    }
  );

  if (drawCardBtn) {
    drawCardBtn.addEventListener('click', () => {
      if (drawTriggerBox) drawTriggerBox.classList.add('hidden');
      const cardOptions = window.game.drawOptions();
      cardStage.showOptions(cardOptions);
    });
  }

  function showPodiumScreen() {
    if (window.gameTimer) window.gameTimer.stop();
    if (cardStage) cardStage.close();

    bgm.playEndBGM();

    if (btnViewHistory) btnViewHistory.classList.remove('hidden');
    if (leftControlsBar) leftControlsBar.classList.remove('hidden');
    if (btnQuickFinish) btnQuickFinish.classList.add('hidden');

    document.getElementById('table-view').classList.remove('active');
    const resultView = document.getElementById('result-view');
    resultView.classList.add('active');

    const podiumContainer = document.getElementById('podium-container');
    podiumContainer.innerHTML = '';

    const sortedPlayers = [...window.game.players].sort((a, b) => b.score - a.score);

    sortedPlayers.forEach((player, index) => {
      const rank = index + 1;
      const col = document.createElement('div');
      col.className = `podium-column rank-${rank}`;

      const crownHtml = rank === 1 ? '<div class="podium-crown">👑</div>' : '';

      const miniCardsHtml = player.drawnCards.map(c => `
        <div class="mini-card-item ${c.isEnding ? 'ending' : ''}">
          <div class="mini-card-icon">${c.icon || '📖'}</div>
          <div class="mini-card-info">
            <span class="mini-card-title">${c.name}</span>
            <span class="mini-card-tag">${c.tag || '卡牌'}</span>
          </div>
        </div>
      `).join('');

      col.innerHTML = `
        ${crownHtml}
        <div class="podium-player-card">
          <div class="podium-avatar">
            <img src="${player.avatar}" alt="${player.name}" class="podium-avatar-img">
          </div>
          <div class="podium-name">${player.name}</div>
          <div class="podium-score">⭐ ${player.score}分</div>
        </div>
        <div class="podium-block">第 ${rank} 名</div>
        <div class="podium-cards-container">
          ${miniCardsHtml || '<div style="color:#64748b; font-size:10px; margin-top:4px;">未抽牌</div>'}
        </div>
      `;
      podiumContainer.appendChild(col);
    });
  }

  document.getElementById('btn-result-print')?.addEventListener('click', () => {
    const fullStoryText = playedStorySnippets.length > 0
      ? playedStorySnippets.join('\n\n')
      : '（本次遊戲未錄入故事內容）';
    generateStorybook(window.game.players, window.game.playedCards, fullStoryText);
  });

  document.getElementById('btn-result-replay')?.addEventListener('click', () => {
    playedStorySnippets = [];
    closeStoryHistory();
    document.getElementById('result-view').classList.remove('active');
    document.getElementById('drawn-cards').innerHTML = '';
    document.getElementById('setup-form').dispatchEvent(new Event('submit'));
  });

  document.getElementById('btn-result-menu')?.addEventListener('click', returnToMenu);

  if (setupForm) {
    setupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      playedStorySnippets = [];
      closeStoryHistory();

      if (btnViewHistory) btnViewHistory.classList.remove('hidden');
      if (leftControlsBar) leftControlsBar.classList.remove('hidden');
      if (btnQuickFinish) btnQuickFinish.classList.remove('hidden');

      const rows = document.querySelectorAll('.player-input-row');
      const playersData = Array.from(rows).map((row, idx) => {
        const inp = row.querySelector('.player-name-input');
        const btn = row.querySelector('.avatar-select-btn');
        const rawName = inp ? inp.value.trim() : '';
        const name = rawName || `玩家 ${idx + 1}`;
        const avatar = btn ? btn.dataset.avatar : `./assets/avatars/player${(idx % 8) + 1}.png`;
        return { name, avatar };
      });

      const selectedDeck = AvailableDecks.find(d => d.id === deckValueInput.value) || AvailableDecks[0];
      const duration = parseInt(gameDurationSlider ? gameDurationSlider.value : 10) || 10;

      const deckBgmKey = selectedDeck.bgm || selectedDeck.id || 'school';
      bgm.playTrack(deckBgmKey);

      window.game = new GameEngine(playersData, selectedDeck, duration);

      // 初始化第一位玩家名稱顯示
      const activeNameBanner = document.getElementById('active-player-name');
      if (activeNameBanner && window.game.players[0]) {
        activeNameBanner.textContent = window.game.players[0].name;
      }

      const timerDisplay = document.getElementById('timer-display');
      const totalSecondsAll = duration * 60;
      const ringCircumference = 125.6; // 2 * Math.PI * 20

      function renderCircularTimer(timeStr, remainSec) {
        if (!timerDisplay) return;
        const ratio = Math.max(0, Math.min(1, remainSec / totalSecondsAll));
        const dashOffset = ringCircumference * (1 - ratio);
        const isLow = remainSec <= 30;
        timerDisplay.classList.toggle('timer-low', isLow);

        timerDisplay.innerHTML = `
          <div class="header-timer-ring" title="剩餘時間 ${timeStr}">
            <svg viewBox="0 0 48 48">
              <circle class="ring-bg" cx="24" cy="24" r="20"></circle>
              <circle class="ring-fg" cx="24" cy="24" r="20"
                style="stroke-dasharray: ${ringCircumference}; stroke-dashoffset: ${dashOffset};"></circle>
            </svg>
            <span class="ring-time-text">${timeStr}</span>
          </div>
        `;
      }

      const initMins = String(duration).padStart(2, '0');
      renderCircularTimer(`${initMins}:00`, totalSecondsAll);

      window.gameTimer = new GameTimer(
        duration,
        (timeStr) => {
          const parts = timeStr.split(':');
          const remainSec = parts.length === 2
            ? (parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10))
            : totalSecondsAll;
          renderCircularTimer(timeStr, remainSec);
        },
        () => {
          renderCircularTimer('結局', 0);
          if (window.game) window.game.triggerTimeUp();
        }
      );
      window.gameTimer.start();

      document.getElementById('setup-view').classList.remove('active');
      document.getElementById('table-view').classList.add('active');

      if (tableView) {
        tableView.onWindowResize();
        tableView.renderSeats(window.game.players, 0);
      }

      if (drawTriggerBox) drawTriggerBox.classList.remove('hidden');
    });
  }

  document.getElementById('finish-game-btn')?.addEventListener('click', () => {
    showPixelConfirm('結束故事', '是否直接結束故事進入結算？', showPodiumScreen);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}