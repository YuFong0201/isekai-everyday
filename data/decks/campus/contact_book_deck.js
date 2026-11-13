// data/decks/campus/contact_book_deck.js

const contactBookDeck = {
  id: 'contact_book_deck',
  name: '(難)📖 聯絡簿裡的秘密異世界',
  description: '聯絡簿居然是異世界地圖！寫錯字或沒簽名就會觸發校園超自然變化！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'cb_c1', name: '忘記簽名的班導師', tag: '人物', icon: '👨‍🏫' },
      { id: 'cb_c2', name: '塗鴉畫出的火柴人勇者', tag: '人物', icon: '✍️' },
      { id: 'cb_c3', name: '代簽家長名字被抓的同學', tag: '人物', icon: '👦' },
      { id: 'cb_c4', name: '專門吃錯別字的錯字怪獸', tag: '人物', icon: '👾' },
      { id: 'cb_c5', name: '掌管大紅印章的印章精靈', tag: '人物', icon: '💮' },
      { id: 'cb_c6', name: '負責收聯絡簿的鐵面小老師', tag: '人物', icon: '📋' },
      { id: 'cb_c7', name: '從每日一句跳出來的古人', tag: '人物', icon: '📜' },
      { id: 'cb_c8', name: '藏在橡皮擦屑裡的矮人族', tag: '人物', icon: '🧹' },
      { id: 'cb_c9', name: '把聯絡簿當日記寫的文青', tag: '人物', icon: '🖋️' },
      { id: 'cb_c10', name: '被紅筆圈起來的立可帶騎士', tag: '人物', icon: '🛡️' }
    ],
    times: [
      { id: 'cb_t1', name: '早自習收聯絡簿前最後三分鐘', tag: '時間', icon: '⏰' },
      { id: 'cb_t2', name: '被紅筆打叉的絕望瞬間', tag: '時間', icon: '❌' },
      { id: 'cb_t3', name: '放學前抄寫黑板作業時', tag: '時間', icon: '🖍️' },
      { id: 'cb_t4', name: '深夜書桌檯燈亮起的時候', tag: '時間', icon: '🛋️' },
      { id: 'cb_t5', name: '午休老師批改聯絡簿的時刻', tag: '時間', icon: '😴' },
      { id: 'cb_t6', name: '發回聯絡簿心驚膽跳那一秒', tag: '時間', icon: '💓' },
      { id: 'cb_t7', name: '週五準備迎接週末的下午', tag: '時間', icon: '🎉' },
      { id: 'cb_t8', name: '開學第一天發新聯絡簿時', tag: '時間', icon: '📘' }
    ],
    places: [
      { id: 'cb_p1', name: '蓋滿貼紙的家長簽名欄', tag: '地點', icon: '📝' },
      { id: 'cb_p2', name: '變形為迷宮的每日作業清單', tag: '地點', icon: '🗺️' },
      { id: 'cb_p3', name: '寫滿紅字叮嚀的老師評語區', tag: '地點', icon: '💬' },
      { id: 'cb_p4', name: '積滿橡皮擦屑的書桌峽谷', tag: '地點', icon: '🏔️' },
      { id: 'cb_p5', name: '講台上堆成高塔的聯絡簿山', tag: '地點', icon: '📚' },
      { id: 'cb_p6', name: '被立可帶塗成雪地的頁面', tag: '地點', icon: '❄️' },
      { id: 'cb_p7', name: '聯絡簿背面的九九乘法平原', tag: '地點', icon: '🔢' },
      { id: 'cb_p8', name: '書包最深處的黑暗夾層', tag: '地點', icon: '🎒' },
      { id: 'cb_p9', name: '貼滿榮譽貼紙的封底王國', tag: '地點', icon: '🌟' },
      { id: 'cb_p10', name: '畫滿格子的小日記沼澤地', tag: '地點', icon: '🐊' }
    ],
    events: [
      { id: 'cb_e1', name: '寫錯注音符號，走廊變成岩漿', tag: '事件', icon: '🌋' },
      { id: 'cb_e2', name: '忘記家長簽字，教室陷入無重力', tag: '事件', icon: '🌌' },
      { id: 'cb_e3', name: '每日一句格言浮出紙面念咒語', tag: '事件', icon: '📜' },
      { id: 'cb_e4', name: '紅筆圈起的作業召喚出守護獸', tag: '事件', icon: '🐉' },
      { id: 'cb_e5', name: '獲得「表現良好」異世界復活卡', tag: '事件', icon: '🌟' },
      { id: 'cb_e6', name: '封面折角處打開了次元傳送門', tag: '事件', icon: '🚪' },
      { id: 'cb_e7', name: '立可帶塗改處變出滑溜冰河', tag: '事件', icon: '🧊' },
      { id: 'cb_e8', name: '家長回條突然長出翅膀飛走了', tag: '事件', icon: '🕊️' },
      { id: 'cb_e9', name: '錯字怪獸把明天的考卷吃光了', tag: '事件', icon: '😋' },
      { id: 'cb_e10', name: '小日記裡的恐龍塗鴉衝出紙面', tag: '事件', icon: '🦖' },
      { id: 'cb_e11', name: '拿錯別人的聯絡簿引發身分交換', tag: '事件', icon: '🔄' },
      { id: 'cb_e12', name: '榮譽貼紙發光變成無敵護身符', tag: '事件', icon: '✨' },
      { id: 'cb_e13', name: '老師的紅筆化身成火焰長劍', tag: '事件', icon: '🗡️' },
      { id: 'cb_e14', name: '聯絡簿突然開口大喊快寫作業', tag: '事件', icon: '📢' },
      { id: 'cb_e15', name: '水壺打翻把整本聯絡簿變成大海', tag: '事件', icon: '🌊' }
    ],
    challenges: [
      { id: 'cb_s1', name: '台詞必須說「這不是我寫的錯字！」', tag: '狀況', icon: '🗯️' },
      { id: 'cb_s2', name: '用老師批改作業的嚴厲語氣說話', tag: '狀況', icon: '👩‍🏫' },
      { id: 'cb_s3', name: '發言時做出「假裝簽名」的手勢', tag: '狀況', icon: '🖋️' },
      { id: 'cb_s4', name: '加入一個寫錯筆劃的搞笑誤會', tag: '狀況', icon: '🤪' },
      { id: 'cb_s5', name: '喊出「老師要蓋大紅印章了！」', tag: '狀況', icon: '💮' },
      { id: 'cb_s6', name: '說故事時誇張地倒抽一口氣', tag: '狀況', icon: '😮' },
      { id: 'cb_s7', name: '模仿立可帶「喀啦喀啦」的聲音', tag: '狀況', icon: '🔊' },
      { id: 'cb_s8', name: '做出「雙手合十求老師原諒」動作', tag: '狀況', icon: '🙏' },
      { id: 'cb_s9', name: '台詞必須包含一句四字成語格言', tag: '狀況', icon: '📖' },
      { id: 'cb_s10', name: '用偷偷摸摸、怕被發現的氣音說話', tag: '狀況', icon: '🤫' },
      { id: 'cb_s11', name: '做出「翻找書包找聯絡簿」的動作', tag: '狀況', icon: '🎒' },
      { id: 'cb_s12', name: '以「明天一定要記得簽名！」結尾', tag: '狀況', icon: '✅' }
    ]
  }
};

export default contactBookDeck;