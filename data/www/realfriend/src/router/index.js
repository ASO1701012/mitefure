import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

import Title from "@/components/Title"


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
      //遅延ローディング
      component: () => import(/* webpackChunkName: "Result" */"@/components/Result"),

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
      //遅延ローディング
      component: () => import(/* webpackChunkName: "Load" */"@/components/Load"),

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
      //遅延ローディング
      component: () => import(/* webpackChunkName: "Game" */"@/components/Game"),

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

