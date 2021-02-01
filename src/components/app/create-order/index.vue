<template>
  <div>
    <header-top :title="title" />
    <template v-if="isloaded === false">
      <loader />
    </template>
    <template v-else>
      <v-form v-model="valid">
        <v-container>
          <customer-details :customer-details="order.customerDetails" />
          <product-details :product-details="order.productDetails" />
        </v-container>
      </v-form>
    </template>
  </div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import Loader from '@/components/common/loader.vue'
	import HeaderTop from '@/components/common/header.vue'
	import CustomerDetails from './customer-details.vue'
	import ProductDetails from './product-details.vue'

	export default {
		components: {
			Loader,
			HeaderTop,
			CustomerDetails,
			ProductDetails
		},
		data() {
			return {
				title: 'Create Order',
				isloaded: false,
				order: {
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
					productDetails: {}
				}
			}
		},
		computed: {},
		async created() {
			this.fetch()
		},
		methods: {
			...mapGetters('order', ['getCurrentOrders']),
			...mapActions('order', ['fetchCurrentrders']),
			async fetch() {
				//await this.fetchCurrentrders()
				//this.table.data = this.getCurrentOrders()
				this.isloaded = true
			}
		}
	}
</script>

<style lang="stylus" scoped></style>
