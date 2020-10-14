import Vue from 'vue'
import Vuex from 'vuex'
import Favo from "./modules/Favo"


import Friend from "./modules/Friend"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Friend,
    Favo
  },
})
