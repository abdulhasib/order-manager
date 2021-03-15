<template>
	<div>
		<header-top :title="title" />
		<!-- {{ createOrderForm.productsDetails }} -->
		<!-- <v-form> -->
		<v-container>
			<app-create-order-customer-details
				class="mt-4 mb-4"
				:customer-details="createOrderForm.customerDetails"
			/>
			<app-create-order-products
				class="mb-4"
				:products-details="createOrderForm.productsDetails"
			/>
			<app-create-order-drinks
				class="mb-4"
				:drinks-details="createOrderForm.drinksDetails"
			/>

			<div class="d-flex flex-row-reverse body-1 font-weight-medium mr-2 mt-4">
				Order Total: £{{ totalOrderCost }}
			</div>

			<v-btn class="mt-12 mb-6" width="100%" @click="submit">
				Create Order
			</v-btn>
		</v-container>
		<!-- </v-form> -->
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HeaderTop from '@/components/common/header.vue'
import AppCreateOrderCustomerDetails from './customer-details.vue'
import AppCreateOrderProducts from './products.vue'
import AppCreateOrderDrinks from './drinks.vue'

export default {
	components: {
		HeaderTop,
		AppCreateOrderCustomerDetails,
		AppCreateOrderProducts,
		AppCreateOrderDrinks
	},
	data() {
		return {
			title: 'Create Order'
		}
	},
	computed: {
		...mapState('order', ['createOrderForm']),
		totalOrderCost() {
			return (
				this.createOrderForm.productsDetails.totalCost +
					this.createOrderForm.drinksDetails.totalCost
			)
		}
	},
	methods: {
		...mapActions('order', ['createOrder']),
		submit() {
			this.createOrder()
		}
	}
}
</script>

<style lang="stylus" scoped></style>
