// data/decks/campus/school_deck.js

const schoolDeck = {
  id: 'school_deck',
  name: '(難)🏫 日常校園大冒險',
  description: '圍繞校園生活、同學與有趣的突發事件！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'c1', name: '點子超多的頑皮班長', tag: '人物', icon: '👦' },
      { id: 'c2', name: '校門口會說話的流浪狗', tag: '人物', icon: '🐕' },
      { id: 'c3', name: '熱愛打電玩的嚴厲數學老師', tag: '人物', icon: '👨‍🏫' },
      { id: 'c4', name: '傳說中的神秘轉學生神童', tag: '人物', icon: '🎒' },
      { id: 'c5', name: '總愛跟在後面的好奇小學弟', tag: '人物', icon: '🧒' },
      { id: 'c6', name: '愛講冷笑話的慈祥校長爺爺', tag: '人物', icon: '👴' },
      { id: 'c7', name: '掌管所有教室鑰匙的工友伯伯', tag: '人物', icon: '🔑' },
      { id: 'c8', name: '圖書館裡戴眼鏡的安靜管理員', tag: '人物', icon: '🤓' },
      { id: 'c9', name: '總在自然教室做實驗的科學怪人', tag: '人物', icon: '🔬' },
      { id: 'c10', name: '校園廣播室的神秘DJ小主播', tag: '人物', icon: '📻' }
    ],
    times: [
      { id: 't1', name: '午休趴在桌上做白日夢時', tag: '時間', icon: '☀️' },
      { id: 't2', name: '放學鐘聲響起的那一瞬間', tag: '時間', icon: '🔔' },
      { id: 't3', name: '升旗典禮突然下起大雨時', tag: '時間', icon: '🌧️' },
      { id: 't4', name: '黃昏無人的校園打掃時間', tag: '時間', icon: '🌙' },
      { id: 't5', name: '早自習全班安靜看書的時候', tag: '時間', icon: '📖' },
      { id: 't6', name: '校慶園遊會熱鬧開場那一刻', tag: '時間', icon: '🎪' },
      { id: 't7', name: '月考發下考卷前緊張的時刻', tag: '時間', icon: '📝' },
      { id: 't8', name: '寒暑假前一天結業式的下午', tag: '時間', icon: '🎒' }
    ],
    places: [
      { id: 'p1', name: '圖書館最深處的古老書架', tag: '地點', icon: '📚' },
      { id: 'p2', name: '舊校舍頂樓的生鏽風車旁', tag: '地點', icon: '🏫' },
      { id: 'p3', name: '傳說塞滿糖果的地下福利社', tag: '地點', icon: '🏪' },
      { id: 'p4', name: '總是冒出怪煙的自然實驗室', tag: '地點', icon: '🧪' },
      { id: 'p5', name: '被大樹擋住的秘密小花園', tag: '地點', icon: '🌻' },
      { id: 'p6', name: '光線昏暗的地下體育器材室', tag: '地點', icon: '⚽' },
      { id: 'p7', name: '掛滿學生畫作的藝文展示走廊', tag: '地點', icon: '🖼️' },
      { id: 'p8', name: '可以俯瞰全校的鐘樓陽台邊', tag: '地點', icon: '🕰️' },
      { id: 'p9', name: '充滿鋼琴聲的頂樓音樂教室', tag: '地點', icon: '🎹' },
      { id: 'p10', name: '操場角落神秘的廢棄防空洞口', tag: '地點', icon: '🕳️' }
    ],
    events: [
      { id: 'e1', name: '撿到一本會自己翻頁的日記', tag: '事件', icon: '📖' },
      { id: 'e2', name: '黑板上的粉筆字自己動了起來', tag: '事件', icon: '🖍️' },
      { id: 'e3', name: '體育課的排球飛向了異世界', tag: '事件', icon: '🏐' },
      { id: 'e4', name: '午餐牛奶盒裡倒出神秘藏寶圖', tag: '事件', icon: '🥛' },
      { id: 'e5', name: '廣播室突然播放起魔法咒語音樂', tag: '事件', icon: '📻' },
      { id: 'e6', name: '自然教室的青蛙標本開口說話了', tag: '事件', icon: '🐸' },
      { id: 'e7', name: '音樂教室的鋼琴半夜自己彈奏', tag: '事件', icon: '🎹' },
      { id: 'e8', name: '在圖書館書頁裡發現一張許願券', tag: '事件', icon: '🎫' },
      { id: 'e9', name: '全班的橡皮擦突然集體離家出走', tag: '事件', icon: '🧽' },
      { id: 'e10', name: '發現校長室書櫃後面有秘密通道', tag: '事件', icon: '🚪' },
      { id: 'e11', name: '校園大榕樹下挖出十年前時空膠囊', tag: '事件', icon: '🏺' },
      { id: 'e12', name: '走廊上的銅像突然對大家眨眼睛', tag: '事件', icon: '🗿' },
      { id: 'e13', name: '考卷上的紅字變成小精靈飛出來', tag: '事件', icon: '🧚' },
      { id: 'e14', name: '校園流浪狗叼來一把金色鑰匙', tag: '事件', icon: '🗝️' },
      { id: 'e15', name: '全班齊心協力解開校園七大謎題', tag: '事件', icon: '🔍' }
    ],
    challenges: [
      { id: 's1', name: '必須加入「哈哈大笑」的動作描述', tag: '狀況', icon: '🌀' },
      { id: 's2', name: '說故事時用短促有力的句子講述', tag: '狀況', icon: '💬' },
      { id: 's3', name: '台詞中必須出現「這絕不可能！」', tag: '狀況', icon: '😲' },
      { id: 's4', name: '故事角色必須進行一次緊張猜拳', tag: '狀況', icon: '✊' },
      { id: 's5', name: '故事中必須包含一種奇怪食物味道', tag: '狀況', icon: '🍕' },
      { id: 's6', name: '模仿校狗「汪汪！」兩聲再接故事', tag: '狀況', icon: '🐕' },
      { id: 's7', name: '做出「拿放大鏡仔細尋找線索」動作', tag: '狀況', icon: '🔍' },
      { id: 's8', name: '用播報新聞的校園主播語氣說話', tag: '狀況', icon: '🎙️' },
      { id: 's9', name: '台詞必須出現「快看！那是什麼？」', tag: '狀況', icon: '👉' },
      { id: 's10', name: '做出「被嚇一跳往後退一步」的動作', tag: '狀況', icon: '😱' },
      { id: 's11', name: '加入一個意想不到的搞笑反轉劇情', tag: '狀況', icon: '🔄' },
      { id: 's12', name: '以「校園裡每天都有新驚喜！」結尾', tag: '狀況', icon: '🏫' }
    ]
  }
};

export default schoolDeck;