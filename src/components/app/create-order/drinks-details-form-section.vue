<template>
	<v-card class="order-card" outlined>
		<v-card-title class="order-title">
			Drinks Details
			<v-btn
				class="position-right mr-2"
				depressed
				text
				@click="minimised = !minimised"
			>
				<v-icon>{{ minimised ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
			</v-btn>
		</v-card-title>

		<div v-show="!minimised" class="product-details-form-section-container">
			<v-row>
				<v-col cols="12" md="4">
					<v-card-text class="pt-4">
						<div>
							<v-expand-transition appear>
								<v-card class="pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary">
									<v-container>
										<div class="card-title-container">
											<v-card-title class="product-title">
												Drinks
											</v-card-title>
										</div>
										<v-row>
											<v-col cols="12" md="4">
												<v-container
													class="px-0"
													fluid
													v-if="drinksCount.length"
												>
													<v-text-field
														v-for="(drink, index) in drinksList"
														:key="index"
														v-model="drinksCount[index].count"
														:label="drink.label"
														type="number"
														append-outer-icon="add"
														@click:append-outer="increment(drink.label, index)"
														prepend-icon="remove"
														@click:prepend="decrement(drink.label, index)"
														min="0"
														oninput="validity.valid||(value='');"
														:rules="drinksRules"
													></v-text-field>
												</v-container>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-expand-transition>
						</div>
					</v-card-text>
				</v-col>
			</v-row>
		</div>

		<div
			v-show="minimised"
			class="products-details-form-section-summary-container"
		>
			<div class="ml-4 mb-4" v-if="drinksCount.length">
				<v-row v-for="(drink, i) in drinksCount" :key="i">
					<v-col cols="6" md="4" v-if="drink.count !== 0">
						<span> {{ drink.name }} </span>
						<span> x {{ drink.count }} </span>
					</v-col>
				</v-row>
			</div>
		</div>
	</v-card>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: {
			drinksDetails: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				foo: { count: 0 },
				drinksRules: [
					(v) => !!v || 'This field is required',
					(v) => (v && v > 0) || 'Select Number of drinks or set to 0'
				],
				drinksCount: [],
				minimised: true,
				addedDrinks: this.drinksDetails,
				drinksList: [
					{ label: 'Pepsi' },
					{ label: 'Coke' },
					{ label: 'Fanta' },
					{ label: '7up' }
				]
			}
		},
		computed: {},
		mounted() {
			this.drinksList.forEach(({ label }) => this.getDrinksCount(label))
		},
		methods: {
			...mapActions('order', ['updateDrinks']),
			increment(drink, index) {
				this.drinksCount[index].count = this.drinksCount[index].count + 1
				this.addedDrinks.selected.drinks.push(drink)
				this.updateDrinks(this.addedDrinks)
			},
			decrement(drink, index) {
				this.drinksCount[index].count = this.drinksCount[index].count - 1
				this.$delete(this.addedDrinks.selected.drinks, index)
				this.updateDrinks(this.addedDrinks)
			},
			getDrinksCount(drink) {
				this.drinksCount.push({
					name: drink,
					count: this.addedDrinks.selected.drinks.filter((v) => v === drink)
						.length
				})
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

	.position-right
		position absolute
		right 0
</style>
