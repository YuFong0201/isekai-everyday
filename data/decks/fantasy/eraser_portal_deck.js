// data/decks/fantasy/eraser_portal_deck.js

const eraserPortalDeck = {
  id: 'eraser_portal_deck',
  name: '✏️ 今天又是被橡皮擦傳送的一天',
  description: '上課打瞌睡擦掉課本圖案打開了異世界！文具盒成員變身勇者小隊！',
  bgm: 'magic',
  cards: {
    characters: [
      { id: 'ep_c1', name: '自動鉛筆化身的精準劍士', tag: '人物', icon: '🗡️' },
      { id: 'ep_c2', name: '橡皮擦轉生的防禦大盾騎士', tag: '人物', icon: '🛡️' },
      { id: 'ep_c3', name: '15公分直尺演變成的長槍聖騎士', tag: '人物', icon: '📏' },
      { id: 'ep_c4', name: '圓規化身的高階召喚術師', tag: '人物', icon: '📐' }
    ],
    times: [
      { id: 'ep_t1', name: '國語課打瞌睡頭撞到課本那一秒', tag: '時間', icon: '😴' },
      { id: 'ep_t2', name: '橡皮擦屑積成一座小山時', tag: '時間', icon: '🧹' }
    ],
    places: [
      { id: 'ep_p1', name: '被擦掉一半的古蹟圖片課本頁面', tag: '地點', icon: '📖' },
      { id: 'ep_p2', name: '雙層大容量鐵製文具盒內部大廳', tag: '地點', icon: '🧰' }
    ],
    events: [
      { id: 'ep_e1', name: '用力擦拭課本插圖，竟把魔王關卡的牆壁給擦破了', tag: '事件', icon: '🕳️' },
      { id: 'ep_e2', name: '修正帶拉出一條白色光芒高速公路直通異世界城堡', tag: '事件', icon: '🛣️' },
      { id: 'ep_e3', name: '螢光筆畫出的重點變成了高壓防禦雷射光束', tag: '事件', icon: '🖍️' },
      { id: 'ep_e4', name: '文具盒蓋子打開，噴發出耀眼的召喚法陣聖光', tag: '事件', icon: '✨' },
      { id: 'ep_e5', name: '彩繪水彩筆在空中揮舞，畫出了召喚獸支援', tag: '事件', icon: '🎨' },
      { id: 'ep_e6', name: '課本上的歷史人物因為被擦除而憤怒地跳出紙面', tag: '事件', icon: '👴' }
    ],
    challenges: [
      { id: 'ep_s1', name: '台詞中必須包含橡皮擦擦拭的「唰唰唰」音效', tag: '狀況', icon: '🔊' },
      { id: 'ep_s2', name: '講故事時角色必須擺出一個極度浮誇的打瞌睡姿勢', tag: '狀況', icon: '💤' },
      { id: 'ep_s3', name: '必須用極具正義感的勇者隊長語氣發表故事內容', tag: '狀況', icon: '👑' },
      { id: 'ep_s4', name: '台詞中必須出現「快把筆芯按出來！要戰鬥了！」', tag: '狀況', icon: '⚔️' },
      { id: 'fs_s5', name: '故事中必須包含一個因為文具斷裂而發生的緊急危機', tag: '狀況', icon: '⚠️' },
      { id: 'fs_s6', name: '必須使用「如果這是在課本上…」作為一段敘述的開頭', tag: '狀況', icon: '📝' }
    ]
  }
};

export default eraserPortalDeck;