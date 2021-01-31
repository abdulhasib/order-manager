<template>
  <div>
    <header-top :title="title" />
    <template v-if="isloaded===false">
      <loader />
    </template>
    <template v-else>
      <!-- main -->
    </template>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Loader from '@/components/Loader.vue'
  import HeaderTop from '@/components/HeaderTop.vue'

  export default {
    components: {
      Loader,
      HeaderTop
    },
    data () {
      return {
        title: 'Home',
        isloaded: false
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
