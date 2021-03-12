<template>
	<v-card class="order-card" outlined>
		<v-card-title class="order-title my-2">
			<v-btn
				class="d-flex justify-space-between position-right"
				depressed
				text
				width="100%"
				@click="minimised = !minimised"
			>
				<span>Product Details</span>
				<v-icon>{{ minimised ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
			</v-btn>
		</v-card-title>
		<v-divider />

		<!--find out why v-show selects all checkboxes value of checkboxes were being created on the fly maybe, value is now an existing object-->
		<div v-show="!minimised" class="products-details-form-section-container">
			<v-row>
				<v-col cols="12" md="4">
					<div>
						<span class="caption">
							Standard selections are £13. <br>
							If premium is selected product price will be 15. <br>
							Up to 3 flavours. If selection exceeds 3, a charge of £1 will be
							added per extra selection.
						</span>
					</div>
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
												<div>
													Standard
													<div
														v-for="(item, index1) in productsList"
														:key="index1"
													>
														<v-checkbox
															v-if="item.type === 'standard'"
															v-model="product.selected"
															:label="item.name"
															:value="item"
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
															:label="item.name"
															:value="item"
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
			class="products-details-form-section-summary-container mx-2 my-4"
		>
			<div v-show="addedProducts.products[0].selected.length > 0" class="ml-4 mb-4">
				<div
					v-for="(product, i) in addedProducts.products"
					v-show="minimised"
					:key="i"
				>
					<div v-show="product.length !== 0">
						<span> Product {{ i + 1 }} </span>
						<div class="d-flex flex-wrap">
							<div class="d-flex flex-wrap" style="width:100%">
								<div
									v-for="(selectedProduct, j) in product.selected"
									:key="j"
									class="products-details-form-section-summary"
								>
									<span>{{ selectedProduct.name }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div v-show="addedProducts.products[0].selected.length === 0">
				<span class="ml-2">Select a product.</span>
			</div>
		</div>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	components: {},
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
				{ name: 'Standard 1', type: 'standard' },
				{ name: 'Standard 2', type: 'standard' },
				{ name: 'Standard 3', type: 'standard' },
				{ name: 'Standard 4', type: 'standard' },
				{ name: 'Premium 1', type: 'premium' },
				{ name: 'Premium 2', type: 'premium' },
				{ name: 'Premium 3', type: 'premium' },
				{ name: 'Premium 4', type: 'premium' }
			],
			previouslySelectedProducts: []
		}
	},
	computed: {},
	created() {},
	methods: {
		...mapActions('order', ['updateProducts']),
		newProduct() {
			this.addedProducts.products.push({
				selected: [],
				price: 0
			})
		},
		removeProduct(productNumber) {
			this.addedProducts.totalCost =
					this.addedProducts.totalCost -
					this.addedProducts.products[productNumber].price
			this.addedProducts.products.splice(productNumber, 1)
		},
		calculateProductCost(fixedPrice, selectedNumber) {
			let calculatedProductCost = 0

			// 3 min selected before price change
			if (selectedNumber > 3)
				calculatedProductCost = fixedPrice + (selectedNumber - 3)
			else if (selectedNumber <= 3) calculatedProductCost = fixedPrice
			else calculatedProductCost = 0

			return calculatedProductCost
		},
		updateSelected(val, productNumber) {
			const isPremium =
					val.length && val.some(({ type }) => type === 'premium')
			const fixedPrice = isPremium ? 15 : 13

			// remove product[i] price from total cost before recalculating
			this.addedProducts.totalCost =
					this.addedProducts.totalCost -
					this.addedProducts.products[productNumber].price

			const price = this.calculateProductCost(fixedPrice, val.length)
			this.addedProducts.products[productNumber].price = price

			this.addedProducts.totalCost += this.addedProducts.products[
				productNumber
			].price

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
