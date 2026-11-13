// data/decks/campus/recess_adventure_deck.js

const recessAdventureDeck = {
  id: 'recess_adventure_deck',
  name: '(難)⏳ 下課十分鐘的宇宙大冒險',
  description: '下課鐘聲響起走廊變戰場！必須在 10 分鐘內完成任務並趕回教室！',
  bgm: 'warm',
  cards: {
    characters: [
      { id: 'ra_c1', name: '手握紅綠燈指揮棒的走廊巡查員', tag: '人物', icon: '🚦' },
      { id: 'ra_c2', name: '搶佔溜滑梯高地的異世界王霸領主', tag: '人物', icon: '🛝' },
      { id: 'ra_c3', name: '抱著足球狂奔的極速風暴戰士', tag: '人物', icon: '⚽' },
      { id: 'ra_c4', name: '在洗手台調製魔法藥水的小學妹', tag: '人物', icon: '🚰' },
      { id: 'ra_c5', name: '守護福利社大門的零食守衛巨人', tag: '人物', icon: '🥟' },
      { id: 'ra_c6', name: '騎著掃把在走廊巡邏的糾察隊巫師', tag: '人物', icon: '🧹' },
      { id: 'ra_c7', name: '掌握時間沙漏的鐘樓管理員', tag: '人物', icon: '⏳' },
      { id: 'ra_c8', name: '能瞬間移動的鬼抓人暗影刺客', tag: '人物', icon: '👻' },
      { id: 'ra_c9', name: '背著噴射書包的三年級探險家', tag: '人物', icon: '🚀' },
      { id: 'ra_c10', name: '躲在花園草叢裡的樹精靈觀察者', tag: '人物', icon: '🌿' }
    ],
    times: [
      { id: 'ra_t1', name: '下課鐘聲「叮咚」響起的第一秒', tag: '時間', icon: '🔔' },
      { id: 'ra_t2', name: '預備鐘響起、剩最後 60 秒倒數時', tag: '時間', icon: '⏱️' },
      { id: 'ra_t3', name: '大下課二十分鐘開啟的黃金時刻', tag: '時間', icon: '✨' },
      { id: 'ra_t4', name: '中午飯後能量滿滿的探險黃金期', tag: '時間', icon: '☀️' },
      { id: 'ra_t5', name: '鐘樓指針重疊、時空裂縫開啟時', tag: '時間', icon: '🌀' },
      { id: 'ra_t6', name: '下午最後一節下課的夕陽決戰時', tag: '時間', icon: '🌇' },
      { id: 'ra_t7', name: '老師拖堂延誤兩分鐘的緊急時刻', tag: '時間', icon: '😱' },
      { id: 'ra_t8', name: '上課鐘聲最後一響落下的瞬間', tag: '時間', icon: '⚡' }
    ],
    places: [
      { id: 'ra_p1', name: '變形成高速賽車道的二樓走廊', tag: '地點', icon: '🏃' },
      { id: 'ra_p2', name: '化為星際太空要塞的綜合遊具區', tag: '地點', icon: '🚀' },
      { id: 'ra_p3', name: '充滿神奇魔藥的角落洗手台區', tag: '地點', icon: '🧪' },
      { id: 'ra_p4', name: '隱藏著能量寶石的魔法福利社', tag: '地點', icon: '🏪' },
      { id: 'ra_p5', name: '通往異次元的旋轉大象溜滑梯', tag: '地點', icon: '🐘' },
      { id: 'ra_p6', name: '會自動變換階梯的魔法教學樓梯', tag: '地點', icon: '🪜' },
      { id: 'ra_p7', name: '結界保護的操場中央大樹安全區', tag: '地點', icon: '🌳' },
      { id: 'ra_p8', name: '噴出甘甜能量泉水的走廊飲水機', tag: '地點', icon: '🚰' },
      { id: 'ra_p9', name: '布滿雷射光束的訓導處走廊禁區', tag: '地點', icon: '🚨' },
      { id: 'ra_p10', name: '漂浮在雲端之上的舊校舍頂樓', tag: '地點', icon: '☁️' }
    ],
    events: [
      { id: 'ra_e1', name: '為搶最後一個肉包展開魔法對決', tag: '事件', icon: '🥟' },
      { id: 'ra_e2', name: '跳繩在操場甩出連接太空的蟲洞', tag: '事件', icon: '🌀' },
      { id: 'ra_e3', name: '水龍頭噴出五彩繽紛的魔法汽水', tag: '事件', icon: '🥤' },
      { id: 'ra_e4', name: '抓鬼遊戲的鬼獲得瞬間移動超能力', tag: '事件', icon: '👻' },
      { id: 'ra_e5', name: '大象溜滑梯變成通往地底的滑道', tag: '事件', icon: '🐘' },
      { id: 'ra_e6', name: '預備鐘響，全場開始閃避紅綠燈警衛', tag: '事件', icon: '🚨' },
      { id: 'ra_e7', name: '足球踢進球門啟動了校園防護罩', tag: '事件', icon: '🛡️' },
      { id: 'ra_e8', name: '書包背帶發光獲得十秒鐘飛行能力', tag: '事件', icon: '🪽' },
      { id: 'ra_e9', name: '在沙坑挖出一顆會發光的神秘龍蛋', tag: '事件', icon: '🥚' },
      { id: 'ra_e10', name: '走廊地板突然變成加速輸送帶', tag: '事件', icon: '⏩' },
      { id: 'ra_e11', name: '喝下飲水機的水獲得超級順風耳', tag: '事件', icon: '👂' },
      { id: 'ra_e12', name: '時空暫停一分鐘讓大家完成任務', tag: '事件', icon: '⏸️' },
      { id: 'ra_e13', name: '糾察隊吹哨召喚出巨大的障礙牆', tag: '事件', icon: '🧱' },
      { id: 'ra_e14', name: '與外星轉學生交換了宇宙零食', tag: '事件', icon: '🛸' },
      { id: 'ra_e15', name: '在鐘聲結束前成功傳送回自己座位', tag: '事件', icon: '🎯' }
    ],
    challenges: [
      { id: 'ra_s1', name: '喊出「只剩最後三分鐘了快點！」', tag: '狀況', icon: '⏰' },
      { id: 'ra_s2', name: '用極度喘氣且快速的急促語氣說話', tag: '狀況', icon: '💨' },
      { id: 'ra_s3', name: '做出「在原地快速跑步」的動作', tag: '狀況', icon: '👟' },
      { id: 'ra_s4', name: '喊出「絕對不能被巡查老師抓到！」', tag: '狀況', icon: '🙅‍♂️' },
      { id: 'ra_s5', name: '加入一次驚險的最後一秒壓線入場', tag: '狀況', icon: '🎯' },
      { id: 'ra_s6', name: '模仿上課預備鐘「噹～噹～」聲', tag: '狀況', icon: '🔔' },
      { id: 'ra_s7', name: '做出「啟動火箭噴射器起飛」姿勢', tag: '狀況', icon: '🚀' },
      { id: 'ra_s8', name: '台詞中必須包含一個魔法咒語名稱', tag: '狀況', icon: '🪄' },
      { id: 'ra_s9', name: '做出「左顧右盼閃避雷射光」動作', tag: '狀況', icon: '🕵️' },
      { id: 'ra_s10', name: '模仿太空無重力慢動作飄浮說話', tag: '狀況', icon: '👨‍🚀' },
      { id: 'ra_s11', name: '喊出「任務完成！全速撤退回教室！」', tag: '狀況', icon: '🚩' },
      { id: 'ra_s12', name: '以「這十分鐘真是太刺激了！」結尾', tag: '狀況', icon: '🌟' }
    ]
  }
};

export default recessAdventureDeck;