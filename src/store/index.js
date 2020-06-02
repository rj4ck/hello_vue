import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    FB_Parse () {
      setTimeout(() => {
        window.FB.XFBML.parse()
      }, 0)
    }
  },
  modules: {
  }
})
