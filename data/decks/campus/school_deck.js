// data/decks/campus/school_deck.js

const schoolDeck = {
  id: 'school_deck',
  name: '🏫 日常校園大冒險',
  description: '圍繞校園生活、同學與有趣的突發事件！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'c1', name: '頑皮的班長', tag: '人物', icon: '👦' },
      { id: 'c2', name: '會說話的流浪狗', tag: '人物', icon: '🐕' },
      { id: 'c3', name: '嚴厲但熱愛打電玩的數學老師', tag: '人物', icon: '👨‍🏫' },
      { id: 'c4', name: '傳說中的轉學生神童', tag: '人物', icon: '🎒' },
      { id: 'c5', name: '神秘的小學弟', tag: '人物', icon: '🧒' }
    ],
    times: [
      { id: 't1', name: '午休做夢時', tag: '時間', icon: '☀️' },
      { id: 't2', name: '放學鐘聲響起的瞬間', tag: '時間', icon: '🔔' },
      { id: 't3', name: '升旗典禮突然下雨時', tag: '時間', icon: '🌧️' },
      { id: 't4', name: '深夜無人的校園打掃時間', tag: '時間', icon: '🌙' }
    ],
    places: [
      { id: 'p1', name: '圖書館最深處的書架', tag: '地點', icon: '📚' },
      { id: 'p2', name: '舊校舍頂樓的風車旁', tag: '地點', icon: '🏫' },
      { id: 'p3', name: '傳說中塞滿糖果的地下福利社', tag: '地點', icon: '🏪' },
      { id: 'p4', name: '總是發出怪聲的自然實驗室', tag: '地點', icon: '🧪' },
      { id: 'p5', name: '被遮陽棚擋住的祕密小花園', tag: '地點', icon: '🌻' },
      { id: 'p6', name: '積水的地下室體育器材室', tag: '地點', icon: '⚽' }
    ],
    events: [
      { id: 'e1', name: '撿到一本會動的日記', tag: '事件', icon: '📖' },
      { id: 'e2', name: '黑板上的字自己動了起來', tag: '事件', icon: '🖍️' },
      { id: 'e3', name: '體育課的排球突然飛向異世界', tag: '事件', icon: '🏐' },
      { id: 'e4', name: '午餐的牛奶盒裡倒出了神秘地圖', tag: '事件', icon: '🥛' },
      { id: 'e5', name: '廣播室突然播放起魔法咒語音樂', tag: '事件', icon: '📻' }
    ],
    challenges: [
      { id: 's1', name: '必須加入「哈哈大笑」的動作描述', tag: '狀況', icon: '🌀' },
      { id: 's2', name: '說故事時只能用三字短句講述過程', tag: '狀況', icon: '💬' },
      { id: 's3', name: '台詞中必須出現「這絕不可能！」', tag: '狀況', icon: '😲' },
      { id: 's4', name: '故事角色必須進行一次緊張的猜拳', tag: '狀況', icon: '✊' },
      { id: 's5', name: '故事中必須包含一種奇怪的食物味道', tag: '狀況', icon: '🍕' }
    ]
  }
};

export default schoolDeck;