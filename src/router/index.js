import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '../views/Dashboard.vue'
import api from '@/utils/http/api'
import store from '@/store'
import { IS_LOADED_NAV_TREE } from '../store/storeTypes'
Vue.use(Router)

const router = new Router({
//  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
        /* {
          path: 'table3',
          component: () => import('@/views/table/table3.vue'),
          name: 'Table3',
          meta: ['消息中心', '对话列表']
        }, */
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
          name: 'MixChart',
          meta: ['我的工作台', '柱图分布']
        },
        {
          path: 'dlineChart',
          component: () => import('@/views/echart/dlineChart.vue'),
          name: 'DlineChart',
          meta: ['我的工作台', '动态线图']
        }
      ]
    },
    {
      path: '/',
      name: '登陆',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
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
      addDynamicMenuAndRoutes(username, to, from)
      next()
    }
  }
})
function addDynamicMenuAndRoutes (userName, to, from) {
  console.log(store.state.menu.isLoadedNavTree)
  if (store.state.menu.isLoadedNavTree === true) {
    return
  }
  let data = { userName: userName }
  api.post('/query/findMenu', data).then(
    res => {
      let dynamicRoutes = addDynamicRoutes(res.data.list)
      router.options.routes[0].children = router.options.routes[0].children.concat(dynamicRoutes)
      router.addRoutes(router.options.routes)
      store.commit(IS_LOADED_NAV_TREE, true)
    }
  )
}
function addDynamicRoutes (menuList = [], routes = []) {
  for (let ii = 0; ii < menuList.length; ii++) {
    var route = {
      path: menuList[ii].path,
      component: null,
      name: menuList[ii].name
    }
    let component = menuList[ii].url.replace(/^\//, '')
    route['component'] = resolve => require([`@/views/${component}`], resolve)
    routes.push(route)
  }
  return routes
}

export default router
