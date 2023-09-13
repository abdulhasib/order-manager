<script setup>
import DrinksDetails from '@/components/common/DrinksDetails.vue'

import { ref, reactive, onMounted } from 'vue'
import { useOrderStore } from '@/stores/order'
import { debounce } from '@/utils/utility'

let {
  createOrderForm: { drinksDetails }
} = useOrderStore()

const minimised = ref(true)
const selectedDrinksCount = reactive([])
const drinksList = [
  { label: 'Pepsi', price: 1 },
  { label: 'Coke', price: 2 },
  { label: 'Fanta', price: 3 },
  { label: '7up', price: 4 }
]
const drinksRules = [(v) => v > -1 || 'Select Number of drinks or set to 0']

const increment = (drink, index) => {
  const count = parseInt(selectedDrinksCount[index].count) + 1
  const price = drinksList[index].price

  selectedDrinksCount[index].count = count
  const existingDrink = drinksDetails.drinks.find((d) => d.selected === drink)

  if (existingDrink) existingDrink.count++
  else drinksDetails.drinks.push({ selected: drink, price, count })

  drinksDetails.totalCost = calculateTotalCost()
}

const decrement = (drink, index) => {
  const newCount = parseInt(selectedDrinksCount[index].count) - 1
  // count does not go below 0
  if (newCount <= 0) return drinksDetails.drinks.splice(drinksDetails.drinks.indexOf(drink), 1)

  selectedDrinksCount[index].count = newCount
  drinksDetails.drinks.find((d) => d.selected === drink).count--
  drinksDetails.totalCost = calculateTotalCost()
}

const updateCounter = (index, drink, count = parseInt(count)) => {
  const price = drinksList[index].price
  drinksDetails.drinks = drinksDetails.drinks.filter((d) => !d.selected.includes(drink))

  if (count <= 0) return
  drinksDetails.drinks.push({ selected: drink, price, count })
  drinksDetails.totalCost = calculateTotalCost()
}

const updateCounterDebounce = debounce(updateCounter, 608)

const calculateTotalCost = () =>
  selectedDrinksCount.reduce(
    (totalCost, drink) => (totalCost += parseInt(drink.count) * parseInt(drink.price)),
    parseInt(0)
  )

const getselectedDrinksCount = (drink, index) => {
  const count = drinksDetails.drinks.filter((v) => v === drink).length
  const price = drinksList[index].price
  const cost = price * count

  selectedDrinksCount.push({
    name: drink,
    count,
    price,
    cost
  })
}

onMounted(() => {
  drinksList.forEach(({ label }, index) => getselectedDrinksCount(label, index))
})
</script>

<template>
  <v-card color="#dbd9d9" class="order-card" outlined>
    <div class="order-title mt-2 mx-1">
      <v-btn
        class="d-flex justify-space-between text-body-2"
        depressed
        text
        width="100%"
        @click="minimised = !minimised"
      >
        <span>Drinks</span>
        <v-icon :icon="minimised ? 'mdi-chevron-down' : 'mdi-chevron-up'" />
      </v-btn>
    </div>
    <v-divider />

    <div v-show="!minimised" class="drinks-details-form-section-container">
      <v-row>
        <v-col cols="12" sm="12">
          <v-card-text class="pt-4">
            <div>
              <v-expand-transition appear>
                <v-card class="pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="10">
                        <v-container class="pl-6 pr-6 px-0" v-if="selectedDrinksCount.length" fluid>
                          <div class="d-flex flex-row-reverse">
                            <span>Price</span>
                          </div>
                          <div
                            v-for="(drink, index) in drinksList"
                            :key="index"
                            class="d-flex align-center justify-space-between"
                          >
                            <div class="d-flex flex-column">
                              <v-btn
                                class="mt-1"
                                size="x-small"
                                density="comfortable"
                                icon="mdi-minus"
                                @click="decrement(drink.label, index)"
                              />
                            </div>

                            <v-text-field
                              v-model="selectedDrinksCount[index].count"
                              :label="drink.label"
                              type="number"
                              min="0"
                              oninput="validity.valid||(value='');"
                              :rules="drinksRules"
                              style="max-width: 4rem"
                              @input="
                                updateCounterDebounce(
                                  index,
                                  drink.label,
                                  selectedDrinksCount[index].count
                                )
                              "
                            />

                            <div class="d-flex flex-column mr-8">
                              <v-btn
                                class="mb-1"
                                size="x-small"
                                density="comfortable"
                                icon="mdi-plus"
                                @click="increment(drink.label, index)"
                              />
                            </div>
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
                <span> Drinks Total: £{{ drinksDetails.totalCost }} </span>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </div>

    <div class="mx-2 my-4 text-caption">
      <DrinksDetails :minimised="minimised" :drinksDetails="drinksDetails" />
    </div>
  </v-card>
</template>

<style lang="stylus" scoped>
.drinks-details-form-section-container
	padding 1rem

:deep(input::-webkit-outer-spin-button),
:deep(input::-webkit-inner-spin-button)
	-webkit-appearance none
	margin 0

:deep(.v-card-text)
	padding 0 !important
</style>
