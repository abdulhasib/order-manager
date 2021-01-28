<template>
  <v-app id="app">
    <v-main>
      <v-container id="container">
        <v-main>
          <router-view />
        </v-main>
      </v-container>
    </v-main>
    <nav-bar />
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
