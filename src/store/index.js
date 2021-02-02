import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'

import order from './modules/order'

// Load Vuex
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
	key: 'my-app',
	storage: window.localStorage
})

// Create store
export default new Vuex.Store({
	modules: {
		order
	},
	plugins: [vuexLocal.plugin]
})
