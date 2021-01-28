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
      <v-data-table
        :headers="headers"
        :items="data"
      />

      <!-- footer -->
      <!--<footer-info />-->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
//import FooterInfo from '@/components/FooterInfo.vue'

export default {
  components: {
    //FooterInfo
  },
  data () {
    return {
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
  },
  computed: {

  },
  async created () {
    await this.fetchNewOrders()
    this.data = this.getNewOrders()

  },
  methods: {
    ...mapGetters('order', ['getNewOrders']),
    ...mapActions('order', ['fetchNewOrders']),
    functionOne () {}
  }
}
</script>

<style lang="stylus">
</style>
