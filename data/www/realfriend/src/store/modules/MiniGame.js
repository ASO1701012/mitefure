export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    answer:null
    // anger: 0
    // contempt: 1
    // disgust: 2
    // fear: 3
    // happiness: 4
    // neutral: 5
    // sadness: 6
    // surprise: 7
  },
  getters: {
    answerGet: (state) => {
      return state.answer
    },
  },
  mutations: {
    changeAnswer: (state) => {
      state.answer = Math.floor( Math.random() * 8 ) ;
    }
  },
  actions: {
    changeAnswer: ({commit}) => {
      setTimeout(() => {
        commit('changeAnswer')
      }, 100)
    },
  }
}
