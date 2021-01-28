import Vuex from 'vuex'
import Vue from 'vue'
import order from './modules/order'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    order
  }
})
