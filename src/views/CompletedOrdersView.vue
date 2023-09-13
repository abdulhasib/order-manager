<script setup>
import PageLoader from '@/components/common/PageLoader.vue'
import CustomerDetails from '@/components/common/CustomerDetails.vue'
import ProductsDetails from '@/components/common/ProductsDetails.vue'
import DrinksDetails from '@/components/common/DrinksDetails.vue'

import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order'

const isloaded = ref(false)
const itemsPerPage = ref(5)
//const expanded = reactive([])
const headers = [
  { title: 'Name', align: 'start', key: 'order.customerDetails.firstname', sortable: false },
  { title: 'Assigned To', align: 'start', key: 'assignedTo.firstname', sortable: false },
  { title: 'Created', align: 'end', key: 'created', sortable: false },
  { title: 'Completed', align: 'end', key: 'completed', sortable: false },
  { title: '', key: 'data-table-expand' }
]

onMounted(async () => {
  await fetch()
  isloaded.value = true
})

const orderStore = useOrderStore()

const fetch = async () => await orderStore.fetchCompletedOrders()

const { completedOrders } = storeToRefs(useOrderStore())
</script>

<script>
export default {
  data() {
    return {
      expanded: []
    }
  }
}
</script>

<template>
  <template v-if="isloaded === false">
    <PageLoader />
  </template>
  <template v-else>
    <div>
      <v-data-table
        v-model:expanded="expanded"
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="completedOrders"
        item-value="id"
        show-expand
        class="elevation-1"
        density="compact"
      >
        <!--<template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Completed Orders</v-toolbar-title>
        </v-toolbar>
      </template>-->
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length">
              <CustomerDetails :customerDetails="item.raw.order.customerDetails" />
              <ProductsDetails :productsDetails="item.raw.order.productsDetails" />
              <DrinksDetails :drinksDetails="item.raw.order.drinksDetails" />
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </template>
</template>

<style lang="stylus" scoped></style>
