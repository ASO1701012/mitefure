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
    nameSet:(state,payload) =>{
      state.friendName = payload
    }
  },
  actions: {
    nameSet: ({commit}, payload) => {
      setTimeout(() => {
        commit('nameSet', payload)
      }, 100)
    },
  }
}
