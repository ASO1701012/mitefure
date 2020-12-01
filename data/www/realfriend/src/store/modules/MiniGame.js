export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    answer:null
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
