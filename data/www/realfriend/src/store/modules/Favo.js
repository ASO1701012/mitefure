export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    emotionPoint: 0,  //合計点
    anger: 0,//怒り
    contempt: 0,//軽蔑
    disgust: 0,//嫌悪
    fear: 0,//恐怖
    happiness: 0,//幸福
    neutral: 0,//平常
    sadness: 0,//悲しみ
    surprise: 0,//驚き
    resultText: '',
    maxEmotion: null    //anger: 0
                        // contempt: 1
                        // disgust: 2
                        // fear: 3
                        // happiness: 4
                        // neutral: 5
                        // sadness: 6
                        // surprise: 7
  },
  getters: {
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
    getGoodEmotions: state => {
      return [
        ['happiness', state.happiness],
        ['surprise', state.surprise]
      ]
    },
    getBadEmotions: state => {
      return [
        ['anger', state.anger],
        ['contempt', state.contempt],
        ['disgust', state.disgust],
        ['fear', state.fear],
        ['sadness', state.sadness],
      ]
    },
    getResultText: state => {
      return state.resultText
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
    changeEmotionPoint(state, payload) {
      state.emotionPoint = payload
    },
    changeResultText(state, payload) {
      state.resultText = payload
    },
    setMaxEmotion(state, payload) {
      let x = Object.values(payload)

      //try文を書くべきかも
      //数値が最大のキーを取得
      state.maxEmotion = x.indexOf(x.reduce(function (a, b) {
        return Math.max(a, b)
      }))
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
    changeEmotionPoint: ({commit}, payload) => {
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          commit('changeEmotionPoint', payload)
          resolve()
        }, 50)
      }))
    },
    changeResultText: ({commit}, payload) => {
      return new Promise(((resolve, reject) => {
        setTimeout(() => {
          commit('changeResultText', payload)
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
    }

  }

}
