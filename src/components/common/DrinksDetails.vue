<script setup>
import { defineProps } from 'vue'

defineProps({
  drinksDetails: {
    type: Array,
    required: true
  },
  minimised: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <v-card
    class="drinks-details-form-section-summary-container pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary"
    v-show="minimised"
  >
    <v-container class="pl-6 pr-6">
      <div class="mx-2 my-4 text-caption">
        <div v-show="drinksDetails.drinks.length > 0" class="ml-4 mb-4">
          <v-row v-for="(drink, i) in drinksDetails.drinks" :key="i" class="body-2">
            <v-col cols="4" sm="4">
              <span>{{ drink.selected }}</span>
            </v-col>
            <v-col sm="4" class="font-weight-light">
              <span> x </span>
              <span> {{ drink.count }} </span>
            </v-col>
            <v-col cols="2" sm="4" class="font-weight-light">
              <span> £{{ drink.price * drink.count }} </span>
            </v-col>
          </v-row>
        </div>

        <div v-show="drinksDetails.totalCost !== 0">
          <v-divider />
          <div class="d-flex flex-row-reverse body-2 mr-2 mt-4">
            <span> Drinks Total: £{{ drinksDetails.totalCost }} </span>
          </div>
        </div>
        <div v-show="drinksDetails.drinks.length === 0">
          <span class="body-2 ml-2">Select drinks.</span>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<style lang="stylus" scoped></style>
