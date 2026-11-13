// data/decks/campus/recess_battle_deck.js

const recessBattleDeck = {
  id: 'recess_battle_deck',
  name: '(難)⚡ 下課十分鐘大作戰',
  description: '鐘聲一響全班啟動！裝水、上廁所、搶球場與買點心，必須在上課鐘響前回座位！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'rb2_c1', name: '預先綁好鞋帶的短跑健將', tag: '人物', icon: '👟' },
      { id: 'rb2_c2', name: '拿大容量水壺裝水的同學', tag: '人物', icon: '🍶' },
      { id: 'rb2_c3', name: '抱著籃球霸占半場的大哥大', tag: '人物', icon: '🏀' },
      { id: 'rb2_c4', name: '手腳超俐落的福利社阿姨', tag: '人物', icon: '👵' },
      { id: 'rb2_c5', name: '在走廊堵人發作業的風紀股長', tag: '人物', icon: '📋' },
      { id: 'rb2_c6', name: '負責幫忙全組跑腿買點心的代購王', tag: '人物', icon: '🛍️' },
      { id: 'rb2_c7', name: '拿著登記板抓走廊奔跑的值週老師', tag: '人物', icon: '👨‍🏫' },
      { id: 'rb2_c8', name: '永遠在打鐘前才衝去廁所的拖延王', tag: '人物', icon: '🚻' },
      { id: 'rb2_c9', name: '下課十分鐘也要抱佛腳背單字的學霸', tag: '人物', icon: '📖' },
      { id: 'rb2_c10', name: '在教室門口幫忙把風通報的哨兵', tag: '人物', icon: '👀' }
    ],
    times: [
      { id: 'rb2_t1', name: '老師喊下課、鐘聲響起的第 1 秒', tag: '時間', icon: '🔔' },
      { id: 'rb2_t2', name: '距離上課預備鐘聲只剩 90 秒時', tag: '時間', icon: '⏳' },
      { id: 'rb2_t3', name: '預備鐘響起、全校瘋狂奔跑時', tag: '時間', icon: '🏃' },
      { id: 'rb2_t4', name: '第二節大下課二十分鐘開始時', tag: '時間', icon: '☀️' },
      { id: 'rb2_t5', name: '福利社熱騰騰點心剛出爐的瞬間', tag: '時間', icon: '♨️' },
      { id: 'rb2_t6', name: '上課鐘聲響完最後一個音符時', tag: '時間', icon: '😱' },
      { id: 'rb2_t7', name: '老師已經拿著課本走上走廊時', tag: '時間', icon: '👣' },
      { id: 'rb2_t8', name: '只剩最後十秒要衝回座位的時刻', tag: '時間', icon: '⚡' }
    ],
    places: [
      { id: 'rb2_p1', name: '人滿為患的走廊飲水機前', tag: '地點', icon: '🚰' },
      { id: 'rb2_p2', name: '擠滿買肉包學生的福利社櫃檯', tag: '地點', icon: '🏪' },
      { id: 'rb2_p3', name: '排隊排到走廊轉角的廁所門口', tag: '地點', icon: '🚻' },
      { id: 'rb2_p4', name: '最搶手的室外三對三籃球場', tag: '地點', icon: '🏟️' },
      { id: 'rb2_p5', name: '最容易被老師抓包的樓梯轉角', tag: '地點', icon: '🪜' },
      { id: 'rb2_p6', name: '排滿等待批改作業的講台前面', tag: '地點', icon: '📚' },
      { id: 'rb2_p7', name: '老師辦公室外面安靜的長廊', tag: '地點', icon: '🚪' },
      { id: 'rb2_p8', name: '擠滿圍觀同學的桌球桌旁邊', tag: '地點', icon: '🏓' },
      { id: 'rb2_p9', name: '風紀股長寫名字的黑板旁邊', tag: '地點', icon: '🖍️' },
      { id: 'rb2_p10', name: '教室後門最隱密的溜進路線', tag: '地點', icon: '🥷' }
    ],
    events: [
      { id: 'rb2_e1', name: '為搶最後一瓶蘋果牛奶展開對決', tag: '事件', icon: '🥛' },
      { id: 'rb2_e2', name: '飲水機突然顯示「加熱中」無法裝水', tag: '事件', icon: '⚠️' },
      { id: 'rb2_e3', name: '籃球卡在球框與籃板的縫隙之間', tag: '事件', icon: '🎯' },
      { id: 'rb2_e4', name: '上廁所到一半聽到預備鐘聲敲響', tag: '事件', icon: '😱' },
      { id: 'rb2_e5', name: '在走廊奔跑被值週老師抓到罰站', tag: '事件', icon: '🚨' },
      { id: 'rb2_e6', name: '幫忙買的熱狗在奔跑中掉在地上', tag: '事件', icon: '🌭' },
      { id: 'rb2_e7', name: '發現下節要考默寫，課本還沒打開', tag: '事件', icon: '📖' },
      { id: 'rb2_e8', name: '壓線在老師進教室前一秒撲進座位', tag: '事件', icon: '💨' },
      { id: 'rb2_e9', name: '鞋帶在奔跑中鬆開差點撲倒在門口', tag: '事件', icon: '👟' },
      { id: 'rb2_e10', name: '零錢掉滿地，全班幫忙一起撿銅板', tag: '事件', icon: '🪙' },
      { id: 'rb2_e11', name: '在福利社門口巧遇班導師買咖啡', tag: '事件', icon: '☕' },
      { id: 'rb2_e12', name: '全班傳遞考卷接力賽一分鐘發完', tag: '事件', icon: '📄' },
      { id: 'rb2_e13', name: '水壺蓋沒轉緊在書包裡大漏水', tag: '事件', icon: '💦' },
      { id: 'rb2_e14', name: '投進壓哨絕殺球全場歡呼大叫', tag: '事件', icon: '🏆' },
      { id: 'rb2_e15', name: '全班裝作乖乖坐好其實剛跑回來', tag: '事件', icon: '😇' }
    ],
    challenges: [
      { id: 'rb2_s1', name: '喊出「只剩最後 30 秒了！」', tag: '狀況', icon: '⏱️' },
      { id: 'rb2_s2', name: '模仿氣喘吁吁、上氣不接下氣聲', tag: '狀況', icon: '💨' },
      { id: 'rb2_s3', name: '台詞包含「讓開！讓我先過！」', tag: '狀況', icon: '🗣️' },
      { id: 'rb2_s4', name: '用極度緊張且快速的雙倍語速說', tag: '狀況', icon: '⚡' },
      { id: 'rb2_s5', name: '做出「瘋狂看手錶倒數」的姿勢', tag: '狀況', icon: '⌚' },
      { id: 'rb2_s6', name: '台詞出現對福利社食物的極致讚美', tag: '狀況', icon: '🤤' },
      { id: 'rb2_s7', name: '加入一個全班幫忙掩護的場面', tag: '狀況', icon: '🛡️' },
      { id: 'rb2_s8', name: '模仿鐘聲「噹～噹～噹～」音效', tag: '狀況', icon: '🔔' },
      { id: 'rb2_s9', name: '以「幸好最後成功趕上了…」結尾', tag: '狀況', icon: '🎯' },
      { id: 'rb2_s10', name: '做出「衝回座位立刻端坐好」動作', tag: '狀況', icon: '🪑' },
      { id: 'rb2_s11', name: '模仿值週老師喊「走廊不准用跑的！」', tag: '狀況', icon: '📢' },
      { id: 'rb2_s12', name: '做出「在口袋裡狂找零錢」的動作', tag: '狀況', icon: '🪙' }
    ]
  }
};

export default recessBattleDeck;