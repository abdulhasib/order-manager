<template>
	<div>
		<header-top :title="title" />
		<!-- {{ createOrderForm.productsDetails }} -->
		<!-- <v-form> -->
		<v-container>
			<customer-details-form-section
				class="mt-4 mb-4"
				:customer-details="createOrderForm.customerDetails"
			/>
			<products-details-form-section
				class="mb-4"
				:products-details="createOrderForm.productsDetails"
			/>
			<drinks-details-form-section
				class="mb-4"
				:drinks-details="createOrderForm.drinksDetails"
			/>

			<div class="d-flex flex-row-reverse body-1 font-weight-medium mr-2 mt-4">
				Order Total: £{{ totalOrderCost }}
			</div>
		</v-container>
		<!-- </v-form> -->
	</div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderTop from '@/components/common/header.vue'
import CustomerDetailsFormSection from './customer-details.vue'
import ProductsDetailsFormSection from './products-details.vue'
import DrinksDetailsFormSection from './drinks-details.vue'

export default {
	components: {
		HeaderTop,
		CustomerDetailsFormSection,
		ProductsDetailsFormSection,
		DrinksDetailsFormSection
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
					this.createOrderForm.drinksDetails.selected.totalCost
			)
		}
	},
	methods: {}
}
</script>

<style lang="stylus" scoped></style>
