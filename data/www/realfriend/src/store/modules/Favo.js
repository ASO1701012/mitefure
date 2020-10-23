export default {
  namespaced: true,  //モジュールを名前空間に分ける
  state: {
    emotionPoint:80,
  },
  getters:{
    getEmotionPoint: state => {
      return state.emotionPoint
    }
  },
  mutations: {},
  actions: {}
}
