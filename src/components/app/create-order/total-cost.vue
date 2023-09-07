<script setup>
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order'

const orderStore = useOrderStore()
const { getOrderTotalCost } = storeToRefs(orderStore)
</script>

<template>
  <div class="d-flex flex-row-reverse body-1 font-weight-medium mr-2 mt-4">
    Order Total: £{{ getOrderTotalCost }}
  </div>
</template>
