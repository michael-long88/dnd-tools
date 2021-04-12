import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseAPIUrl: 'https://www.dnd5eapi.co/api/'
  },
  getters: {
    getBaseURL: (state) => {
      return state.baseAPIUrl
    },
  }
})