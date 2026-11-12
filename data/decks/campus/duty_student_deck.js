// data/decks/campus/duty_student_deck.js

const dutyStudentDeck = {
  id: 'duty_student_deck',
  name: '🧹 今天我是值日生',
  description: '輪到當值日生的一天！從早讀、午餐抬便當到放學擦黑板的手忙腳亂日常！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'ds_c1', name: '忘記今天輪到自己的搭檔值日生', tag: '人物', icon: '🤦‍♂️' },
      { id: 'ds_c2', name: '要求黑板必須擦到一塵不染的嚴厲老師', tag: '人物', icon: '👩‍🏫' },
      { id: 'ds_c3', name: '搶著幫忙抬午餐桶的熱心壯漢同學', tag: '人物', icon: '🍱' },
      { id: 'ds_c4', name: '在剛掃好的地板上踩滿泥巴的小學妹', tag: '人物', icon: '👧' },
      { id: 'ds_c5', name: '負責檢查衛生評比的衛生股長', tag: '人物', icon: '🧹' }
    ],
    times: [
      { id: 'ds_t1', name: '早自習大家都還沒到校的清晨 7:15', tag: '時間', icon: '🌅' },
      { id: 'ds_t2', name: '第四節下課準備抬午餐飯菜的瞬間', tag: '時間', icon: '🕛' },
      { id: 'ds_t3', name: '放學所有人離開後的寂靜教室整理時間', tag: '時間', icon: '🌇' }
    ],
    places: [
      { id: 'ds_p1', name: '寫滿五種顏色粉筆字跡的大黑板前', tag: '地點', icon: '🖍️' },
      { id: 'ds_p2', name: '堆滿廚餘與空湯桶的中央廚房配餐區', tag: '地點', icon: '🍲' },
      { id: 'ds_p3', name: '塞滿濕漉漉拖把與掃帚的洗手檯後方', tag: '地點', icon: '🪣' },
      { id: 'ds_p4', name: '負責垃圾分類與資源回收的洗滌區', tag: '地點', icon: '♻️' }
    ],
    events: [
      { id: 'ds_e1', name: '拍打黑板擦時，大量粉筆灰形成了濃密煙霧彈', tag: '事件', icon: '💨' },
      { id: 'ds_e2', name: '抬午餐湯桶時不小心將玉玉米濃湯潑出來一小角', tag: '事件', icon: '🥣' },
      { id: 'ds_e3', name: '發現最後一支黃色粉筆斷成了三截', tag: '事件', icon: '✏️' },
      { id: 'ds_e4', name: '擦黑板時因為身高不夠，頂端的字完全擦不到', tag: '事件', icon: '📏' },
      { id: 'ds_e5', name: '掃地時在講台底下掃出了一整年前的遺失作業本', tag: '事件', icon: '📦' },
      { id: 'ds_e6', name: '值日生日誌上記錄了今天發生的搞笑塗鴉事件', tag: '事件', icon: '📓' },
      { id: 'ds_e7', name: '放學關窗戶時發現鎖扣卡住打不開', tag: '事件', icon: '🪟' },
      { id: 'ds_e8', name: '搭檔偷偷跑去打球，只剩下自己一個人打掃', tag: '事件', icon: '🏀' },
      { id: 'ds_e9', name: '衛生檢查得到了全校第一名榮譽獎牌', tag: '事件', icon: '🏅' }
    ],
    challenges: [
      { id: 'ds_s1', name: '講故事時台詞中必須喊出「是誰又把粉筆弄斷了啦！」', tag: '狀況', icon: '🗣️' },
      { id: 'ds_s2', name: '必須連續打一次因為粉筆灰而引發的劇烈咳嗽', tag: '狀況', icon: '😷' },
      { id: 'ds_s3', name: '角色動作必須做出「雙手用力拍打黑板擦」的姿勢', tag: '狀況', icon: '👏' },
      { id: 'ds_s4', name: '台詞中必須出現「午餐湯桶真的超級重！」', tag: '狀況', icon: '🍲' },
      { id: 'ds_s5', name: '必須用非常無奈但又踏實的勞動語氣說話', tag: '狀況', icon: '😮‍💨' },
      { id: 'ds_s6', name: '故事中必須包含一個與「垃圾分類」有關的搞笑衝突', tag: '狀況', icon: '🗑️' },
      { id: 'ds_s7', name: '台詞中必須出現「放學前一定要把門窗全關好！」', tag: '狀況', icon: '🔒' },
      { id: 'ds_s8', name: '必須模仿拖把拖地時「擦擦擦」的聲響效果', tag: '狀況', icon: '🔊' },
      { id: 'ds_s9', name: '必須使用「當值日生真的太不容易了…」作為結尾', tag: '狀況', icon: '📝' }
    ]
  }
};

export default dutyStudentDeck;