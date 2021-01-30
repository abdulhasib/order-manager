<template>
  <div>
    <header-top :title="title" />
    <template v-if="isloaded===false">
      <loader />
    </template>
    <template v-else>
      <!-- main -->
      <!--<data-table 
        :table="table"
      />-->
      <orders-list 
        :data="data"
      />
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Loader from '@/components/Loader.vue'
  import HeaderTop from '@/components/HeaderTop.vue'
  //import DataTable from '@/components/DataTable.vue'
  import OrdersList from '@/components/OrdersList.vue'

  export default {
    components: {
      Loader,
      HeaderTop,
      //DataTable
      OrdersList
    },
    data () {
      return {
        title: 'New Orders',
        isloaded: false,
        data: []
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
        this.data = this.getNewOrders()
        this.isloaded = true
      }
    }
  }
</script>

<style lang="stylus">
  .order-card
      margin 1rem 0
</style>
