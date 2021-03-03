<template>
	<v-card class="order-card" outlined>
		<v-card-title class="order-title">
			{{ addedProducts.length }}
			Product Details
		</v-card-title>
		<div class="product-details-form-section-container">
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
														v-model="product.selected.standard[index]"
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
														v-model="product.selected.premium[index]"
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
	</v-card>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: {
			productsDetails: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
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
      addedProducts:{
        handler(val) {
          this.updateProducts(val)
        },
        deep: true
      }
    },
		computed: {},
		created() {
			//console.log(this.$props.table)
		},
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

	.product-details-form-section-container
		padding 1rem
</style>
