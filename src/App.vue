<template>
  <v-app id="app">
    <v-main>
      <v-container id="container">
        <nav-bar />
        <v-content>
          <router-view />
        </v-content>
      </v-container>
    </v-main>
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
