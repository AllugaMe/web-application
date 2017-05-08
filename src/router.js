import Vue from 'vue'
import Router from 'vue-router'
import * as types from './store/types.js'
import store from './store/index.js'
import * as views from './views'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      component: views.Home
    },
    {
      path: '/dashboard',
      alias: '/',
      component: views.Dashboard,
      meta: {
        auth: true
      }
    },
    {
      path: '/search',
      component: views.Search
    },
    {
      path: '/profile/:id/',
      component: views.Profile,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = store.getters[types.USER_AUTH]
  const permission = !to.meta.auth || (to.meta.auth && auth)

  if (!permission)
    return next('/home')

  next()
})

export default router
