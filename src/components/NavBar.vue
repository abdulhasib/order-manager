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
        :value="value"
        grow
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
              <span>
                <v-icon>{{ item.icon }}</v-icon>
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
        { path: '/current-orders', name: 'current-orders', title: 'Current Orders', icon: 'mdi-snowman' },
        { path: '/past-orders', name: 'past-orders', title: 'Past Orders', icon: 'mdi-archive' },
        { path: '/new-orders', name: 'new-orders', title: 'New Orders', icon: 'mdi-new-box' }
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
    position:absolute; 
    bottom:0px; 
    height:200px; 
    left:0px; 
    right:0px; 
    overflow:hidden;

  .nav-container
    width 100%
    height 100%

  .nav-link
    text-decoration none
    display: flex !important
    justify-content: center
    align-items: center
    height 100%
    a span
      display flex
      flex-direction column
      color #1e282d

  .router-link-active
    display block
    height 100%
    background-color #40545e
    a 
      span
        color white

  .v-btn 
    height 100% !important
    width 100% !important
    max-width: inherit !important
</style>
