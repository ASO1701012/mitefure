export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    emotionPoint: 80,  //合計点
    anger: 0,//怒り
    contempt: 0,//軽蔑
    disgust: 0,//嫌悪
    fear: 0,//恐怖
    happiness: 0,//幸福
    neutral: 0,//平常
    sadness: 0,//悲しみ
    surprise: 0,//驚き

    maxEmotion: null    //anger: 0
                        // contempt: 1
                        // disgust: 2
                        // fear: 3
                        // happiness: 4
                        // neutral: 5
                        // sadness: 6
                        // surprise: 7
  },
  getters:{
    getEmotionPoint: state => {
      return state.emotionPoint
    },
    getAnger: state => {
      return state.anger
    },
    getContempt: state => {
      return state.contempt
    },
    getDisgust: state => {
      return state.disgust
    },
    getFear: state => {
      return state.fear
    },
    getHappiness: state => {
      return state.happiness
    },
    getNeutral: state => {
      return state.neutral
    },
    getSadness: state => {
      return state.sadness
    },
    getSurprise: state => {
      return state.surprise
    },
    getMaxEmotion: state => {
      return state.maxEmotion
    }
  },
  mutations: {
    addEmotions(state, payload) {
      state.anger += payload.anger
      state.contempt += payload.contempt
      state.disgust += payload.disgust
      state.fear += payload.fear
      state.happiness += payload.happiness
      state.neutral += payload.neutral
      state.sadness += payload.sadness
      state.surprise += payload.surprise
    },
    setMaxEmotion(state, payload) {
      let x = Object.values(payload)

      //try文を書くべきかも
      //数値が最大のキーを取得
      state.maxEmotion = x.indexOf(x.reduce(function (a, b) {
        return Math.max(a, b)
      }))
    },
    resetFavoStore(state) {
      state.emotionPoint = 0
      state.anger = 0
      state.contempt = 0
      state.disgust = 0
      state.fear = 0
      state.happiness = 0
      state.neutral = 0
      state.sadness = 0
      state.surprise = 0
      state.maxEmotion = null
    }
  },
  actions: {
    addEmotions: ({commit}, payload) => {
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          commit('addEmotions', payload)
          resolve()
        }, 50)
      }))
    },
    setMaxEmotion: ({commit}, payload) => {
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          commit('setMaxEmotion', payload)
          resolve()
        }, 50)
      }))
    },
    resetFavoStore: ({commit}) => {
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          commit('resetFavoStore')
          resolve()
        }, 50)
      }))
    }

  }

}
