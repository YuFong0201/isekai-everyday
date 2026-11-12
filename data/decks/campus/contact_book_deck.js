// data/decks/campus/contact_book_deck.js

const contactBookDeck = {
  id: 'contact_book_deck',
  name: '📖 聯絡簿裡的秘密異世界',
  description: '聯絡簿居然是異世界地圖！寫錯字或沒簽名就會觸發校園超自然變化！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'cb_c1', name: '忘記簽名的班導師', tag: '人物', icon: '👨‍🏫' },
      { id: 'cb_c2', name: '聯絡簿裡塗鴉畫出的火柴人勇者', tag: '人物', icon: '✍️' },
      { id: 'cb_c3', name: '代簽家長名字被發現的同學', tag: '人物', icon: '👦' },
      { id: 'cb_c4', name: '專門吃錯別字的錯字怪獸', tag: '人物', icon: '👾' }
    ],
    times: [
      { id: 'cb_t1', name: '早自習檢查聯絡簿前最後三分鐘', tag: '時間', icon: '⏰' },
      { id: 'cb_t2', name: '紅筆勾選「未完成」的絕望瞬間', tag: '時間', icon: '❌' }
    ],
    places: [
      { id: 'cb_p1', name: '蓋滿蓋章貼紙的家長簽名欄位區', tag: '地點', icon: '📝' },
      { id: 'cb_p2', name: '變形為迷宮的每日作業清單', tag: '地點', icon: '🗺️' }
    ],
    events: [
      { id: 'cb_e1', name: '因為寫錯注音符號，走廊地板變成了岩漿', tag: '事件', icon: '🌋' },
      { id: 'cb_e2', name: '忘記讓家長簽字，整間教室突然陷入無重力狀態', tag: '事件', icon: '🌌' },
      { id: 'cb_e3', name: '聯絡簿上的每日一句格言突然浮出紙面念出咒語', tag: '事件', icon: '📜' },
      { id: 'cb_e4', name: '用紅筆圈起來的家課欄位召喚出了遠古守護獸', tag: '事件', icon: '🐉' },
      { id: 'cb_e5', name: '評語欄寫下「表現良好」，獲得一張異世界復活卡', tag: '事件', icon: '🌟' },
      { id: 'cb_e6', name: '聯絡簿封面折角處打開了一扇神秘的次元傳送門', tag: '事件', icon: '🚪' }
    ],
    challenges: [
      { id: 'cb_s1', name: '講故事時台詞中必須強調一句「這不是我寫的錯別字！」', tag: '狀況', icon: '🗯️' },
      { id: 'cb_s2', name: '必須用模仿老師批改作業的極度嚴厲語氣說話', tag: '狀況', icon: '👩‍🏫' },
      { id: 'cb_s3', name: '發言過程中角色必須做出「假裝簽名」的手勢', tag: '狀況', icon: '🖋️' },
      { id: 'cb_s4', name: '故事中必須加入一個因為筆劃寫錯而產生的搞笑誤會', tag: '狀況', icon: '🤪' },
      { id: 'cb_s5', name: '台詞中必須出現「天啊！老師要在上面蓋大紅印章了！」', tag: '狀況', icon: '💮' },
      { id: 'cb_s6', name: '說故事時必須使用一次誇張的倒抽一口氣動作', tag: '狀況', icon: '😮' }
    ]
  }
};

export default contactBookDeck;