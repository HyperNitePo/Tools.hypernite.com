import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games'
import Tools from './views/Tools'
import Announce from "./views/Announce"
import NotFound from './views/NotFound'
//Tools
import Test from './views/tools/Test'
import Rand from './views/tools/RandNumGen'
import Youtube from './views/tools/YoutubeDL'
import APITest from './views/tools/APITest'
//Games


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Announce
    },
    {
      path: '/games',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Games
    },

    {
      path: '/tools',
        component: Tools
    },
      {
          path: '/tools/test',
          component: Test
      },
      {
          path: '/tools/randomgen',
          component: Rand
      },
      {
          path: '/tools/youtubedl',
          component: Youtube
      },
      {
          path: '/tools/apitest',
          component: APITest
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})
