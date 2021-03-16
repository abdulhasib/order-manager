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
				<span>Drinks Details</span>
				<v-icon>{{ minimised ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
			</v-btn>
		</v-card-title>
		<v-divider />

		<div v-show="!minimised" class="drinks-details-form-section-container">
			<v-row>
				<v-col cols="12" sm="4">
					<v-card-text class="pt-4">
						<div>
							<v-expand-transition appear>
								<v-card class="pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary">
									<v-container>
										<v-row>
											<v-col cols="12" sm="4">
												<v-container
													v-if="selectedDrinksCount.length"
													class="px-0"
													fluid
												>
													<div class="d-flex flex-row-reverse">
														<span>Price</span>
													</div>
													<div
														v-for="(drink, index) in drinksList"
														:key="index"
														class="d-flex align-center justify-space-between"
													>
														<v-text-field
															v-model="selectedDrinksCount[index].count"
															:label="drink.label"
															type="number"
															append-outer-icon="add"
															prepend-icon="remove"
															min="0"
															oninput="validity.valid||(value='');"
															:rules="drinksRules"
															style="max-width: 10rem;"
															@click:append-outer="
																increment(drink.label, index)
															"
															@click:prepend="decrement(drink.label, index)"
														/>
														<div>
															<span>£{{ drink.price }}</span>
														</div>
													</div>
												</v-container>
											</v-col>
										</v-row>
									</v-container>
								</v-card>
							</v-expand-transition>
							<v-divider />
							<div class="d-flex flex-row-reverse font-weight-medium mr-2 mt-4">
								<span> Drinks Total: £{{ addedDrinks.totalCost }} </span>
							</div>
						</div>
					</v-card-text>
				</v-col>
			</v-row>
		</div>

		<div
			v-show="minimised"
			class="drinks-details-form-section-summary-container mx-2 my-4"
		>
			<div v-show="addedDrinks.drinks.selected.length > 0" class="ml-4">
				<v-row
					v-for="(drink, i) in selectedDrinksCount"
					:key="i"
					class="body-2"
				>
					<v-col v-show="drink.count !== 0" cols="4" sm="4">
						<span> {{ drink.name }} </span>
					</v-col>
					<v-col v-show="drink.count !== 0" sm="4" class="font-weight-light">
						<span> x </span>
						<span> {{ drink.count }} </span>
					</v-col>
				</v-row>
			</div>

			<div v-show="addedDrinks.totalCost !== 0">
				<v-divider />
				<div class="d-flex flex-row-reverse body-2 mr-2 mt-4">
					<span> Drinks Total: £{{ addedDrinks.totalCost }} </span>
				</div>
			</div>
			<div v-show="addedDrinks.drinks.selected.length === 0">
				<span class="body-2 ml-2">Select a drink.</span>
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
			minimised: true,
			addedDrinks: this.drinksDetails,
			drinksRules: [(v) => v > -1 || 'Select Number of drinks or set to 0'],
			selectedDrinksCount: [],
			selectedDrinksTotalCost: 0,
			drinksList: [
				{ label: 'Pepsi', price: 1 },
				{ label: 'Coke', price: 2 },
				{ label: 'Fanta', price: 3 },
				{ label: '7up', price: 4 }
			]
		}
	},
	computed: {},
	mounted() {
		this.drinksList.forEach(({ label }, index) =>
			this.getselectedDrinksCount(label, index)
		)
	},
	methods: {
		...mapActions('order', ['updateDrinks']),
		increment(drink, index) {
			const count = this.selectedDrinksCount[index].count + 1
			const price = this.drinksList[index].price
			// const cost = price * count

			this.selectedDrinksCount[index].count = count
			// this.selectedDrinksCount[index].price = price
			// this.selectedDrinksCount[index].cost = cost

			this.addedDrinks.drinks.selected.push(drink)
			this.addedDrinks.totalCost += price
			this.updateDrinks(this.addedDrinks)
		},
		decrement(drink, index) {
			const newCount = this.selectedDrinksCount[index].count - 1

			// count does not go below 0
			if (newCount < 0) return

			this.selectedDrinksCount[index].count = newCount
			this.addedDrinks.drinks.selected.splice(
				this.addedDrinks.drinks.selected.indexOf(drink),
				1
			)

			this.addedDrinks.totalCost =
					this.addedDrinks.totalCost - this.drinksList[index].price
			this.updateDrinks(this.addedDrinks)
		},
		getselectedDrinksCount(drink, index) {
			const count = this.addedDrinks.drinks.selected.filter(
				(v) => v === drink
			).length
			const price = this.drinksList[index].price
			const cost = price * count

			this.selectedDrinksCount.push({
				name: drink,
				count,
				price,
				cost
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

	.drinks-details-form-section-container
		padding 1rem

	.position-right
		position absolute
		right 0
</style>
