import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

import Title from "@/components/Title"
// import Result from "@/components/Result"
// import Load from "@/components/Load"
// import Game from "@/components/Game"

import store from "@/store"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import(/* webpackChunkName: "Result" */"@/components/Result"),
      // component: Result,

      //アクセスガード
      beforeEnter: (to, from, next) => {
        if (store.getters["Friend/nameGet"] === "") {
          next("/")
        } else {
          next()
        }
      }
    },
    {
      path:'/load',
      name:'Load',
      component: () => import(/* webpackChunkName: "Load" */"@/components/Load"),
      // component: Load,

      //アクセスガード
      beforeEnter: (to, from, next) => {
        if (store.getters["Friend/nameGet"] === "") {
          next("/")
        } else {
          next()
        }
      }
    },
    {
      path: '/game',
      name: 'Game',
      component: () => import(/* webpackChunkName: "Game" */"@/components/Game"),
      // component: Game,

      //アクセスガード
      beforeEnter: (to, from, next) => {
        if (store.getters["Friend/nameGet"] === "") {
          next("/")
        } else {
          next()
        }
      }
    }

  ]
})


Vue.use(VueAnalytics, {
  id: 'UA-179947358-1',
  router
})

export default router

