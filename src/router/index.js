import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '登陆',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: '首页',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let username = sessionStorage.getItem('username')
  if (to.path === '/') {
    if (username) {
      next({ path: '/home' })
    } else {
      next()
    }
  } else {
    if (!username) {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

function addDynamicMenuAndRouter (userName, to, from) {

}

export default router
