// data/decks/campus/field_trip_deck.js

const fieldTripDeck = {
  id: 'field_trip_deck',
  name: '(難)🚌 校外教學的大背包',
  description: '一年中最期待的一天！遊覽車歌唱、零食大交換與遊樂園分組冒險！',
  bgm: 'warm',
  cards: {
    characters: [
      { id: 'ft_c1', name: '背包塞滿十種零食的分享大王', tag: '人物', icon: '🎒' },
      { id: 'ft_c2', name: '遊覽車上的麥克風K歌之王', tag: '人物', icon: '🎤' },
      { id: 'ft_c3', name: '拿著地圖規劃路線的精明小組長', tag: '人物', icon: '🗺️' },
      { id: 'ft_c4', name: '隨身帶暈車藥與薄荷棒的細心鬼', tag: '人物', icon: '💊' },
      { id: 'ft_c5', name: '拿相機捕捉大家醜照的隨隊老師', tag: '人物', icon: '📷' },
      { id: 'ft_c6', name: '戴著可愛動物頭箍的遊樂園玩家', tag: '人物', icon: '🐰' },
      { id: 'ft_c7', name: '專門挑戰最刺激設施的膽大王', tag: '人物', icon: '🎢' },
      { id: 'ft_c8', name: '熱心介紹景點的幽默領隊大哥哥', tag: '人物', icon: '🧢' },
      { id: 'ft_c9', name: '在紀念品店精打細算的理財專家', tag: '人物', icon: '💰' },
      { id: 'ft_c10', name: '一上車就秒睡到終點的睡神同學', tag: '人物', icon: '😴' }
    ],
    times: [
      { id: 'ft_t1', name: '出發前一晚興奮到睡不著時', tag: '時間', icon: '🌙' },
      { id: 'ft_t2', name: '遊覽車發動駛上高速公路那一刻', tag: '時間', icon: '🚌' },
      { id: 'ft_t3', name: '準備集合回家前的最後半小時', tag: '時間', icon: '⏰' },
      { id: 'ft_t4', name: '早上在學校操場排隊點名時', tag: '時間', icon: '☀️' },
      { id: 'ft_t5', name: '中午大家打開背包野餐的時刻', tag: '時間', icon: '🍱' },
      { id: 'ft_t6', name: '雲霄飛車爬升到最高點的瞬間', tag: '時間', icon: '😱' },
      { id: 'ft_t7', name: '經過高速公路休息站放風時', tag: '時間', icon: '🚻' },
      { id: 'ft_t8', name: '夕陽西下遊覽車駛回校門口時', tag: '時間', icon: '🌇' }
    ],
    places: [
      { id: 'ft_p1', name: '歡唱聲不斷的遊覽車後排座位', tag: '地點', icon: '💺' },
      { id: 'ft_p2', name: '大排長龍的斷軌雲霄飛車入口', tag: '地點', icon: '🎢' },
      { id: 'ft_p3', name: '展出巨大恐龍化石的博物館大廳', tag: '地點', icon: '🦕' },
      { id: 'ft_p4', name: '鋪滿野餐墊分享便當的大草地', tag: '地點', icon: '🧺' },
      { id: 'ft_p5', name: '琳瑯滿目的遊樂園紀念品商店', tag: '地點', icon: '🎁' },
      { id: 'ft_p6', name: '水花四濺的急流泛舟河道旁', tag: '地點', icon: '🌊' },
      { id: 'ft_p7', name: '可以俯瞰整座城市的摩天輪車廂', tag: '地點', icon: '🎡' },
      { id: 'ft_p8', name: '正在表演海豚秀的露天劇場', tag: '地點', icon: '🐬' },
      { id: 'ft_p9', name: '充滿可愛小動物的生態農場區', tag: '地點', icon: '🦙' },
      { id: 'ft_p10', name: '拍全班大合照的園區噴水池前', tag: '地點', icon: '⛲' }
    ],
    events: [
      { id: 'ft_e1', name: '搶到麥克風高唱金曲引發大合唱', tag: '事件', icon: '🎵' },
      { id: 'ft_e2', name: '高山氣壓讓洋芋片袋子膨脹成球', tag: '事件', icon: '🥔' },
      { id: 'ft_e3', name: '全組一起挑戰超刺激旋轉海盜船', tag: '事件', icon: '🏴‍☠️' },
      { id: 'ft_e4', name: '用小熊軟糖換到絕版巧克力棒', tag: '事件', icon: '🍬' },
      { id: 'ft_e5', name: '在紀念品店買到超酷恐龍牙齒鑰匙圈', tag: '事件', icon: '🗝️' },
      { id: 'ft_e6', name: '玩急流泛舟把全組衣服都弄濕了', tag: '事件', icon: '🌊' },
      { id: 'ft_e7', name: '博物館導覽答對問題獲得限定貼紙', tag: '事件', icon: '🏷️' },
      { id: 'ft_e8', name: '回程車上全班體力耗盡睡成一片', tag: '事件', icon: '😴' },
      { id: 'ft_e9', name: '拍出一張全班擺怪姿勢的完美合照', tag: '事件', icon: '🖼️' },
      { id: 'ft_e10', name: '發現忘記帶午餐結果收到全組投餵', tag: '事件', icon: '🍙' },
      { id: 'ft_e11', name: '在鬼屋裡被同學的尖叫聲嚇得更慘', tag: '事件', icon: '👻' },
      { id: 'ft_e12', name: '園遊會射氣球意外贏得超大玩偶', tag: '事件', icon: '🧸' },
      { id: 'ft_e13', name: '看地圖走錯方向意外發現秘密花園', tag: '事件', icon: '🌻' },
      { id: 'ft_e14', name: '全班在遊覽車上玩賓果遊戲大連線', tag: '事件', icon: '🎲' },
      { id: 'ft_e15', name: '遊樂設施拍下的抓拍照片超級爆笑', tag: '事件', icon: '📸' }
    ],
    challenges: [
      { id: 'ft_s1', name: '台詞中必須唱出一句熱門歌曲歌詞', tag: '狀況', icon: '🎶' },
      { id: 'ft_s2', name: '模仿吃洋芋片「咔滋咔滋」的聲音', tag: '狀況', icon: '🔊' },
      { id: 'ft_s3', name: '做出「手握麥克風深情演唱」姿勢', tag: '狀況', icon: '🎤' },
      { id: 'ft_s4', name: '喊出「大家注意！絕對不能脫隊！」', tag: '狀況', icon: '📢' },
      { id: 'ft_s5', name: '用極度興奮期待的快樂語氣說話', tag: '狀況', icon: '🥳' },
      { id: 'ft_s6', name: '加入一個排隊時發生的搞笑小插曲', tag: '狀況', icon: '🎡' },
      { id: 'ft_s7', name: '台詞出現「我的背包塞滿了零食！」', tag: '狀況', icon: '🎒' },
      { id: 'ft_s8', name: '模仿雲霄飛車俯衝大叫「啊——！」', tag: '狀況', icon: '😱' },
      { id: 'ft_s9', name: '以「這真是最棒的一天！」作為結尾', tag: '狀況', icon: '🌈' },
      { id: 'ft_s10', name: '做出「雙手比耶拍團體照」的姿勢', tag: '狀況', icon: '✌️' },
      { id: 'ft_s11', name: '模仿領隊拿大聲公集合的語氣', tag: '狀況', icon: '📣' },
      { id: 'ft_s12', name: '做出「打開大背包翻找零食」動作', tag: '狀況', icon: '🍫' }
    ]
  }
};

export default fieldTripDeck;