<script setup>
import PageLoader from '@/components/common/PageLoader.vue'
import AppCurrentOrdersOrdersList from '@/components/app/current-orders/orders-list.vue'

import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order'

const isloaded = ref(false)
//const data = reactive([])

onMounted(async () => {
  await fetch()
  isloaded.value = true
})

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
      <v-card class="overall-info-card-container" outlined>
        <div class="overall-info-card" outlined>
          <v-list-subheader class="order-title font-weight-medium">
            <span class="orders-length">
              {{ currentOrders.length }}
            </span>
            <span> Current Orders </span>
          </v-list-subheader>
        </div>
      </v-card>
      <AppCurrentOrdersOrdersList :data="currentOrders" />
    </template>
  </div>
</template>

<style lang="stylus" scoped>
.overall-info-card-container
  margin 0.5rem
.overall-info-card
  background-color: #ededed
.order-title
  padding 0 0.5rem
</style>
