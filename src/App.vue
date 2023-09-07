<script setup>
import { RouterView } from 'vue-router'

import NavBar from '@/components/common/NavBar.vue'
</script>

<template>
  <v-app id="app">
    <v-main>
      <v-container id="container">
        <v-main>
          <RouterView />
        </v-main>
      </v-container>
    </v-main>
    <NavBar />
  </v-app>
</template>

<style lang="stylus" scope>
#app
	background: #f5f5f5

#container
	padding: 0
	position:absolute
	top 56px
	bottom:56px;
	left:0px
	right:0px
	overflow auto
</style>
