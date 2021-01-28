<template>
  <v-layout
    row
    wrap
  >
    <v-flex text-xs-center>
      <!-- header -->
      <h1 class="">
        New Orders
      </h1>

      <!-- main -->
      <data-table 
        :table="table"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data () {
    return {
      table: {
        headers: [
        {
          text: 'Order ID',
          align: 'start',
          sortable: false,
          value: 'id',
          },
          { text: 'Created At', value: 'created_at' },
          { text: 'Modifed At', value: 'modified_at' },
          { text: 'Assigned To', value: 'employee.first_name' },
          { text: 'Status', value: 'status' }
        ],
        data: []
      }
    }
  },
  computed: {

  },
  async created () {
    this.fetch()
  },
  methods: {
    ...mapGetters('order', ['getNewOrders']),
    ...mapActions('order', ['fetchNewOrders']),
    async fetch () {
      await this.fetchNewOrders()
      this.table.data = this.getNewOrders()
    }
  }
}
</script>

<style lang="stylus">
</style>
