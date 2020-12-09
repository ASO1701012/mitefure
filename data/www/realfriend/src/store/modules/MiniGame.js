export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    answer: null,
    gameText: [
      ["あなたには、よく悪戯してくる友達がいます。普段は笑って許していますが、今日はいつにも増して悪戯が多いです。今日は心を鬼にして怒ろうと思います。", "これ以上ひどくならないように怒ってみましょう。"],
      ["あなたは、友達と喧嘩しました。ずっと口論が続き、お互い普段言わないような事を次々と言ってしまいました。すると、ついに友達が自分を殴ってきました。", "暴力を振るった友達を軽蔑しましょう。"],
      ["今日は、友達と予定があります。あなたは、集合場所で待っていますが、一向に友達が現れません。しばらく待っていると、電話がり、寝てたとの連絡が！", "同じ事を繰り返さないよう嫌な顔をしましょう。"],
      ["今日は、友達と集まって怪談話で盛り上がっています。怪談話をしていると、どこからか足音が聞こえます。その足音はこちらに近づいてきているようです。", "怖がらせるため、怖がっているフリをしてみましょう。"],
      ["今日はあなたの誕生日です。友達からご飯に誘われ、待ち合わせ場所に向かっています。待ち合わせ場所に着くと、友達からプレゼントをもらいました！", "とびっきりの笑顔をお返ししましょう"],
      ["あなたは大切な話し合いをしています。話し合いのさなか、急にお腹が痛くなりました。ですが、話し合いは盛り上がっており、抜け出しにくい状況です。", "平然を装うため、真剣な顔をキープしましょう。"],
      ["今日は、楽しい遠足の日！楽しみのあまり、準備は前日に済ませています。靴を履き、外に出ると、さっきまで晴れていたのに雨が降ってきました。。。", "あなたの悲しみを、神様に届けましょう。"],
      ["街中を歩いていると、小学校以来のSくんと鉢合わせました。また、その隣には小学校以来のAちゃんがいました。どうやら二人は結婚しているようです！", "まさかS君が！という気持ちを込め、驚いてみましょう。"],
    ],
    // anger: 0
    // contempt: 1
    // disgust: 2
    // fear: 3
    // happiness: 4
    // neutral: 5
    // sadness: 6
    // surprise: 7
    level: null,
    //easy      :0      易
    //Normal    :1      普
    //Difficult :2      難
    judgmentResult:true
  },
  getters: {
    answerGet: (state) => {
      return state.answer
    },
    getGameText: (state) => {
      return state.gameText[state.answer]
    },
    levelGet: (state) => {
      return state.level
    }
  },
  mutations: {
    changeAnswer: (state) => {
      state.answer = Math.floor(Math.random() * 8)
    },
    changeLevel: (state, payload) => {
      state.level = payload
    },
    changeJudgmentResult:(state, payload) => {
      state.judgmentResult = payload
    }
  },
  actions: {
    changeAnswer: ({commit}) => {
      setTimeout(() => {
        commit('changeAnswer')
      }, 100)
    },
    changeLevel: ({commit}, payload) => {
      setTimeout(() => {
        commit('changeLevel', payload)
      }, 100)
    },
    changeJudgmentResult:({commit}, payload) => {
      commit('changeJudgmentResult', payload)
    }
  }
}
