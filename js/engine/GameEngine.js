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
    const endingCard = {
      id: 'ending_card',
      name: '🎬 故事完美結局 (為故事畫下句點)',
      tag: '結局',
      icon: '👑',
      isEnding: true
    };

    const passCard = {
      id: 'pass',
      name: '放棄牌 (跳過)',
      tag: '放棄',
      icon: '🤡',
      isPass: true
    };

    // 情況 A：純結局卡階段（牌庫完全空了、或時間到了）
    if (!this.cardPool || this.cardPool.length === 0 || this.timeIsUp) {
      this.isEndingPhase = true;
      return [endingCard, passCard];
    }

    // 情況 B：剩餘卡片數 <= 3 張時，將「結局牌」加入剩餘的故事牌中一起供玩家選擇
    if (this.cardPool.length <= 3) {
      this.shuffle(this.cardPool);
      return [...this.cardPool, endingCard, passCard];
    }

    let options = [];

    // 情況 C：第一個抽牌的人 (playedCards 長度為 0) 的特殊生成邏輯 (共 5 張)
    if (this.playedCards.length === 0) {
      const allowedCards = this.cardPool.filter(c => c.tag !== '事件' && c.tag !== '狀況');
      const characterCards = allowedCards.filter(c => c.tag === '人物' || c.tag === '角色');

      if (characterCards.length > 0) {
        const pickedChar = characterCards[Math.floor(Math.random() * characterCards.length)];
        options.push(pickedChar);

        const remainingAllowed = allowedCards.filter(c => c.id !== pickedChar.id);
        this.shuffle(remainingAllowed);
        options = options.concat(remainingAllowed.slice(0, 4));
      } else {
        this.shuffle(allowedCards);
        options = allowedCards.slice(0, 5);
      }

      if (options.length < 5 && this.cardPool.length > options.length) {
        const pickedIds = new Set(options.map(c => c.id));
        const extraCards = this.cardPool.filter(c => !pickedIds.has(c.id));
        this.shuffle(extraCards);
        options = options.concat(extraCards.slice(0, 5 - options.length));
      }
    } else {
      // 情況 D：後續常規玩家抽牌 (隨機 5 張)
      this.shuffle(this.cardPool);
      const count = Math.min(5, this.cardPool.length);
      options = this.cardPool.slice(0, count);
    }

    // 加上放棄牌
    options.push(passCard);

    return options;
  }

  // 支援傳入單張卡牌或「多張卡牌陣列」
  nextTurn(playedCardsInput) {
    const cardsList = Array.isArray(playedCardsInput)
      ? playedCardsInput
      : (playedCardsInput ? [playedCardsInput] : []);

    const validCards = cardsList.filter(c => c && !c.isPass);

    if (validCards.length > 0) {
      const usedIds = new Set(validCards.map(c => c.id));
      validCards.forEach(card => {
        this.playedCards.push(card);
        this.players[this.currentPlayerIndex].drawnCards.push(card);
      });
      this.cardPool = this.cardPool.filter(c => !usedIds.has(c.id));
    }

    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    return this.currentPlayerIndex;
  }

  hasRemainingCards() {
    return (this.cardPool && this.cardPool.length > 0) || this.isEndingPhase || this.timeIsUp;
  }
}