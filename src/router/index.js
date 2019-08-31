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
      meta: ['处理中心'],
      children: [
        {
          path: 'table1',
          component: () => import('@/views/table/table1.vue'),
          name: 'Table1',
          meta: ['我的工作台', '用户列表']
        },
        {
          path: 'table2',
          component: () => import('@/views/table/table2.vue'),
          name: 'Table2',
          meta: ['我的工作台', '用户分布']
        },
        {
          path: 'form1',
          component: () => import('@/views/form/form1.vue'),
          name: 'Form1',
          meta: ['订单列表', '表单样式']
        },
        {
          path: 'about',
          component: () => import('@/views/about/about.vue'),
          name: 'About',
          meta: ['订单列表', '关于']
        },
        {
          path: 'echart1',
          component: () => import('@/views/echart/echart1.vue'),
          name: 'EChart1',
          meta: ['我的工作台', '图表分布']
        },
        {
          path: 'echart2',
          component: () => import('@/views/echart/echart2.vue'),
          name: 'EChart2',
          meta: ['我的工作台', '直线分布']
        },
        {
          path: 'mixChart',
          component: () => import('@/views/echart/mixChart.vue'),
          name: 'EChart2',
          meta: ['我的工作台', '柱图分布']
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
