// data/decks/campus/lunch_negotiation_deck.js

const lunchNegotiationDeck = {
  id: 'lunch_negotiation_deck',
  name: '🍱 午餐時間的談判桌',
  description: '中午打開便當或中央廚房桶子那一刻，全班最熱鬧的挑食與美食交換心理戰！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'ln_c1', name: '絕不吃青椒的挑食專家', tag: '人物', icon: '🫑' },
      { id: 'ln_c2', name: '用炸雞塊交換兩塊滷豆干的美食談判家', tag: '人物', icon: '🍗' },
      { id: 'ln_c3', name: '專門收集水果與牛奶的甜點大亨', tag: '人物', icon: '🧃' },
      { id: 'ln_c4', name: '盛飯總是添得像一座小山的大胃王', tag: '人物', icon: '🍚' },
      { id: 'ln_c5', name: '巡視午餐不能剩飯的午餐督導員', tag: '人物', icon: '👀' }
    ],
    times: [
      { id: 'ln_t1', name: '第四節下課鐘響、掀開便當蓋的第 1 秒', tag: '時間', icon: '🔔' },
      { id: 'ln_t2', name: '午餐時間倒數五分鐘、準備倒廚餘時', tag: '時間', icon: '⏱️' },
      { id: 'ln_t3', name: '加菜盛第二輪的熱血搶奪時刻', tag: '時間', icon: '🍲' }
    ],
    places: [
      { id: 'ln_p1', name: '擺滿各色菜餚的中央廚房飯桶旁', tag: '地點', icon: '🍱' },
      { id: 'ln_p2', name: '併桌成為談判桌的第三排課桌椅', tag: '地點', icon: '🪑' },
      { id: 'ln_p3', name: '排隊倒廚餘與洗便當盒的水槽邊', tag: '地點', icon: '🧽' },
      { id: 'ln_p4', name: '存放蒸便當箱發出陣陣溫熱香氣的走廊角', tag: '地點', icon: '♨️' }
    ],
    events: [
      { id: 'ln_e1', name: '成功用討厭的胡蘿蔔換到了夢寐以求的香腸 slice', tag: '事件', icon: '🌭' },
      { id: 'ln_e2', name: '便當蓋一打開，發現今天的菜色全是自己最愛的甜不辣', tag: '事件', icon: '🎉' },
      { id: 'ln_e3', name: '湯桶底部的最後一顆貢丸引發了全桌猜拳大戰', tag: '事件', icon: '✊' },
      { id: 'ln_e4', name: '不小心把鵪鶉蛋滑落掉到了地上，全場發出惋惜聲', tag: '事件', icon: '🥚' },
      { id: 'ln_e5', name: '暗中進行的美食交易被午餐值日生當場抓包', tag: '事件', icon: '🚨' },
      { id: 'ln_e6', name: '今天的牛奶竟然是稀有的巧克力口味，全班瘋狂交換', tag: '事件', icon: '🍫' },
      { id: 'ln_e7', name: '拿著空碗去別組巡迴，獲得了額外的海苔肉松加菜', tag: '事件', icon: '🍙' },
      { id: 'ln_e8', name: '挑食的蔬菜悄悄藏在白飯底下試圖瞞天過海', tag: '事件', icon: '🙈' },
      { id: 'ln_e9', name: '成功組成了四人便當美食共享聯盟', tag: '事件', icon: '🤝' }
    ],
    challenges: [
      { id: 'ln_s1', name: '講故事時台詞中必須強調一句「這塊肉我用兩顆蛋跟你換！」', tag: '狀況', icon: '💬' },
      { id: 'ln_s2', name: '發言時必須模仿嫌棄討厭食物的極度皺眉表情', tag: '狀況', icon: '😖' },
      { id: 'ln_s3', name: '角色台詞中必須包含「千萬別被老師發現我們在交換！」', tag: '狀況', icon: '🤫' },
      { id: 'ln_s4', name: '必須用極度渴望美食的誇張流口水語氣說話', tag: '狀況', icon: '🤤' },
      { id: 'ln_s5', name: '故事角色的動作必須做出「小心翼翼偷塞食物」的手勢', tag: '狀況', icon: '🤏' },
      { id: 'ln_s6', name: '台詞中必須出現一次對媽媽蒸便當愛的吐槽', tag: '狀況', icon: '🍱' },
      { id: 'ln_s7', name: '必須在情節中加入一場以猜拳決定美食歸屬的緊張場面', tag: '狀況', icon: '🎲' },
      { id: 'ln_s8', name: '說故事時必須模仿咀嚼食物發出的「咀唧咀唧」聲響', tag: '狀況', icon: '🔊' },
      { id: 'ln_s9', name: '必須以「這真是完美的一頓午餐談判！」作為結尾', tag: '狀況', icon: '✨' }
    ]
  }
};

export default lunchNegotiationDeck;