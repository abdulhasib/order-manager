<template>
  <div>
    <header-top :title="title" />
    <template v-if="isloaded===false">
      <loader />
    </template>
    <template v-else>
      <!-- main -->
      <data-table
        :table="table"
      />
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Loader from '@/components/Loader.vue'
  import HeaderTop from '@/components/HeaderTop.vue'
  import DataTable from '@/components/DataTable.vue'

  export default {
    components: {
      Loader,
      HeaderTop,
      DataTable
    },
    data () {
      return {
        title: 'Current Orders',
        isloaded: false,
        table: {
          headers: [
          {
            text: 'Order ID',
            align: 'start',
            sortable: false,
            value: 'id'
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
      ...mapGetters('order', ['getCurrentOrders']),
      ...mapActions('order', ['fetchCurrentrders']),
      async fetch () {
        //await this.fetchCurrentrders()
        //this.table.data = this.getCurrentOrders()
        //this.isloaded = true
      }
    }
  }
</script>

<style lang="stylus">
</style>
