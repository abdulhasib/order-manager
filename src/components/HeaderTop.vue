<template>
  <v-toolbar
    color="#40545e"
    dark
    flat
  >
    <v-btn
      v-model="isDisabled"
      to="/"
      icon
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title class="headline font-weight-medium">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
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
    data () {
      return {
        isloaded: false,
        isDisabled: false
      }
    },
    computed: {
    },
    created () {
      console.log('aa')
    if (this.$route.path === '/') this.isDisabled = true
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
    left: 0px;
    overflow hidden
</style>
