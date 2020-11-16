import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Favo from "./modules/Favo"
import Friend from "./modules/Friend"
import Flag from "./modules/Flag"

export default new Vuex.Store({
  modules: {
    Friend,
    Favo,
    Flag
  },
})
