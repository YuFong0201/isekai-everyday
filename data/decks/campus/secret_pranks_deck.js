// data/decks/campus/secret_pranks_deck.js

const secretPranksDeck = {
  id: 'secret_pranks_deck',
  name: '(難)🤫 偷偷進行的小秘密',
  description: '課本插圖畫鬍子、抽屜傳暗號與神速塞零食！屬於同儕間的叛逆樂趣！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'sp_c1', name: '在課本古人臉上畫墨鏡的塗鴉天才', tag: '人物', icon: '🥸' },
      { id: 'sp_c2', name: '趁老師寫黑板神速偷吃零食的吃貨', tag: '人物', icon: '🥔' },
      { id: 'sp_c3', name: '精通手勢暗號傳紙條的通信專家', tag: '人物', icon: '✉️' },
      { id: 'sp_c4', name: '午休睜眼裝睡被抓包的搞笑夥伴', tag: '人物', icon: '👁️' },
      { id: 'sp_c5', name: '在走廊幫忙把風通風報信的哨兵', tag: '人物', icon: '🚨' },
      { id: 'sp_c6', name: '把漫畫書藏在課本裡看的偽裝大師', tag: '人物', icon: '📚' },
      { id: 'sp_c7', name: '負責在後面逗大家笑的憋笑終結者', tag: '人物', icon: '🤣' },
      { id: 'sp_c8', name: '用橡皮擦雕刻秘密印章的手作達人', tag: '人物', icon: '🧽' },
      { id: 'sp_c9', name: '永遠坐最後一排靠窗的情報總指揮', tag: '人物', icon: '🪟' },
      { id: 'sp_c10', name: '眼神銳利、隨時準備回頭突襲的老師', tag: '人物', icon: '👨‍🏫' }
    ],
    times: [
      { id: 'sp_t1', name: '老師轉身在黑板寫長篇公式那一秒', tag: '時間', icon: '🖍️' },
      { id: 'sp_t2', name: '午休全班趴在桌上裝睡的寧靜時刻', tag: '時間', icon: '💤' },
      { id: 'sp_t3', name: '紙條掉在走廊中央的千鈞一髮瞬間', tag: '時間', icon: '😱' },
      { id: 'sp_t4', name: '自習課教室安靜到聽見針掉地上時', tag: '時間', icon: '🤫' },
      { id: 'sp_t5', name: '風紀股長轉身去擦黑板的空檔時間', tag: '時間', icon: '🧹' },
      { id: 'sp_t6', name: '下午第一節大家昏昏欲睡的時候', tag: '時間', icon: '🥱' },
      { id: 'sp_t7', name: '全班低頭寫考卷、老師巡堂經過時', tag: '時間', icon: '📝' },
      { id: 'sp_t8', name: '下課鐘聲響起前最後一分鐘倒數時', tag: '時間', icon: '⏱️' }
    ],
    places: [
      { id: 'sp_p1', name: '掩護所有小動作的書包與抽屜深處', tag: '地點', icon: '🎒' },
      { id: 'sp_p2', name: '歷史課本第 42 頁人物塗鴉區', tag: '地點', icon: '📖' },
      { id: 'sp_p3', name: '桌子底下傳遞紙條的秘密通道', tag: '地點', icon: '✉️' },
      { id: 'sp_p4', name: '午休眼睛偷瞄窗外的倒數第二排', tag: '地點', icon: '🪟' },
      { id: 'sp_p5', name: '立起來當成超完美掩體的大本字典', tag: '地點', icon: '📕' },
      { id: 'sp_p6', name: '教室後方公佈欄死角的秘密基地', tag: '地點', icon: '📌' },
      { id: 'sp_p7', name: '老師講桌正下方最危險的視覺盲區', tag: '地點', icon: '🙈' },
      { id: 'sp_p8', name: '藏著秘密零食的鉛筆盒夾層裡面', tag: '地點', icon: '✏️' },
      { id: 'sp_p9', name: '用外套蓋住頭裝睡的溫暖小帳篷', tag: '地點', icon: '🧥' },
      { id: 'sp_p10', name: '傳紙條必經的第三排走道危險地帶', tag: '地點', icon: '🚧' }
    ],
    events: [
      { id: 'sp_e1', name: '神速塞進巧克力並擺出超嚴肅臉', tag: '事件', icon: '🍫' },
      { id: 'sp_e2', name: '小紙條掉在走廊中央，全班屏息', tag: '事件', icon: '📄' },
      { id: 'sp_e3', name: '在課本古人畫雷射眼，同桌笑到抖', tag: '事件', icon: '🚀' },
      { id: 'sp_e4', name: '午休裝睡憋不住笑發出怪異鼻息聲', tag: '事件', icon: '🤭' },
      { id: 'sp_e5', name: '抽屜手勢暗號成功約好下課買點心', tag: '事件', icon: '👌' },
      { id: 'sp_e6', name: '捏橡皮擦屑小球進行桌面彈珠對決', tag: '事件', icon: '⚪' },
      { id: 'sp_e7', name: '紙條安全抵達，寫著「今晚線上見」', tag: '事件', icon: '💬' },
      { id: 'sp_e8', name: '老師走向走廊撿起紙條，大家緊張', tag: '事件', icon: '💥' },
      { id: 'sp_e9', name: '成功完成課堂上最刺激的秘密行動', tag: '事件', icon: '🏅' },
      { id: 'sp_e10', name: '偷吃洋芋片聲音太大全班轉頭看他', tag: '事件', icon: '👀' },
      { id: 'sp_e11', name: '用摩斯密碼敲桌子進行隔空大聊天', tag: '事件', icon: '✊' },
      { id: 'sp_e12', name: '把老師的口頭禪偷偷畫成賓果連線', tag: '事件', icon: '🎲' },
      { id: 'sp_e13', name: '兩人共用一副耳機偷聽音樂被發現', tag: '事件', icon: '🎧' },
      { id: 'sp_e14', name: '在鉛筆盒蓋子內側建立秘密留言板', tag: '事件', icon: '✍️' },
      { id: 'sp_e15', name: '全班眼神交流完成完美無聲惡作劇', tag: '事件', icon: '😉' }
    ],
    challenges: [
      { id: 'sp_s1', name: '喊出「噓！絕對不能被老師發現！」', tag: '狀況', icon: '🤫' },
      { id: 'sp_s2', name: '模仿偷吃零食不敢大動的咀嚼聲', tag: '狀況', icon: '🤐' },
      { id: 'sp_s3', name: '做出「瞄窗外、桌下傳東西」姿勢', tag: '狀況', icon: '👀' },
      { id: 'sp_s4', name: '台詞出現「這是我們的獨家暗號！」', tag: '狀況', icon: '🤐' },
      { id: 'sp_s5', name: '用壓低聲音、神秘的竊竊私語說話', tag: '狀況', icon: '💬' },
      { id: 'sp_s6', name: '加入一個憋笑差點破功的搞笑情節', tag: '狀況', icon: '😆' },
      { id: 'sp_s7', name: '喊出「老師轉過來了！快裝平靜！」', tag: '狀況', icon: '⚡' },
      { id: 'sp_s8', name: '模仿紙條展開時「沙沙沙」的聲音', tag: '狀況', icon: '🔊' },
      { id: 'sp_s9', name: '以「這就是我們最酷的小秘密！」結尾', tag: '狀況', icon: '🌟' },
      { id: 'sp_s10', name: '做出「立刻趴下假裝熟睡」的動作', tag: '狀況', icon: '😴' },
      { id: 'sp_s11', name: '用手指比出三個神秘的暗號手勢', tag: '狀況', icon: '🤟' },
      { id: 'sp_s12', name: '一邊忍住笑意一邊講完這段故事', tag: '狀況', icon: '🤭' }
    ]
  }
};

export default secretPranksDeck;