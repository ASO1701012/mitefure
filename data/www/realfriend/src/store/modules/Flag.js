export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    videoFlag: true
  },
  getters: {
    videoFlagGet: (state) => {
      return state.videoFlag
    },
  },
  mutations: {
    changeVideoFlag: (state) => {
      state.videoFlag = false
    }
  },
  actions: {
    changeVideoFlag: ({commit}) => {
      setTimeout(() => {
        commit('changeVideoFlag')
      }, 100)
    },
  }
}
