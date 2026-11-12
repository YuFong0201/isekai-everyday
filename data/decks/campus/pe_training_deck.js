// data/decks/campus/pe_training_deck.js

const peTrainingDeck = {
  id: 'pe_training_deck',
  name: '⚽ 體育課的秘密特訓',
  description: '從搬運器材、熱身操到躲避球與跑壘攻防，充滿汗水與擦傷的熱血日常！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'pe_c1', name: '吹著哨子要求動作標準的體育老師', tag: '人物', icon: '👨‍🏫' },
      { id: 'pe_c2', name: '躲避球場上的最後生存者（外場神投）', tag: '人物', icon: '🤾' },
      { id: 'pe_c3', name: '膝蓋貼滿小貼布但依然狂奔的頑皮同學', tag: '人物', icon: '🩹' },
      { id: 'pe_c4', name: '負責去體育器材室搬運重型墊子的小隊長', tag: '人物', icon: '🏋️' },
      { id: 'pe_c5', name: '在樹蔭下負責幫大家顧水壺的加油隊長', tag: '人物', icon: '🥤' }
    ],
    times: [
      { id: 'pe_t1', name: '換好體育服、集合吹哨第一聲時', tag: '時間', icon: ' whistles' },
      { id: 'pe_t2', name: '熱身操伸展、大喊「一二三四」時', tag: '時間', icon: '🙆‍♂️' },
      { id: 'pe_t3', name: '自由活動時間最後十分鐘決勝局', tag: '時間', icon: '⏱️' }
    ],
    places: [
      { id: 'pe_p1', name: '陽光曬得滾燙的二百公尺紅色跑道', tag: '地點', icon: '🏃' },
      { id: 'pe_p2', name: '劃滿黃色邊線的躲避球戰鬥場地', tag: '地點', icon: '🏐' },
      { id: 'pe_p3', name: '散發著皮革與橡膠味的神祕器材室', tag: '地點', icon: '🏀' },
      { id: 'pe_p4', name: '設有保健箱與涼爽冷氣的保健室', tag: '地點', icon: '🏥' }
    ],
    events: [
      { id: 'pe_e1', name: '在躲避球賽中用超帥氣的單手接住了強勁飛球', tag: '事件', icon: '🙌' },
      { id: 'pe_e2', name: '跑步時不小心絆到鞋帶，在沙地上滑壘膝蓋稍微擦傷', tag: '事件', icon: '🩹' },
      { id: 'pe_e3', name: '體育老師宣布「今天自由活動！」全班狂歡喊萬歲', tag: '事件', icon: '🥳' },
      { id: 'pe_e4', name: '排球飛過了圍牆落入了鄰居的院子裡', tag: '事件', icon: '🏡' },
      { id: 'pe_e5', name: '立定跳遠跳出了打破個人記錄的驚人成績', tag: '事件', icon: '📏' },
      { id: 'pe_e6', name: '去保健室擦面母油並獲得了一塊小冰敷袋', tag: '事件', icon: '🧊' },
      { id: 'pe_e7', name: '大隊接力練習時成功完成了無縫流暢傳接棒', tag: '事件', icon: '🏃‍♂️' },
      { id: 'pe_e8', name: '打水仗洗臉時把整張臉與頭髮全弄濕了', tag: '事件', icon: '💦' },
      { id: 'pe_e9', name: '體育課結束大家圍在飲水機前大口暢飲涼水', tag: '事件', icon: '🚰' }
    ],
    challenges: [
      { id: 'pe_s1', name: '講故事時台詞中必須大喊一句「看我的接球！」', tag: '狀況', icon: '🗣️' },
      { id: 'pe_s2', name: '發言時必須模仿體育老師吹哨子「嗶——！」的聲音', tag: '狀況', icon: '😙' },
      { id: 'pe_s3', name: '角色動作必須做出「擴胸熱身操」的運動姿勢', tag: '狀況', icon: '💪' },
      { id: 'pe_s4', name: '台詞中必須出現「這點擦傷算什麼！繼續上！」', tag: '狀況', icon: '🔥' },
      { id: 'pe_s5', name: '必須用極度熱血且充滿運動精神的語氣發表故事', tag: '狀況', icon: '🏆' },
      { id: 'pe_s6', name: '故事中必須包含一個因為高飛球產生的驚險定格場面', tag: '狀況', icon: '🏐' },
      { id: 'pe_s7', name: '台詞中必須出現「解散！跑步走！」的命令語', tag: '狀況', icon: '👟' },
      { id: 'pe_s8', name: '必須模仿跑步時「踏踏踏踏」的腳步聲效果', tag: '狀況', icon: '🔊' },
      { id: 'pe_s9', name: '必須以「這真是最暢快的一堂體育課！」作為結尾', tag: '狀況', icon: '🌟' }
    ]
  }
};

export default peTrainingDeck;