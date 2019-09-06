import { IS_LOADED_NAV_TREE, NAV_TREE } from '../storeTypes'
export default {
  state: {
    navTree: [],
    isLoadedNavTree: false
  },
  getters: {
    getIsLoadedNavTree (state) {
      return state.isLoadedNavTree
    }
  },
  mutations: {
    [NAV_TREE] (state, navTree) {
      state.navTree = navTree
    },
    [IS_LOADED_NAV_TREE] (state, isloaded) {
      state.isLoadedNavTree = isloaded
    }
  },
  actions: {
  }
}
