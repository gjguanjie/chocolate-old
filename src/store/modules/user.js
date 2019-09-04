import { SET_PERMS } from '../storeTypes'
export default {
  state: {
    perms: []
  },
  getters: {},
  mutations: {
    [SET_PERMS] (state, perms) {
      state.perms = perms
    }
  },
  actions: {}
}
