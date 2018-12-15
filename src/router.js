import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games'
import Tools from './views/Tools'
import Announce from "./views/Announce";

//Tools
import Test from './views/tools/Test'

//Games


Vue.use(Router);

Vue.prototype.$scrollToTop = ()=>{
  window.scrollTo(0,0)
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'announce',
      component: Announce
    },
    {
      path: '/games',
      name: 'games',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: Games
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools
    },
    {
      path: '/tools/test',
      name: 'test',
      component: Test
    },
  ]
})
