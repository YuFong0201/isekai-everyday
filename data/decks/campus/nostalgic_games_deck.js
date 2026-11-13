// data/decks/campus/nostalgic_games_deck.js

const nostalgicGamesDeck = {
  id: 'nostalgic_games_deck',
  name: '(難)🪁 神祕的童年闖關遊戲',
  description: '東南西北、跳格子、紅綠燈與東方不敗！重現純粹靠想像力與同儕互動的歡樂時光！',
  bgm: 'warm',
  cards: {
    characters: [
      { id: 'ng_c1', name: '精通東南西北折紙的遊戲大師', tag: '人物', icon: '📄' },
      { id: 'ng_c2', name: '身手矯健、誰也抓不到的紅綠燈鬼', tag: '人物', icon: '🚦' },
      { id: 'ng_c3', name: '手握全套戰鬥陀螺與彈珠的霸主', tag: '人物', icon: '🔮' },
      { id: 'ng_c4', name: '單腳連跳十格都不失誤的跳格子王', tag: '人物', icon: '👟' },
      { id: 'ng_c5', name: '在「大白鯊」遊戲負責當鯊魚的勇者', tag: '人物', icon: '🦈' },
      { id: 'ng_c6', name: '能把橡皮筋串成超長跳繩的巧手王', tag: '人物', icon: '🧶' },
      { id: 'ng_c7', name: '擁有閃亮亮稀有遊戲王卡的收藏家', tag: '人物', icon: '🃏' },
      { id: 'ng_c8', name: '最會摺迴旋紙飛機的航空工程師', tag: '人物', icon: '✈️' },
      { id: 'ng_c9', name: '每次猜拳都出布卻連贏五次的幸運星', tag: '人物', icon: '🖐️' },
      { id: 'ng_c10', name: '專門訂定各種奇怪遊戲規則的裁判', tag: '人物', icon: '📯' }
    ],
    times: [
      { id: 'ng_t1', name: '放學後太陽快下山的黃昏五點', tag: '時間', icon: '🌇' },
      { id: 'ng_t2', name: '體育課自由活動大家圍成一圈時', tag: '時間', icon: '⭕' },
      { id: 'ng_t3', name: '午後大雨在走廊射紙飛機的時候', tag: '時間', icon: '🌧️' },
      { id: 'ng_t4', name: '下課十分鐘鐘聲剛響起的瞬間', tag: '時間', icon: '🔔' },
      { id: 'ng_t5', name: '夏夜路燈剛亮起、晚風吹拂時', tag: '時間', icon: '🌙' },
      { id: 'ng_t6', name: '園遊會全班擺攤玩闖關遊戲時', tag: '時間', icon: '🎪' },
      { id: 'ng_t7', name: '週末約在公園大樹下集合的早晨', tag: '時間', icon: '☀️' },
      { id: 'ng_t8', name: '媽媽在陽台喊回家吃飯前一刻', tag: '時間', icon: '🍚' }
    ],
    places: [
      { id: 'ng_p1', name: '用粉筆畫滿數字的跳格子水泥地', tag: '地點', icon: '🔢' },
      { id: 'ng_p2', name: '視為絕對安全區的溜滑梯高台', tag: '地點', icon: '🛝' },
      { id: 'ng_p3', name: '樹蔭下用沙石堆成的秘密堡壘', tag: '地點', icon: '🏰' },
      { id: 'ng_p4', name: '適合玩「123木頭人」的走廊牆邊', tag: '地點', icon: '🧱' },
      { id: 'ng_p5', name: '畫滿粉筆圈圈的彈珠對決戰場', tag: '地點', icon: '🎯' },
      { id: 'ng_p6', name: '大榕樹氣根垂下的天然盪鞦韆區', tag: '地點', icon: '🌳' },
      { id: 'ng_p7', name: '課桌拼起來的鬥片彈射競技場', tag: '地點', icon: '桌' },
      { id: 'ng_p8', name: '學校穿堂躲避太陽的陰涼角落', tag: '地點', icon: '🏫' },
      { id: 'ng_p9', name: '夕陽照得金黃的操場中央草皮', tag: '地點', icon: '🌾' },
      { id: 'ng_p10', name: '校門口旁邊的古早味柑仔店前', tag: '地點', icon: '🏪' }
    ],
    events: [
      { id: 'ng_e1', name: '打開「東南西北」抽到搞笑懲罰', tag: '事件', icon: '🧧' },
      { id: 'ng_e2', name: '喊出「綠燈！」最後一秒救回夥伴', tag: '事件', icon: '🟢' },
      { id: 'ng_e3', name: '戰鬥陀螺撞出火花把對手彈飛出界', tag: '事件', icon: '🌀' },
      { id: 'ng_e4', name: '木頭人回頭時大家擺出超爆笑定格', tag: '事件', icon: '🗿' },
      { id: 'ng_e5', name: '紙飛機順著風飛過三層樓高的屋頂', tag: '事件', icon: '✈️' },
      { id: 'ng_e6', name: '玩「踩影子」躲進大樹陰影化解危機', tag: '事件', icon: '👣' },
      { id: 'ng_e7', name: '跳格子石子精準扔中最高難度第9格', tag: '事件', icon: '🎲' },
      { id: 'ng_e8', name: '用「黑白黑白我勝利」分好兩隊人馬', tag: '事件', icon: '✌️' },
      { id: 'ng_e9', name: '鐘聲響起，約定明天同一時間再戰', tag: '事件', icon: '🤝' },
      { id: 'ng_e10', name: '閃卡貼紙在陽光下照出金黃色光芒', tag: '事件', icon: '✨' },
      { id: 'ng_e11', name: '踢毽子連續踢了五十下打破紀錄', tag: '事件', icon: '🏸' },
      { id: 'ng_e12', name: '玩躲貓貓躲太好結果大家忘記找他', tag: '事件', icon: '🙈' },
      { id: 'ng_e13', name: '橡皮筋跳繩越升越高挑戰極限高度', tag: '事件', icon: '🦘' },
      { id: 'ng_e14', name: '彈珠一擊命中把對手的寶貝珠贏走', tag: '事件', icon: '🔮' },
      { id: 'ng_e15', name: '玩「大風吹」搶最後一張椅子大混戰', tag: '事件', icon: '🪑' }
    ],
    challenges: [
      { id: 'ng_s1', name: '喊出「123 木頭人，不許動！」', tag: '狀況', icon: '🗣️' },
      { id: 'ng_s2', name: '說故事時定格 3 秒鐘完全不能動', tag: '狀況', icon: '🗿' },
      { id: 'ng_s3', name: '台詞包含「紅燈！我被凍結了！」', tag: '狀況', icon: '🔴' },
      { id: 'ng_s4', name: '用極度懷念且童真開心的語氣說話', tag: '狀況', icon: '😄' },
      { id: 'ng_s5', name: '做出「手玩折紙東南西北」開合動作', tag: '狀況', icon: '👐' },
      { id: 'ng_s6', name: '台詞出現一種經典童玩或遊戲規則', tag: '狀況', icon: '🪀' },
      { id: 'ng_s7', name: '描繪同伴之間熱血義氣相挺的場面', tag: '狀況', icon: '🤜🤛' },
      { id: 'ng_s8', name: '喊出猜拳口訣「黑白黑白我勝利！」', tag: '狀況', icon: '✊' },
      { id: 'ng_s9', name: '以「這就是童年最棒的遊戲！」結尾', tag: '狀況', icon: '🌟' },
      { id: 'ng_s10', name: '做出「瞄準發射紙飛機」的投擲姿勢', tag: '狀況', icon: '✈️' },
      { id: 'ng_s11', name: '單腳站立講完這一段故事的內容', tag: '狀況', icon: '🦩' },
      { id: 'ng_s12', name: '模仿陀螺高速旋轉「嗡嗡嗡」的聲音', tag: '狀況', icon: '🌀' }
    ]
  }
};

export default nostalgicGamesDeck;