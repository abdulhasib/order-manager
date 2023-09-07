import { defineStore } from 'pinia'

import DateTools from '@/utils/DateTools'

/*
 *  products and drinks
 *  product needs one in as one is automatically created as it is mandatory
 *  drinks are not mandatory
 *
 *  {
 *    selected: [],
 *    price: 0
 *  }
 */
export const useOrderStore = defineStore('OrderStore', {
  state: () => ({
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
        drinks: [],
        totalCost: 0
      },
      orderTotalCost: 0
    }
  }),
  getters: {
    getOrderTotalCost: (state) =>
      state.createOrderForm.productsDetails.totalCost +
      state.createOrderForm.drinksDetails.totalCost
  },
  actions: {
    async fetchCurrentOrders() {
      //const {
      //  data: { shisha_order }
      //} = await apolloClient.query({ query: currentOrdersQuery })
      //const orderList = []
      //const formattedOrder = orderList.map((order) => {
      //  order.modified_at = DateTools.formatDate(order.modified_at)
      //  order.created_at = DateTools.formatDate(order.created_at)
      //  return order
      //})
      //this.currentOrders = formattedOrder;
      //const arr = await import('../../data/currentOrders')
      //import("foo.json", { assert: { type: "json" } });
      const { default: orderList } = await import('../../data/currentOrders.json')
      const formattedOrder = orderList.map((order) => {
        order.modified = DateTools.formatDate(order.modified)
        order.created = DateTools.formatDate(order.created)
        return order
      })
      this.currentOrders = formattedOrder
    },
    async createOrder() {
      console.log(this.createOrderForm)
    }
  }
})
