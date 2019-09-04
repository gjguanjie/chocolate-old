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
    setNavTree (state, navTree) {
      state.navTree = navTree
    },
    setLoadedNavTree (state, isloaded) {
      state.isLoadedNavTree = isloaded
    }
  },
  actions: {
  }
}
