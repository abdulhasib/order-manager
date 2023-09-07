<script setup>
import AppCreateOrderCustomerDetails from '@/components/app/create-order/customer-details.vue'
import AppCreateOrderProductDetails from '@/components/app/create-order/product-details.vue'
import AppCreateOrderDrinksDetails from '@/components/app/create-order/drink-details.vue'
import AppCreateOrderTotalCost from '@/components/app/create-order/total-cost.vue'
</script>

<template>
  <div>
    <v-container>
      <AppCreateOrderCustomerDetails class="mt-4 mb-4" />
      <AppCreateOrderProductDetails class="mb-4" />
      <AppCreateOrderDrinksDetails class="mb-4" />
      <AppCreateOrderTotalCost class="mb-4" />
      <!--<v-btn class="mt-12 mb-6" width="100%" @click="submit">
				Create Order
			</v-btn>-->
    </v-container>
  </div>
</template>

<style lang="stylus" scoped></style>
