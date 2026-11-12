// data/decks/library/library_deck.js

const libraryDeck = {
  id: 'library_deck',
  name: '📚 圖書館的失控書單',
  description: '禁忌力量爆發！文學經典與歷史英雄亂入現代日常！',
  bgm: 'detective',
  cards: {
    characters: [
      { id: 'lc1', name: '手握火槍的唐吉訶德', tag: '人物', icon: '🛡️' },
      { id: 'lc2', name: '帶著防毒面具的歇洛克·福爾摩斯', tag: '人物', icon: '🔍' },
      { id: 'lc3', name: '發脾氣的大文豪莎士比亞', tag: '人物', icon: '📜' },
      { id: 'lc4', name: '剛從《三國演義》跳出來的草船諸葛亮', tag: '人物', icon: '🪶' },
      { id: 'lc5', name: '被現代手機吸引的神燈精靈', tag: '人物', icon: '🧞' }
    ],
    times: [
      { id: 'lt1', name: '圖書館即將閉館打烊前五分鐘', tag: '時間', icon: '⏰' },
      { id: 'lt2', name: '翻開印有血紅印章的古籍那一刻', tag: '時間', icon: '📕' },
      { id: 'lt3', name: '午後陽光透射過玻璃窗的打瞌睡時分', tag: '時間', icon: '🌤️' },
      { id: 'lt4', name: '雷電交加的停電閱覽室夜裡', tag: '時間', icon: '⚡' }
    ],
    places: [
      { id: 'lp1', name: '現代連鎖書店的暢銷排行榜前', tag: '地點', icon: '🏬' },
      { id: 'lp2', name: '古董書籍修復室的地下藏書庫', tag: '地點', icon: '🗝️' },
      { id: 'lp3', name: '浮現文字光芒的自習室角落', tag: '地點', icon: '💡' },
      { id: 'lp4', name: '變形為《西遊記》水簾洞的學校閱覽區', tag: '地點', icon: '🌊' },
      { id: 'lp5', name: '通往《海底兩萬哩》的自動販賣機後方', tag: '地點', icon: '🐙' },
      { id: 'lp6', name: '堆滿絕版漫畫的古本屋閣樓', tag: '地點', icon: '📦' }
    ],
    events: [
      { id: 'le1', name: '書本文字化為金屬飛刃滿天狂飆', tag: '事件', icon: '🗡️' },
      { id: 'le2', name: '閱讀者突然被吸入小說第一頁', tag: '事件', icon: '🌀' },
      { id: 'le3', name: '名著主角在走廊上大聲朗誦禁忌詩篇', tag: '事件', icon: '🗣️' },
      { id: 'le4', name: '歷史考卷上的英雄人物全部走出圖片', tag: '事件', icon: '🖼️' },
      { id: 'le5', name: '整座圖書館的書架像魔術方塊般旋轉', tag: '事件', icon: '🧱' }
    ],
    challenges: [
      { id: 'ls1', name: '必須用極度誇張的名著語氣說出一句台詞', tag: '狀況', icon: '🎭' },
      { id: 'ls2', name: '故事中必須包含一本虛構的名著書名', tag: '狀況', icon: '📘' },
      { id: 'ls3', name: '說故事時角色必須打一次劇烈的噴嚏', tag: '狀況', icon: '🤧' },
      { id: 'ls4', name: '台詞中必須出現「這不是原著的劇情！」', tag: '狀況', icon: '🗯️' },
      { id: 'ls5', name: '必須使用「修辭法（如比喻或排比）」敘述場面', tag: '狀況', icon: '✍️' }
    ]
  }
};

export default libraryDeck;