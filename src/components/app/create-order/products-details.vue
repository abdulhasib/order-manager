<template>
	<v-card class="order-card" outlined>
		<v-card-title class="order-title my-2">
			<v-btn
				class="d-flex justify-space-between position-right"
				depressed
				text
				@click="minimised = !minimised"
				width="100%"
			>
				<span>Product Details</span>
				<v-icon>{{ minimised ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
			</v-btn>
		</v-card-title>
		<v-divider />

		<div v-show="!minimised" class="products-details-form-section-container">
			<v-row>
				<v-col cols="12" md="4">
					<v-card-text class="pt-4">
						<div>
							<v-expand-transition
								v-for="(product, i) in addedProducts.products"
								:key="i"
								appear
							>
								<v-card class="pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary">
									<v-container>
										<div class="card-title-container">
											<v-card-title class="product-title">
												Product {{ i + 1 }}
											</v-card-title>
											<v-btn
												v-if="addedProducts.products.length > 1"
												fab
												small
												@click="removeProduct(i)"
											>
												<v-icon>mdi-minus</v-icon>
											</v-btn>
										</div>
										<v-row>
											<v-col cols="12" md="4">
												<!-- <v-container class="px-0" fluid>
													Standard
													<v-checkbox
														v-for="(standardProduct,
														index1) in standardProductsList"
														:key="index1"
														v-model="product.selected"
														:label="standardProduct.label"
														:value="standardProduct.label"
														@change="updateSelected($event, 'standardProductsList', index1)"
													/>
												</v-container>
												<v-container class="px-0" fluid>
													Premium
													<v-checkbox
														v-for="(premiumProduct,
														index2) in premiumProductsList"
														:key="index2"
														v-model="product.selected"
														:label="premiumProduct.label"
														:value="premiumProduct.label"
														@change="updateSelected($event, 'premiumProductsList', index2)"
													/>
												</v-container> -->
												<div>
													Standard
													<div
														v-for="(item, index1) in productsList"
														:key="index1"
													>
														<v-checkbox
															v-if="item.type === 'standard'"
															v-model="product.selected"
															:label="item.label"
															:value="item.label"
															@change="updateSelected($event, i)"
														/>
													</div>
												</div>
												<div>
													Premium
													<div
														v-for="(item, index2) in productsList"
														:key="index2"
													>
														<v-checkbox
															v-if="item.type === 'premium'"
															v-model="product.selected"
															:label="item.label"
															:value="item.label"
															@change="updateSelected($event, i)"
														/>
													</div>
												</div>
											</v-col>
										</v-row>
										<div class="d-flex flex-row-reverse mr-2">
											<span>
												Product {{ i + 1 }}: £{{
													addedProducts.products[i].price
												}}
											</span>
										</div>
									</v-container>
								</v-card>
							</v-expand-transition>
							<v-layout flex justify-center wrap>
								<v-flex class="mb-3">
									<v-btn fab small @click="newProduct()">
										<v-icon>mdi-plus</v-icon>
									</v-btn>
									Add product
								</v-flex>
							</v-layout>
							<div class="d-flex flex-row-reverse mr-2">
								<span> Products Total: £{{ addedProducts.totalCost }} </span>
							</div>
						</div>
					</v-card-text>
				</v-col>
			</v-row>
		</div>

		<div
			v-show="minimised"
			v-for="(product, i) in addedProducts.products"
			:key="i"
			class="products-details-form-section-summary-container mx-2 my-4"
		>
			<div
				v-if="product.standard.length !== 0 || product.standard.length !== 0"
			>
				<span> Product {{ i + 1 }} </span>
				<div class="d-flex flex-wrap">
					<div class="d-flex flex-wrap" style="width:100%">
						<div
							v-for="(standard, j) in product.standard"
							:key="j"
							class="products-details-form-section-summary"
						>
							<span>{{ standard }}</span>
						</div>
					</div>
					<div class="d-flex flex-wrap" style="width:100%">
						<div
							v-for="(premium, k) in product.premium"
							:key="k"
							class="products-details-form-section-summary"
						>
							<span>{{ premium }}</span>
						</div>
					</div>
				</div>
			</div>
			<div v-else-if="i === 0">
				<span class="ml-2">Select a product.</span>
			</div>
		</div>
	</v-card>
</template>

<script>
	import { mapActions } from 'vuex'
	import DataTable from '../../common/data-table.vue'

	export default {
		components: { DataTable },
		props: {
			productsDetails: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				minimised: true,
				addedProducts: this.productsDetails,
				productsList: [
					{ label: 'Standard 1', type: 'standard' },
					{ label: 'Standard 2', type: 'standard' },
					{ label: 'Standard 3', type: 'standard' },
					{ label: 'Standard 4', type: 'standard' },
					{ label: 'Premium 1', type: 'premium' },
					{ label: 'Premium 2', type: 'premium' },
					{ label: 'Premium 3', type: 'premium' },
					{ label: 'Premium 4', type: 'premium' }
				],
				standardProductsList: [
					{ label: 'Standard 1', price: 1 },
					{ label: 'Standard 2', price: 2 },
					{ label: 'Standard 3', price: 3 },
					{ label: 'Standard 4', price: 4 }
				],
				premiumProductsList: [
					{ label: 'Premium 1', price: 5 },
					{ label: 'Premium 2', price: 6 },
					{ label: 'Premium 3', price: 7 },
					{ label: 'Premium 4', price: 8 }
				]
			}
		},
		// watch: {
		// 	addedProducts: {
		// 		handler(val) {
		// 			console.log(val)
		// 			// this.updateProducts(val)
		// 		},
		// 		deep: true
		// 	}
		// },
		computed: {},
		created() {},
		methods: {
			...mapActions('order', ['updateProducts']),
			newProduct() {
				this.addedProducts.products.push({
					standard: [],
					premium: [],
					selected: [],
					price: 0
				})
			},
			removeProduct(i) {
				this.addedProducts.totalCost =
					this.addedProducts.totalCost - this.addedProducts.products[i].price
				this.addedProducts.products.splice(i, 1)
			},
			updateSelected(val, i) {
				this.addedProducts.totalCost -= this.addedProducts.products[i].price

				if (val !== null && val.length) {
					if (val.length < 4) this.addedProducts.products[i].price = 13
					else this.addedProducts.products[i].price++
				} else this.addedProducts.products[i].price = 0

				this.addedProducts.totalCost += this.addedProducts.products[i].price

				console.log(this.addedProducts.products[i].price)

				this.updateProducts(this.addedProducts)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.card-title-container
		display: flex;
		align-items: center;
		justify-content: space-between

	.products-details-form-section-container
		padding 1rem

	.products-details-form-section-summary
		display: flex
		justify-content center
		min-width 100px

	.position-right
		position absolute
		right 0
</style>
