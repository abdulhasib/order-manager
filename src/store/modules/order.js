import { apolloClient } from '@/plugins/apollo'
import DateTools from '../../utils/date-tools'
import { newOrdersQuery } from '@/queries/orders'

const state = {
	newOrders: []
}

const getters = {
	getNewOrders: (state) => state.newOrders
}

const mutations = {
	fetchNewOrders(state, newOrder) {
		state.newOrders = newOrder
	}
}

const actions = {
	async fetchNewOrders({ commit }) {
		const {
			data: { shisha_order }
		} = await apolloClient.query({ query: newOrdersQuery })
		const formattedShishaOrder = shisha_order.map((order) => {
			order.modified_at = DateTools.formatDate(order.modified_at)
			order.created_at = DateTools.formatDate(order.created_at)
			return order
		})
		commit('fetchNewOrders', formattedShishaOrder)
		//const arr = require('../../../data/newOrders.json')
		//commit('fetchNewOrders', arr)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
