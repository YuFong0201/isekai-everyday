// js/components/SetupView.js
export class SetupView {
  constructor(containerEl, onStartCallback) {
    this.container = containerEl;
    this.onStart = onStartCallback;
    this.countInput = document.getElementById('player-count');
    this.namesContainer = document.getElementById('player-names-container');
    this.deckSelect = document.getElementById('deck-select');
    this.durationInput = document.getElementById('game-duration');
    this.form = document.getElementById('setup-form');
    this.setupLeftBtn = document.getElementById('setup-left-controls');

    this.bindEvents();
  }

  bindEvents() {
    if (this.countInput) {
      this.countInput.addEventListener('change', () => this.updatePlayerFields());
      this.countInput.addEventListener('input', () => this.updatePlayerFields());
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = this.namesContainer.querySelectorAll('.player-name-input');
        const players = Array.from(inputs).map((inp, idx) => inp.value.trim() || `玩家 ${idx + 1}`);
        const deckId = this.deckSelect ? this.deckSelect.value : '';
        const duration = parseInt(this.durationInput.value) || 10;

        this.hideSetupControls();

        if (this.onStart) {
          this.onStart({ players, deckId, duration });
        }
      });
    }
  }

  // 顯示首頁左下角按鈕（回到首頁時調用）
  showSetupControls() {
    if (this.setupLeftBtn) {
      this.setupLeftBtn.classList.remove('hidden');
    }
  }

  // 隱藏首頁左下角按鈕（進入遊戲 / 結算時調用）
  hideSetupControls() {
    if (this.setupLeftBtn) {
      this.setupLeftBtn.classList.add('hidden');
    }
  }

  loadDecks(decks) {
    if (!this.deckSelect) return;
    this.deckSelect.innerHTML = '';
    decks.forEach(deck => {
      const opt = document.createElement('option');
      opt.value = deck.id;
      opt.textContent = `${deck.name} - ${deck.description}`;
      this.deckSelect.appendChild(opt);
    });
  }

  updatePlayerFields() {
    if (!this.namesContainer || !this.countInput) return;
    const count = parseInt(this.countInput.value) || 2;
    this.namesContainer.innerHTML = '';

    for (let i = 1; i <= count; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'player-name-input';
      input.placeholder = `玩家 ${i} 姓名`;
      input.value = `玩家 ${i}`;
      this.namesContainer.appendChild(input);
    }
  }
}