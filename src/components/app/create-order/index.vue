<template>
	<div>
		<header-top :title="title" />
		<!-- {{ createOrderForm.productsDetails }} -->
		<!-- <v-form> -->
		<v-container>
			<customer-details-form-section
				:customer-details="createOrderForm.customerDetails"
			/>
			<products-details-form-section
				:products-details="createOrderForm.productsDetails"
			/>
			<drinks-details-form-section
				:drinks-details="createOrderForm.drinksDetails"
			/>
		</v-container>
		<!-- </v-form> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import HeaderTop from '@/components/common/header.vue'
	import CustomerDetailsFormSection from './customer-details-form-section.vue'
	import ProductsDetailsFormSection from './products-details-form-section.vue'
	import DrinksDetailsFormSection from './drinks-details-form-section.vue'

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
			...mapState('order', ['createOrderForm'])
		}
	}
</script>

<style lang="stylus" scoped></style>
