import Vue from 'vue'
import Router from 'vue-router'
import VueAnalytics from 'vue-analytics'

import Title from "@/components/Title"
import Result from "@/components/Result"
import Load from "@/components/Load"
import Game from "@/components/Game"
import Description from "@/components/Description"
import MiniGame from"@/components/MiniGame"
import MiniGameLoad from "@/components/MiniGameLoad"
import MiniGameResult from "@/components/MiniGameResult"
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
      component: Result,

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
      component: Load,

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
      component: Game,

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
      path: '/description',
      name:'Description',
      component: Description,
    },
    {
      path:'/minigame',
      name:'MiniGame',
      component: MiniGame
    },
    {
      path:'/minigameload',
      name:'MiniGameLoad',
      component: MiniGameLoad
    },
    {
      path:'/minigameresult',
      name:'MiniGameResult',
      component: MiniGameResult
    }

  ]
})


Vue.use(VueAnalytics, {
  id: 'UA-179947358-1',
  router
})

export default router

