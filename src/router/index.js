import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../views/Dashboard.vue'

Vue.use(Router)

const router = new Router({
//  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '登陆',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/home',
      name: '首页',
      component: dashboard,
      children: [
        {
          path: 'table1',
          component: () => import('@/views/table/table1.vue'),
          name: 'Table1'
        },
        {
          path: 'table2',
          component: () => import('@/views/table/table2.vue'),
          name: 'Table2'
        }
      ]
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

// router.beforeEach((to, from, next) => {
//   let username = sessionStorage.getItem('username')
//   if (to.path === '/') {
//     if (username) {
//       next({ path: '/home' })
//     } else {
//       next()
//     }
//   } else {
//     if (!username) {
//       next({ path: '/' })
//     } else {
//       next()
//     }
//   }
// })

export default router
