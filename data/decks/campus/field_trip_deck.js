// data/decks/campus/field_trip_deck.js

const fieldTripDeck = {
  id: 'field_trip_deck',
  name: '🚌 校外教學的大背包',
  description: '一年中最期待的一天！遊覽車歌唱、零食大交換與遊樂園分組冒險！',
  bgm: 'warm',
  cards: {
    characters: [
      { id: 'ft_c1', name: '背包裡塞滿十幾種零食的分享大王', tag: '人物', icon: '🎒' },
      { id: 'ft_c2', name: '遊覽車上的麥克風K歌之王', tag: '人物', icon: '🎤' },
      { id: 'ft_c3', name: '拿著地圖規劃遊樂園最佳路線的小組長', tag: '人物', icon: '🗺️' },
      { id: 'ft_c4', name: '準備了暈車藥與薄荷棒的細心同學', tag: '人物', icon: '💊' },
      { id: 'ft_c5', name: '手持相機幫大家捕捉搞笑瞬間的隨隊老師', tag: '人物', icon: '📷' }
    ],
    times: [
      { id: 'ft_t1', name: '出發前一天晚上收拾背包興奮到失眠時', tag: '時間', icon: '🌙' },
      { id: 'ft_t2', name: '遊覽車發動、駛上高速公路那一刻', tag: '時間', icon: '🚌' },
      { id: 'ft_t3', name: '遊樂園集合準備回家前的最後半小時', tag: '時間', icon: '⏰' }
    ],
    places: [
      { id: 'ft_p1', name: '歡唱聲不斷的遊覽車後排雙人座位', tag: '地點', icon: '💺' },
      { id: 'ft_p2', name: '排滿長龍的遊樂園斷軌雲霄飛車前', tag: '地點', icon: '🎢' },
      { id: 'ft_p3', name: '涼爽且展出巨大恐龍化石的博物館大廳', tag: '地點', icon: '🦕' },
      { id: 'ft_p4', name: '鋪著野餐墊、大家分享便當的草地公園', tag: '地點', icon: '🧺' }
    ],
    events: [
      { id: 'ft_e1', name: '在遊覽車上搶到麥克風高唱經典歌曲引發全車合唱', tag: '事件', icon: '🎵' },
      { id: 'ft_e2', name: '打開背包發現洋芋片洋芋包膨脹得像個氣球', tag: '事件', icon: '🥔' },
      { id: 'ft_e3', name: '在遊樂園與組員挑戰了最可怕的旋轉海盜船', tag: '事件', icon: '🏴‍☠️' },
      { id: 'ft_e4', name: '零食大交換中用小熊軟糖換到了珍貴的巧克力棒', tag: '事件', icon: '🍬' },
      { id: 'ft_e5', name: '在紀念品店挑選了最酷的恐龍牙齒Keychain', tag: '事件', icon: '🗝️' },
      { id: 'ft_e6', name: '玩急流泛舟水花四濺，把全組襯衫全部弄濕', tag: '事件', icon: '🌊' },
      { id: 'ft_e7', name: '在博物館導覽時答對問題獲得了限定版貼紙', tag: '事件', icon: '🏷️' },
      { id: 'ft_e8', name: '回程車上全班體力耗盡、睡成了一整片', tag: '事件', icon: '😴' },
      { id: 'ft_e9', name: '拍下了一張大家擺出搞怪姿勢的完美大合照', tag: '事件', icon: '🖼️' }
    ],
    challenges: [
      { id: 'ft_s1', name: '講故事時台詞中必須唱出一句遊覽車熱門歌曲歌詞', tag: '狀況', icon: '🎶' },
      { id: 'ft_s2', name: '發言時必須模仿遊覽車上吃零食「咔滋咔滋」的聲響', tag: '狀況', icon: '🔊' },
      { id: 'ft_s3', name: '角色動作必須做出「手握麥克風熱情演唱」的姿勢', tag: '狀況', icon: '🎤' },
      { id: 'ft_s4', name: '台詞中必須出現「大家注意！絕對不能脫隊！」', tag: '狀況', icon: '📢' },
      { id: 'ft_s5', name: '必須用極度興奮與充滿期待的快樂語氣發表內容', tag: '狀況', icon: '🥳' },
      { id: 'ft_s6', name: '故事中必須包含一個在遊樂園排隊時發生的搞笑事件', tag: '狀況', icon: '🎡' },
      { id: 'ft_s7', name: '台詞中必須出現「我的背包塞滿了零食！」', tag: '狀況', icon: '🎒' },
      { id: 'ft_s8', name: '必須模仿雲霄飛車俯衝時全場大尖叫「啊——！」', tag: '狀況', icon: '😱' },
      { id: 'ft_s9', name: '必須以「這真是最棒的一天校外教學！」作為結論', tag: '狀況', icon: '🌈' }
    ]
  }
};

export default fieldTripDeck;