export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    favoJudge1:1,
    favoJudge2:10,
    favoJudge3:100,
  },
  getters:{
    getFavoJudge1: state => {
      return state.favoJudge1
    },
    getFavoJudge2: state => {
      return state.favoJudge2
    },
    getFavoJudge3: state => {
      return state.favoJudge3
    },
  },
  mutations: {},
  actions: {}
}
