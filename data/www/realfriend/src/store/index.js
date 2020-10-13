import Vue from 'vue'
import Vuex from 'vuex'
import Favo from "./modules/Favo"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Favo
  },
})
