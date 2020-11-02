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
    resultText: ''
  },
  getters: {
    getEmotionPoint: state => {
      return state.emotionPoint * 100
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
    }
  }
}
