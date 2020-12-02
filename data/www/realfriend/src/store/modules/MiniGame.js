export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    answer:null,
    // anger: 0
    // contempt: 1
    // disgust: 2
    // fear: 3
    // happiness: 4
    // neutral: 5
    // sadness: 6
    // surprise: 7
    level:null,
    //easy      :0      易
    //Normal    :1      普
    //Difficult :2      難
  },
  getters: {
    answerGet: (state) => {
      return state.answer
    },
    levelGet:(state) => {
      return state.level
    }
  },
  mutations: {
    changeAnswer: (state) => {
      state.answer = Math.floor( Math.random() * 8 ) ;
    },
    changeLevel:(state ,payload) =>{
      state.level = payload
    }
  },
  actions: {
    changeAnswer: ({commit}) => {
      setTimeout(() => {
        commit('changeAnswer')
      }, 100)
    },
    changeLevel:({commit}, payload) =>{
      setTimeout(() => {
        commit('changeLevel', payload)
      }, 100)
    }
  }
}
