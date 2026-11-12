// data/decks/campus/recess_battle_deck.js

const recessBattleDeck = {
  id: 'recess_battle_deck',
  name: '⚡ 下課十分鐘大作戰',
  description: '鐘聲一響全班啟動！裝水、上廁所、搶球場與買點心，必須在上課鐘響前回座位！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'rb2_c1', name: '預先綁好鞋帶的短跑健將', tag: '人物', icon: '👟' },
      { id: 'rb2_c2', name: '站在飲水機前裝大容量水壺的同學', tag: '人物', icon: '🍶' },
      { id: 'rb2_c3', name: '手握籃球霸占半場的大哥大', tag: '人物', icon: '🏀' },
      { id: 'rb2_c4', name: '福利社阿姨與找零助手', tag: '人物', icon: '👵' },
      { id: 'rb2_c5', name: '專門在走廊堵人發作業的風紀股長', tag: '人物', icon: '📋' }
    ],
    times: [
      { id: 'rb2_t1', name: '老師喊下課、鐘聲剛響起的第 1 秒', tag: '時間', icon: '🔔' },
      { id: 'rb2_t2', name: '距離上課預備鐘聲只剩 90 秒時', tag: '時間', icon: '⏳' },
      { id: 'rb2_t3', name: '預備鐘聲響起、全校學生瘋狂奔跑時', tag: '時間', icon: '🏃' }
    ],
    places: [
      { id: 'rb2_p1', name: '人滿為患的走廊飲水機前', tag: '地點', icon: '🚰' },
      { id: 'rb2_p2', name: '擠滿買肉包學生的福利社結帳櫃檯', tag: '地點', icon: '🏪' },
      { id: 'rb2_p3', name: '排隊排到女廁門口的大老遠走廊', tag: '地點', icon: '🚻' },
      { id: 'rb2_p4', name: '最搶手的室外三對三籃球場', tag: '地點', icon: '🏟️' }
    ],
    events: [
      { id: 'rb2_e1', name: '為了搶到最後一瓶蘋果牛奶，在福利社進行了走位對決', tag: '事件', icon: '🥛' },
      { id: 'rb2_e2', name: '飲水機突然顯示「水溫過高加熱中」無法裝水', tag: '事件', icon: '⚠️' },
      { id: 'rb2_e3', name: '籃球不小心卡在球框與板子的縫隙之間', tag: '事件', icon: '🎯' },
      { id: 'rb2_e4', name: '上廁所到一半突然聽到預備鐘聲敲響', tag: '事件', icon: '😱' },
      { id: 'rb2_e5', name: '在走廊跑步被值週老師抓到現場罰站一分鐘', tag: '事件', icon: '🚨' },
      { id: 'rb2_e6', name: '同學幫忙買的熱狗在奔跑過程中掉落在地上', tag: '事件', icon: '🌭' },
      { id: 'rb2_e7', name: '發現下一節課要考國語默寫，課本還沒打開', tag: '事件', icon: '📖' },
      { id: 'rb2_e8', name: '壓線在老師踏進教室前一秒撲進座位', tag: '事件', icon: '💨' },
      { id: 'rb2_e9', name: '鞋帶在奔跑中鬆開，差點撲倒在教室門口', tag: '事件', icon: '👟' }
    ],
    challenges: [
      { id: 'rb2_s1', name: '講故事時台詞中必須強調一次「只剩最後 30 秒了！」', tag: '狀況', icon: '⏱️' },
      { id: 'rb2_s2', name: '發言時必須模仿氣喘吁吁、上氣不接下氣的喘息聲', tag: '狀況', icon: '💨' },
      { id: 'rb2_s3', name: '角色台詞中必須包含「讓開！讓我先過！」', tag: '狀況', icon: '🗣️' },
      { id: 'rb2_s4', name: '必須用極度緊張且快速的雙倍語速發表故事', tag: '狀況', icon: '⚡' },
      { id: 'rb2_s5', name: '故事角色的動作必須做出「瘋狂看手錶」的姿勢', tag: '狀況', icon: '⌚' },
      { id: 'rb2_s6', name: '台詞中必須出現一次對福利社食物的極致讚美', tag: '狀況', icon: '🤤' },
      { id: 'rb2_s7', name: '必須在情節中加入一個全班集體幫忙掩護的場面', tag: '狀況', icon: '🛡️' },
      { id: 'rb2_s8', name: '說故事時必須模仿鐘聲「噹～噹～噹～噹～」音效', tag: '狀況', icon: '🔔' },
      { id: 'rb2_s9', name: '必須以「幸好最後成功趕上了…」作為階段結尾', tag: '狀況', icon: '🎯' }
    ]
  }
};

export default recessBattleDeck;