import Vue from 'vue'
import Vuex from 'vuex'

import Friend from "./modules/Friend"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Friend
  },
})
