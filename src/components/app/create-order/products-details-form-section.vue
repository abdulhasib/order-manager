<template>
	<v-card class="order-card" outlined>
		<v-card-title class="order-title">
			Product Details
			<v-btn
				class="position-right mr-2"
				depressed
				text
				@click="minimised = !minimised"
			>
				<v-icon>{{ minimised ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
			</v-btn>
		</v-card-title>

		<div v-show="!minimised" class="products-details-form-section-container">
			<v-row>
				<v-col cols="12" md="4">
					<v-card-text class="pt-4">
						<div>
							<v-expand-transition
								v-for="(product, i) in addedProducts"
								:key="i"
								appear
							>
								<v-card class="pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary">
									<v-container>
										<div class="card-title-container">
											<v-card-title class="product-title">
												Product {{ i + 1 }}
											</v-card-title>
											<v-btn fab small @click="removeProduct(i)">
												<v-icon>mdi-minus</v-icon>
											</v-btn>
										</div>
										<v-row>
											<v-col cols="12" md="4">
												<v-container class="px-0" fluid>
													Standard
													<v-checkbox
														v-for="(standardProduct,
														index) in standardProductsList"
														:key="index"
														v-model="product.selected.standard"
														:label="standardProduct.label"
														:value="standardProduct.label"
													/>
												</v-container>
												<v-container class="px-0" fluid>
													Premium
													<v-checkbox
														v-for="(premiumProduct,
														index) in premiumProductsList"
														:key="index"
														v-model="product.selected.premium"
														:label="premiumProduct.label"
														:value="premiumProduct.label || ''"
													/>
												</v-container>
											</v-col>
										</v-row>
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
						</div>
					</v-card-text>
				</v-col>
			</v-row>
		</div>

		<div
			v-show="minimised"
			class="products-details-form-section-summary-container"
		>
			<div class="ml-4 mb-4">
				<v-row v-for="(product, i) in addedProducts" :key="i">
					<v-col cols="12" md="4">
						<span> Product {{ i + 1 }} </span>
					</v-col>
					<v-col v-for="(standard, j) in product.selected.standard" :key="j">
						<span>{{ standard }}</span>
					</v-col>
					<v-col v-for="(premium, k) in product.selected.premium" :key="k">
						<span>{{ premium }}</span>
					</v-col>
				</v-row>
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
				type: Array,
				required: true
			}
		},
		data() {
			return {
				minimised: true,
				addedProducts: this.productsDetails,
				standardProductsList: [
					{ label: 'Standard 1' },
					{ label: 'Standard 2' },
					{ label: 'Standard 3' },
					{ label: 'Standard 4' }
				],
				premiumProductsList: [
					{ label: 'Premium 1' },
					{ label: 'Premium 2' },
					{ label: 'Premium 3' },
					{ label: 'Premium 4' }
				]
			}
		},
		watch: {
			addedProducts: {
				handler(val) {
					this.updateProducts(val)
				},
				deep: true
			}
		},
		computed: {},
		created() {},
		methods: {
			...mapActions('order', ['updateProducts']),
			newProduct() {
				this.addedProducts.push({
					selected: {
						standard: [],
						premium: []
					}
				})
			},
			removeProduct(i) {
				this.addedProducts.splice(i, 1)
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

	.position-right
		position absolute
		right 0
</style>
