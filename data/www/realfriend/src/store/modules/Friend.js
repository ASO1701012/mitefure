export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    friendName:''
  },
  getters: {
    nameGet: (state) => {
      return state.friendName
    },
  },
  mutations: {
    nameSet:(state,value) =>{
      state.friendName = value
    }
  },
  actions: {
    nameSet: ({commit}, value) => {
      setTimeout(() => {
        commit('nameSet', value)
      }, 100)
    },
  }
}
