import { apolloClient } from '@/plugins/apollo'
import DateTools from '../../utils/date-tools'
import { currentOrdersQuery } from '@/queries/order'

const state = {
	currentOrders: [],
	createOrderForm: {
		customerDetails: {
			firstname: '',
			lastname: '',
			number: '',
			address: {
				line1: '',
				line2: '',
				city: '',
				postcode: ''
			}
		},
		productDetails: [],
		secondProductDetails: []
	}
}

const getters = {
	getcurrentOrders: (state) => state.currentOrders,
	getCreateOrderForm: (state) => state.createOrderForm
}

const mutations = {
	fetchCurrentOrders(state, newOrder) {
		state.currentOrders = newOrder
	},
	updateForm(fieldName, value) {
		state.createOrderForm.customerDetails.firstname = value
	}
}

const actions = {
	async fetchCurrentOrders({ commit }) {
		const {
			data: { shisha_order }
		} = await apolloClient.query({ query: currentOrdersQuery })
		const formattedShishaOrder = shisha_order.map((order) => {
			order.modified_at = DateTools.formatDate(order.modified_at)
			order.created_at = DateTools.formatDate(order.created_at)
			return order
		})
		commit('fetchCurrentOrders', formattedShishaOrder)
		//const arr = require('../../../data/currentOrders.json')
		//commit('fetchcurrentOrders', arr)
	},
	async updateForm({ commit }, updatedForm) {
		console.log(updatedForm.value)
		commit('updateForm', updatedForm.fieldName, updatedForm.value)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
