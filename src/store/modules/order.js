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
		productsDetails: {
			products: [
				{
					selected: [],
					price: 0
				}
			],
			totalCost: 0
		},
		drinksDetails: {
			selected: {
				drinks: [],
				totalCost: 0
			}
		}
	}
}

const getters = {
	getCurrentOrders: (state) => state.currentOrders,
	getCreateOrderForm: (state) => state.createOrderForm
}

const mutations = {
	setCurrentOrders: (state, newOrder) => (state.currentOrders = newOrder),
	setForm: (state, section, fieldName, value) =>
		(state.createOrderForm[section][fieldName] = value),
	setProducts: (state, updatedForm) =>
		(state.createOrderForm.productsDetails = updatedForm),
	setDrinks: (state, updatedDrinks) =>
		(state.createOrderForm.drinksDetails = updatedDrinks)
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
	},
	async updateProducts({ commit }, updatedProducts) {
		commit('setProducts', updatedProducts)
	},
	async updateDrinks({ commit }, updatedDrinks) {
		commit('setDrinks', updatedDrinks)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
