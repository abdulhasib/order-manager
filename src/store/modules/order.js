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
		productDetails: [
			{
				selected: ['Standard 1', 'Standard 2', 'Standard 3']
			},
			{
				selected: ['Standard 1', 'Standard 2', 'Standard 4']
			}
		]
	}
}

const getters = {
	getCurrentOrders: (state) => state.currentOrders,
	getCreateOrderForm: (state) => state.createOrderForm
}

const mutations = {
	setCurrentOrders: (state, newOrder) => state.currentOrders = newOrder,
	setForm: (state, section, fieldName, value) => state.createOrderForm[section][fieldName] = value
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
		commit('setCurrentOrders', formattedShishaOrder)
		//const arr = require('../../../data/currentOrders.json')
		//commit('fetchcurrentOrders', arr)
	},
	async updateForm({ commit }, updatedForm) {
		commit(
			'setForm',
			updatedForm.section,
			updatedForm.fieldName,
			updatedForm.value
		)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
