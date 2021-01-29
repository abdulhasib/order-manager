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
import { mapActions } from 'vuex'
import Loader from '@/components/Loader.vue'

export default {
  components: {
    Loader
  },
  data () {
    return {
      title: 'Home',
      isloaded: false,
    }
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
