<template>
	<div>
		<header-top :title="title" />
		<!-- {{ createOrderForm.productDetails }} -->
		<!-- <v-form> -->
		<v-container>
			<customer-details-form-section
				:customer-details="createOrderForm.customerDetails"
			/>
			<product-details-form-section
				:product-details="createOrderForm.productDetails"
			/>
		</v-container>
		<!-- </v-form> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import HeaderTop from '@/components/common/header.vue'
	import CustomerDetailsFormSection from './customer-details-form-section.vue'
	import ProductDetailsFormSection from './product-details-form-section.vue'

	export default {
		components: {
			HeaderTop,
			CustomerDetailsFormSection,
			ProductDetailsFormSection
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
