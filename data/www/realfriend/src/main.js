// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import Vuetify from 'vuetify'


Vue.config.productionTip = false
Vue.use(VueAxios, Axios, BootstrapVue,Vuetify)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  store,
  template: '<App/>'
})
