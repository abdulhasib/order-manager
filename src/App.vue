<template>
  <v-app id="app">
    <v-content>
      <v-container id="container">
        <nav-bar></nav-bar>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="stylus" scope>
#app
  background: #f5f5f5

#container
  max-width: 550px
  padding: 8px
</style>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
