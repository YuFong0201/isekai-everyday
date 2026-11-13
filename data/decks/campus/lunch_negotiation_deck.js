// data/decks/campus/lunch_negotiation_deck.js

const lunchNegotiationDeck = {
  id: 'lunch_negotiation_deck',
  name: '(難)🍱 午餐時間的談判桌',
  description: '中午打開便當或中央廚房桶子那一刻，全班最熱鬧的挑食與美食交換心理戰！',
  bgm: 'school',
  cards: {
    characters: [
      { id: 'ln_c1', name: '絕不吃青椒的挑食專家', tag: '人物', icon: '🫑' },
      { id: 'ln_c2', name: '用雞塊換兩塊豆干的美食談判家', tag: '人物', icon: '🍗' },
      { id: 'ln_c3', name: '專門收集水果與牛奶的甜點大亨', tag: '人物', icon: '🧃' },
      { id: 'ln_c4', name: '盛飯總是添得像座小山的大胃王', tag: '人物', icon: '🍚' },
      { id: 'ln_c5', name: '巡視大家不能剩飯的午餐督導員', tag: '人物', icon: '👀' },
      { id: 'ln_c6', name: '每天帶超豪華愛心便當的同學', tag: '人物', icon: '🍱' },
      { id: 'ln_c7', name: '負責公平分配主菜的打菜小隊長', tag: '人物', icon: '🥄' },
      { id: 'ln_c8', name: '自備海苔與香鬆的調味魔法師', tag: '人物', icon: '🍙' },
      { id: 'ln_c9', name: '吃飯速度全班第一的閃電俠', tag: '人物', icon: '⚡' },
      { id: 'ln_c10', name: '總是最後一個還在啃雞腿的慢郎中', tag: '人物', icon: '🐢' }
    ],
    times: [
      { id: 'ln_t1', name: '下課鐘響、掀開便當蓋的第 1 秒', tag: '時間', icon: '🔔' },
      { id: 'ln_t2', name: '午餐倒數五分鐘、準備倒廚餘時', tag: '時間', icon: '⏱️' },
      { id: 'ln_t3', name: '開放加菜盛第二輪的搶奪時刻', tag: '時間', icon: '🍲' },
      { id: 'ln_t4', name: '第四節課肚子餓到咕咕叫的時候', tag: '時間', icon: '🤤' },
      { id: 'ln_t5', name: '週三特別加菜日端出炸雞腿時', tag: '時間', icon: '🍗' },
      { id: 'ln_t6', name: '老師轉身去裝湯、沒在看講台時', tag: '時間', icon: '🤫' },
      { id: 'ln_t7', name: '發下冰涼水果與甜點的歡樂瞬間', tag: '時間', icon: '🍎' },
      { id: 'ln_t8', name: '午休鐘聲快響起的最後衝刺階段', tag: '時間', icon: '🏃' }
    ],
    places: [
      { id: 'ln_p1', name: '擺滿熱騰騰菜餚的中央廚房餐車旁', tag: '地點', icon: '🍱' },
      { id: 'ln_p2', name: '併桌變成談判桌的第三排課桌椅', tag: '地點', icon: '🪑' },
      { id: 'ln_p3', name: '排隊倒廚餘與洗餐盒的水槽邊', tag: '地點', icon: '🧽' },
      { id: 'ln_p4', name: '散發蒸便當香氣的走廊蒸飯箱角', tag: '地點', icon: '♨️' },
      { id: 'ln_p5', name: '老師座位旁最危險的交易禁區', tag: '地點', icon: '🚨' },
      { id: 'ln_p6', name: '放著一箱箱冰牛奶的教室後方', tag: '地點', icon: '🥛' },
      { id: 'ln_p7', name: '陽光灑落的窗邊美食鑑賞特區', tag: '地點', icon: '☀️' },
      { id: 'ln_p8', name: '湯桶見底、只剩最後一顆丸子的鍋底', tag: '地點', icon: '🥣' },
      { id: 'ln_p9', name: '藏著秘密零食的書包抽屜深處', tag: '地點', icon: '🎒' },
      { id: 'ln_p10', name: '打菜隊伍排成長龍的講台前面', tag: '地點', icon: '🚶' }
    ],
    events: [
      { id: 'ln_e1', name: '用討厭的胡蘿蔔換到夢幻香腸片', tag: '事件', icon: '🌭' },
      { id: 'ln_e2', name: '打開便當發現全是愛吃的甜不辣', tag: '事件', icon: '🎉' },
      { id: 'ln_e3', name: '最後一顆貢丸引發全桌猜拳大戰', tag: '事件', icon: '✊' },
      { id: 'ln_e4', name: '鵪鶉蛋滑落地上，全場發出惋惜聲', tag: '事件', icon: '🥚' },
      { id: 'ln_e5', name: '秘密美食交易被午餐督導抓個正著', tag: '事件', icon: '🚨' },
      { id: 'ln_e6', name: '今天發稀有的巧克力牛奶引發暴動', tag: '事件', icon: '🍫' },
      { id: 'ln_e7', name: '拿空碗巡迴各組討到額外肉鬆加菜', tag: '事件', icon: '🍙' },
      { id: 'ln_e8', name: '把不吃的青菜偷藏在白飯底下', tag: '事件', icon: '🙈' },
      { id: 'ln_e9', name: '四人成功組成便當美食共享聯盟', tag: '事件', icon: '🤝' },
      { id: 'ln_e10', name: '發現便當裡有媽媽排的愛心笑臉菜', tag: '事件', icon: '🥰' },
      { id: 'ln_e11', name: '忘記帶餐具只好用免洗湯匙吃麵條', tag: '事件', icon: '🍜' },
      { id: 'ln_e12', name: '猜拳連贏三把獨佔最後一塊炸雞排', tag: '事件', icon: '🏆' },
      { id: 'ln_e13', name: '全班挑戰把菜吃光光獲得老師誇獎', tag: '事件', icon: '👏' },
      { id: 'ln_e14', name: '誤把苦瓜當成大黃瓜咬了一大口', tag: '事件', icon: '😖' },
      { id: 'ln_e15', name: '兩位大胃王展開盛飯高度大對決', tag: '事件', icon: '⛰️' }
    ],
    challenges: [
      { id: 'ln_s1', name: '台詞說「這塊肉我用兩顆蛋跟你換！」', tag: '狀況', icon: '💬' },
      { id: 'ln_s2', name: '模仿看到討厭食物的極度皺眉表情', tag: '狀況', icon: '😖' },
      { id: 'ln_s3', name: '台詞包含「別被老師發現我們在換！」', tag: '狀況', icon: '🤫' },
      { id: 'ln_s4', name: '用極度渴望美食的流口水語氣說話', tag: '狀況', icon: '🤤' },
      { id: 'ln_s5', name: '做出「小心翼翼偷夾菜」的手勢', tag: '狀況', icon: '🤏' },
      { id: 'ln_s6', name: '台詞出現一次對蒸便當味道的吐槽', tag: '狀況', icon: '🍱' },
      { id: 'ln_s7', name: '加入一場猜拳決定美食歸屬的場面', tag: '狀況', icon: '🎲' },
      { id: 'ln_s8', name: '模仿大口咀嚼「卡滋卡滋」的聲音', tag: '狀況', icon: '🔊' },
      { id: 'ln_s9', name: '以「這真是完美的午餐談判！」結尾', tag: '狀況', icon: '✨' },
      { id: 'ln_s10', name: '做出「雙手護住自己便當盒」的動作', tag: '狀況', icon: '🛡️' },
      { id: 'ln_s11', name: '模仿肚子餓「咕嚕咕嚕」叫的聲音', tag: '狀況', icon: '😫' },
      { id: 'ln_s12', name: '用商業談判專家的嚴肅口吻談交換', tag: '狀況', icon: '🧐' }
    ]
  }
};

export default lunchNegotiationDeck;