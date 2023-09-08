<script setup>
import PageHeader from '@/components/common/PageHeader.vue'
//import PageFooter from '@/components/common/PageFooter.vue'
import NavBar from '@/components/common/NavBar.vue'

import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <PageHeader :title="route.name" />
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
  <!--<PageFooter />-->
</template>

<style lang="stylus" scope>
#container
	padding: 0
	position:absolute
	top 56px
	bottom:56px;
	left:0px
	right:0px
	overflow auto
	background-color #f5f5f5
</style>
