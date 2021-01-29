<template>
  <div>
    <div class="overflow-hidden">
      <!--<div class="text-center mb-8">
        <v-btn
          color="deep-purple"
          outlined
          @click="active = !active"
        >
          Toggle Navigation
        </v-btn>
      </div>-->

      <v-bottom-navigation
        background-color="blue-grey"
        :input-value="active"
      >
        <div
          v-for="(item, i) in navItems"
          :key="i"
          exact
          class="nav-container"
        >
          <router-link
            class="nav-link"
            :to="{ path: item.path }"
          >
            <v-btn
              class="button"
              href="#"
              text
              depressed
              :class="(item.path === path) ? 'active' : 'not-active'"
              @click="showInput(i)"
            >
              <!--<v-icon>mdi-history</v-icon>-->
              <span>
                {{ item.title }}
              </span>
            </v-btn>
          </router-link>
        </div>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: this.$route.path,
      active: true,
      navItems: [
        { path: '/current-orders', name: 'current-orders', title: 'Current Orders' },
        { path: '/past-orders', name: 'past-orders', title: 'Past Orders' },
        { path: '/new-orders', name: 'new-orders', title: 'New Orders' }
      ]
    }
  },
  computed: {
  },
  created () {
    console.log(this.$route.path)
  },
  methods: {
    showInput () {
      //console.log(data)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-application a 
      color white
      width 100%
  
  .v-bottom-navigation
    position: fixed

  .nav-container
    width 100%
    height 100%

  .nav-container
      &.active
        background-color grey

  .nav-link
    text-decoration none

  .router-link-active
    display block
    height 100%
    background-color #668595
    a span
      color white

  .button 
    height 100% !important
</style>
