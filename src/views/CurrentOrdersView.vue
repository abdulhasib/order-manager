<script setup>
import PageLoader from '@/components/common/PageLoader.vue'
import AppCurrentOrdersOrdersList from '@/components/app/current-orders/orders-list.vue'

import { ref, onMounted } from 'vue'

const isloaded = ref(true)
//const data = reactive([])

onMounted(async () => {
  await fetch()
  isloaded.value = true
})

import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order'

const orderStore = useOrderStore()

const fetch = async () => await orderStore.fetchCurrentOrders()

const { currentOrders } = storeToRefs(useOrderStore())
</script>

<template>
  <div>
    <!--<header-top :title="title" />-->
    <template v-if="isloaded === false">
      <PageLoader />
    </template>
    <template v-else>
      <div class="overall-info-card" outlined>
        <v-list-subheader class="order-title font-weight-medium">
          <span class="orders-length">
            {{ currentOrders.length }}
          </span>
          <span> New Orders </span>
        </v-list-subheader>
      </div>
      <AppCurrentOrdersOrdersList :data="currentOrders" />
    </template>
  </div>
</template>

<style lang="stylus">
.overall-info-card
	margin 0.5rem 1rem 0 1rem
	.order-title
		padding 0 0.5rem
		.orders-length
			margin 0 0.25rem 0 0
</style>
