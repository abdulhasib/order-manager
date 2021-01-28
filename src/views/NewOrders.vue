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

      <!-- footer -->
      <!--<footer-info />-->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
//import FooterInfo from '@/components/FooterInfo.vue'

export default {
  components: {
    //FooterInfo
  },
  data () {
    return {}
  },
  computed: {
    newOrders () {
      return this.$store.state.newOrders
    }
  },
  async created () {
    await this.fetchNewOrders()
  },
  methods: {
    ...mapActions('order', ['fetchNewOrders']),
    functionOne () {}
  }
}
</script>

<style lang="stylus">
</style>
