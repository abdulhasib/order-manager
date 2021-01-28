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
          class="list"
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
    console.log(this.$route)
  },
  methods: {
    showInput(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .router-link-active
    color: none
    a span
      color: white

  .nav-link
    display: flex
    justify-content: center
    align-items: center
    text-decoration: none
  
  .list
    width: 100%
    padding: 0.5rem

  .button 
    height: 45px
    font-size: 10px !important
    padding: 0 !important
</style>
