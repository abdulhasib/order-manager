<template>
  <div>
    <header-top :title="title" />
    <template v-if="isloaded===false">
      <loader />
    </template>
    <template v-else>
      <data-table
        :table="table"
      />
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Loader from '@/components/common/loader.vue'
  import HeaderTop from '@/components/common/header.vue'
  import DataTable from '@/components/common/data-table.vue'

  export default {
    components: {
      Loader,
      HeaderTop,
      DataTable
    },
    data () {
      return {
        title: 'Past Orders',
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
      ...mapGetters('order', ['getPastOrders']),
      ...mapActions('order', ['fetchPastrders']),
      async fetch () {
        //await this.fetchPastrders()
        //this.table.data = this.getPastOrders()
        //this.isloaded = true
      }
    }
  }
</script>

<style lang="stylus">
</style>
