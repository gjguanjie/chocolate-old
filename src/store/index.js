import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import menu from './modules/menu'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user: user,
    menu: menu
  }
})
// 两种取法, 第一种原生，第二种基于模块化直取
// store.getters.getIsLoadedNavTree
// store.state.menu.isLoadedNavTree
export default store
