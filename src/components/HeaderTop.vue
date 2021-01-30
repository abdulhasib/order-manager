<template>
  <v-toolbar
    color="#40545e"
    dark
    flat
  >
  <v-toolbar-title class="headline">
    {{ title }}
  </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .v-toolbar
    position: fixed
    height 100%
    width 100%
    top 0px
    overflow hidden
</style>
