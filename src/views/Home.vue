<template>
  <v-layout row wrap>
    <v-flex text-xs-center>
      <!-- header -->
      <h1 class="">Home</h1>
      <!-- main -->

      <!-- footer -->
      <footer-info></footer-info>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
import FooterInfo from '@/components/FooterInfo.vue'

export default {
  props: [''],
  components: {
    FooterInfo
  },
  data () {
    return {}
  },
  computed: {},
  beforeCreate () {},
  methods: {
    ...mapActions([]),
    functionOne () {}
  }
}
</script>

<style lang="stylus">
</style>
