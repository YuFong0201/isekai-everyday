// data/decks/campus/recess_adventure_deck.js

const recessAdventureDeck = {
  id: 'recess_adventure_deck',
  name: '⏳ 下課十分鐘的宇宙大冒險',
  description: '下課鐘聲響起走廊變戰場！必須在 10 分鐘內完成任務並趕回教室！',
  bgm: 'warm',
  cards: {
    characters: [
      { id: 'ra_c1', name: '手握紅綠燈指揮棒的走廊巡查員', tag: '人物', icon: '🚦' },
      { id: 'ra_c2', name: '搶佔溜滑梯高地的異世界王霸領主', tag: '人物', icon: '🛝' },
      { id: 'ra_c3', name: '抱著足球狂奔的極速風暴戰士', tag: '人物', icon: '⚽' },
      { id: 'ra_c4', name: '在洗手台調製魔法藥水的小學妹', tag: '人物', icon: '🚰' }
    ],
    times: [
      { id: 'ra_t1', name: '下課鐘聲「叮咚噹咚」響起的第一秒', tag: '時間', icon: '🔔' },
      { id: 'ra_t2', name: '預備鐘聲響起、只剩最後 60 秒倒數時', tag: '時間', icon: '⏱️' }
    ],
    places: [
      { id: 'ra_p1', name: '變形成高速賽車道的二樓走廊', tag: '地點', icon: '🏃' },
      { id: 'ra_p2', name: '化為星際太空要塞的操場綜合遊具區', tag: '地點', icon: '🚀' }
    ],
    events: [
      { id: 'ra_e1', name: '為了搶到最後一個肉包，福利社展開了魔法對決', tag: '事件', icon: '🥟' },
      { id: 'ra_e2', name: '跳繩在操場中央甩出了連接外太空的蟲洞', tag: '事件', icon: '🌀' },
      { id: 'ra_e3', name: '洗手台的水龍頭噴出五彩繽紛的魔法汽水泉水', tag: '事件', icon: '🥤' },
      { id: 'ra_e4', name: '抓鬼遊戲的「鬼」獲得了瞬間移動的超能力陣', tag: '事件', icon: '👻' },
      { id: 'ra_e5', name: '大象溜滑梯變成了通往地底王國的高速滑道', tag: '事件', icon: '🐘' },
      { id: 'ra_e6', name: '預備鐘聲敲響，所有玩家必須開始閃避紅綠燈警衛', tag: '事件', icon: '🚨' }
    ],
    challenges: [
      { id: 'ra_s1', name: '講故事時台詞中必須喊出「只剩最後三分鐘了快點！」', tag: '狀況', icon: '⏰' },
      { id: 'ra_s2', name: '必須用極度喘氣且快速的急促語氣發表故事', tag: '狀況', icon: '💨' },
      { id: 'ra_s3', name: '發言過程中角色必須做出「假裝在原地快速跑步」的動作', tag: '狀況', icon: '👟' },
      { id: 'ra_s4', name: '台詞中必須出現「絕對不能被巡查老師抓到！」', tag: '狀況', icon: '🙅‍♂️' },
      { id: 'ra_s5', name: '故事中必須包含一次驚險無比的最後一秒壓線入場', tag: '狀況', icon: '🎯' },
      { id: 'ra_s6', name: '說故事時必須模仿上課預備鐘聲的「噹～噹～噹～」', tag: '狀況', icon: '🔔' }
    ]
  }
};

export default recessAdventureDeck;