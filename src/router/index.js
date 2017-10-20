import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Music from '@/components/Music'
import Rege from '@/components/Rege'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/rege',
      name: 'Rege',
      component: Rege
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },

  ]
})
