<script setup>
import { defineProps } from 'vue'

import CustomerDetails from '@/components/common/CustomerDetails.vue'
import ProductsDetails from '@/components/common/ProductsDetails.vue'
import DrinksDetails from '@/components/common/DrinksDetails.vue'

defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div v-for="(item, i) in data" :key="i" exact class="cards-container">
    <v-card
      color="#ededed"
      class="order-card"
      elevation="5"
      outlined
      @click="item.show = !item.show"
    >
      <v-card-title class="order-title text-body-1">
        Order Number: {{ item.id }}
        <v-icon :icon="!item.show ? 'mdi-chevron-down' : 'mdi-chevron-up'" />
      </v-card-title>

      <v-card-text class="order-text text-caption">
        <div>
          Assigned to:
          <span v-if="item.assignedTo">
            {{ item.assignedTo.firstname }} {{ item.assignedTo.lastname }}
          </span>
          <span v-else> None </span>
        </div>
        <div>
          Status:
          <span>
            {{ item.status }}
          </span>
        </div>
      </v-card-text>

      <v-card-subtitle class="order-subtitle">
        <span> Created at: {{ item.created }} </span>
        <span> Modified at: {{ item.modified }} </span>
      </v-card-subtitle>
    </v-card>

    <Transition>
      <div v-show="item.show">
        <CustomerDetails :customerDetails="item.order.customerDetails" />
        <ProductsDetails :productsDetails="item.order.productsDetails" />
        <DrinksDetails :drinksDetails="item.order.drinksDetails" />
      </div>
    </Transition>
  </div>
</template>

<style lang="stylus" scoped>
.order-card
		margin 1rem 0
		padding 0.25rem 0

.cards-container
	padding 0 0.5rem

.order-subtitle
	padding 0 0.5rem
	font-size 0.5rem
	display flex
	justify-content space-between

  .v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
