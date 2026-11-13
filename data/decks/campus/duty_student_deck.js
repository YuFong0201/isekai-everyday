// data/decks/campus/duty_student_deck.js

const dutyStudentDeck = {
  id: 'duty_student_deck',
  name: '(難)🧹 今天我是值日生',
  description: '輪到當值日生的一天！從早讀、午餐抬便當到放學擦黑板的手忙腳亂日常！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'ds_c1', name: '忘記今天值日的迷糊搭檔', tag: '人物', icon: '🤦‍♂️' },
      { id: 'ds_c2', name: '要求黑板一塵不染的嚴厲老師', tag: '人物', icon: '👩‍🏫' },
      { id: 'ds_c3', name: '搶著幫忙抬午餐桶的熱心壯漢', tag: '人物', icon: '🍱' },
      { id: 'ds_c4', name: '在剛拖好地板踩滿泥巴的學妹', tag: '人物', icon: '👧' },
      { id: 'ds_c5', name: '拿著評分板巡邏的衛生股長', tag: '人物', icon: '🧹' },
      { id: 'ds_c6', name: '每天都第一個到校開門的同學', tag: '人物', icon: '🔑' },
      { id: 'ds_c7', name: '把掃把當成電吉他的搞笑同學', tag: '人物', icon: '🎸' },
      { id: 'ds_c8', name: '專門監督資源回收的環保小尖兵', tag: '人物', icon: '♻️' },
      { id: 'ds_c9', name: '總是最後才交作業的拖延王', tag: '人物', icon: '🐢' },
      { id: 'ds_c10', name: '來幫忙擦高處窗戶的籃球隊長', tag: '人物', icon: '🏀' }
    ],
    times: [
      { id: 'ds_t1', name: '早自習還沒人到校的清晨七點', tag: '時間', icon: '🌅' },
      { id: 'ds_t2', name: '第四節下課準備抬午餐的瞬間', tag: '時間', icon: '🕛' },
      { id: 'ds_t3', name: '放學後教室空無一人的黃昏時', tag: '時間', icon: '🌇' },
      { id: 'ds_t4', name: '每節下課鐘響衝上講台擦黑板時', tag: '時間', icon: '🔔' },
      { id: 'ds_t5', name: '全校大掃除音樂響起的那一刻', tag: '時間', icon: '🎶' },
      { id: 'ds_t6', name: '衛生股長來打分數前最後一分鐘', tag: '時間', icon: '⏱️' },
      { id: 'ds_t7', name: '中午午休準備關燈睡覺前', tag: '時間', icon: '🌙' },
      { id: 'ds_t8', name: '週五放學前要倒光所有垃圾時', tag: '時間', icon: '🗑️' }
    ],
    places: [
      { id: 'ds_p1', name: '寫滿五色粉筆字的大黑板前', tag: '地點', icon: '🖍️' },
      { id: 'ds_p2', name: '堆滿空湯桶的中央廚房配餐區', tag: '地點', icon: '🍲' },
      { id: 'ds_p3', name: '塞滿濕拖把與掃帚的清潔櫃', tag: '地點', icon: '🪣' },
      { id: 'ds_p4', name: '負責資源回收分類的洗滌區', tag: '地點', icon: '♻️' },
      { id: 'ds_p5', name: '擺放班級日誌與粉筆的講桌旁', tag: '地點', icon: '📚' },
      { id: 'ds_p6', name: '剛打過蠟閃閃發亮的教室走廊', tag: '地點', icon: '✨' },
      { id: 'ds_p7', name: '堆滿落葉的班級負責外掃區', tag: '地點', icon: '🍂' },
      { id: 'ds_p8', name: '掛滿濕抹布的教室後方洗手台', tag: '地點', icon: '🚰' },
      { id: 'ds_p9', name: '全校最遠的三樓盡頭垃圾場', tag: '地點', icon: '🚮' },
      { id: 'ds_p10', name: '黑板溝槽積滿粉筆灰的角落', tag: '地點', icon: '💨' }
    ],
    events: [
      { id: 'ds_e1', name: '拍打黑板擦噴出濃密粉筆煙霧彈', tag: '事件', icon: '💨' },
      { id: 'ds_e2', name: '抬午餐湯桶不小心潑出玉米濃湯', tag: '事件', icon: '🥣' },
      { id: 'ds_e3', name: '發現最後一支黃色粉筆斷成三截', tag: '事件', icon: '✏️' },
      { id: 'ds_e4', name: '身高不夠，黑板頂端的字擦不到', tag: '事件', icon: '📏' },
      { id: 'ds_e5', name: '講台底下掃出去年遺失的作業本', tag: '事件', icon: '📦' },
      { id: 'ds_e6', name: '值日生日誌出現神秘的搞笑塗鴉', tag: '事件', icon: '📓' },
      { id: 'ds_e7', name: '放學關窗戶發現鎖扣卡住打不開', tag: '事件', icon: '🪟' },
      { id: 'ds_e8', name: '搭檔偷跑去打球，剩自己一人打掃', tag: '事件', icon: '🏀' },
      { id: 'ds_e9', name: '衛生檢查獲得全校第一名榮譽獎牌', tag: '事件', icon: '🏅' },
      { id: 'ds_e10', name: '垃圾袋破掉，紙屑撒滿整條走廊', tag: '事件', icon: '🎊' },
      { id: 'ds_e11', name: '水龍頭沒關緊變成室內噴水池', tag: '事件', icon: '⛲' },
      { id: 'ds_e12', name: '把老師還沒抄完的筆記擦掉了', tag: '事件', icon: '😱' },
      { id: 'ds_e13', name: '抬餐桶下樓梯差點上演滑壘特技', tag: '事件', icon: '⚡' },
      { id: 'ds_e14', name: '在掃具櫃發現一隻迷路的小青蛙', tag: '事件', icon: '🐸' },
      { id: 'ds_e15', name: '全班提早完成打掃獲得自由時間', tag: '事件', icon: '🥳' }
    ],
    challenges: [
      { id: 'ds_s1', name: '喊出「是誰又把粉筆弄斷了啦！」', tag: '狀況', icon: '🗣️' },
      { id: 'ds_s2', name: '模仿吸入粉筆灰而劇烈咳嗽', tag: '狀況', icon: '😷' },
      { id: 'ds_s3', name: '做出「雙手用力拍黑板擦」的動作', tag: '狀況', icon: '👏' },
      { id: 'ds_s4', name: '台詞出現「午餐湯桶真的超級重！」', tag: '狀況', icon: '🍲' },
      { id: 'ds_s5', name: '用無奈但又踏實的勞動語氣說話', tag: '狀況', icon: '😮‍💨' },
      { id: 'ds_s6', name: '加入一個「垃圾分類」的搞笑衝突', tag: '狀況', icon: '🗑️' },
      { id: 'ds_s7', name: '喊出「放學前一定要關好門窗！」', tag: '狀況', icon: '🔒' },
      { id: 'ds_s8', name: '模仿拖把拖地「擦擦擦」的音效', tag: '狀況', icon: '🔊' },
      { id: 'ds_s9', name: '以「當值日生太不容易了…」結尾', tag: '狀況', icon: '📝' },
      { id: 'ds_s10', name: '做出「踮起腳尖擦高處黑板」姿勢', tag: '狀況', icon: '🙆' },
      { id: 'ds_s11', name: '模仿衛生股長嚴格檢查的語氣', tag: '狀況', icon: '🧐' },
      { id: 'ds_s12', name: '做出「兩手提著重物走路」的樣子', tag: '狀況', icon: '🏋️' }
    ]
  }
};

export default dutyStudentDeck;