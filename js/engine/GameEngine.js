// js/engine/GameEngine.js
export class GameEngine {
  constructor(playersData, selectedDeck, durationMinutes) {
    // 支持傳入 { name, avatar } 物件陣列或字串陣列
    this.players = playersData.map((p, id) => {
      const name = (typeof p === 'object' ? p.name : p) || `玩家 ${id + 1}`;
      const avatar = (typeof p === 'object' ? p.avatar : null) || `./assets/avatars/player${(id % 8) + 1}.png`;
      return {
        id,
        name,
        avatar,
        score: 0,
        drawnCards: []
      };
    });

    this.currentPlayerIndex = 0;
    this.deck = JSON.parse(JSON.stringify(selectedDeck || {}));
    this.playedCards = [];
    this.isEndingPhase = false;
    this.timeIsUp = false;

    this.initCardPool();
  }

  initCardPool() {
    this.cardPool = [];
    if (!this.deck) return;

    const rawCards = this.deck.cards || this.deck.cardList || this.deck.items || this.deck.list;
    if (!rawCards) return;

    if (Array.isArray(rawCards)) {
      this.cardPool = rawCards.map((c, index) => ({
        id: c.id || `card_${index}`,
        name: c.name || c.title || '故事卡',
        tag: c.tag || c.type || '卡牌',
        icon: c.icon || '📖',
        ...c
      }));
    } else if (typeof rawCards === 'object') {
      Object.keys(rawCards).forEach(cat => {
        const categoryItems = rawCards[cat];
        if (Array.isArray(categoryItems)) {
          categoryItems.forEach((c, index) => {
            this.cardPool.push({
              id: c.id || `card_${cat}_${index}`,
              name: c.name || c.title || '故事卡',
              tag: c.tag || c.type || cat,
              icon: c.icon || '📖',
              ...c
            });
          });
        }
      });
    }

    this.shuffle(this.cardPool);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  triggerTimeUp() {
    this.timeIsUp = true;
  }

  drawOptions() {
    // 情況 A：結局卡階段
    if (!this.cardPool || this.cardPool.length === 0 || this.isEndingPhase || this.timeIsUp) {
      this.isEndingPhase = true;
      return [
        {
          id: 'ending_card',
          name: '🎬 故事完美結局 (為故事畫下句點)',
          tag: '結局',
          icon: '👑',
          isEnding: true
        },
        {
          id: 'pass',
          name: '放棄牌 (跳過)',
          tag: '放棄',
          icon: '🤡',
          isPass: true
        }
      ];
    }

    let options = [];

    // 💡 情況 B：第一個抽牌的人 (playedCards 長度為 0) 的特殊生成邏輯
    if (this.playedCards.length === 0) {
      // 1. 嚴格過濾出非「事件」且非「狀況」的卡片
      const allowedCards = this.cardPool.filter(c => c.tag !== '事件' && c.tag !== '狀況');

      // 2. 搜尋所有的角色/人物卡
      const characterCards = allowedCards.filter(c => c.tag === '人物' || c.tag === '角色');

      if (characterCards.length > 0) {
        // 必定包含至少一張角色卡
        const pickedChar = characterCards[Math.floor(Math.random() * characterCards.length)];
        options.push(pickedChar);

        // 從其餘可允許的卡片（非事件、非狀況）隨機挑選補滿至多 3 張
        const remainingAllowed = allowedCards.filter(c => c.id !== pickedChar.id);
        this.shuffle(remainingAllowed);
        options = options.concat(remainingAllowed.slice(0, 2));
      } else {
        // 備用方案：若無角色卡，則完全隨機抽取非事件、非狀況卡
        this.shuffle(allowedCards);
        options = allowedCards.slice(0, 3);
      }
    } else {
      // 情況 C：後續常規玩家抽牌 (隨機 3 張)
      const count = Math.min(3, this.cardPool.length);
      options = this.cardPool.slice(0, count);
    }

    options.push({
      id: 'pass',
      name: '放棄牌 (跳過)',
      tag: '放棄',
      icon: '🤡',
      isPass: true
    });

    return options;
  }

  nextTurn(playedCard) {
    if (playedCard && !playedCard.isPass) {
      this.playedCards.push(playedCard);
      this.players[this.currentPlayerIndex].drawnCards.push(playedCard);
      this.cardPool = this.cardPool.filter(c => c.id !== playedCard.id);
    }

    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    return this.currentPlayerIndex;
  }

  hasRemainingCards() {
    return (this.cardPool && this.cardPool.length > 0) || this.isEndingPhase || this.timeIsUp;
  }
}