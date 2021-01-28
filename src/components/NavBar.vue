<template>
  <v-layout row wrap>
    <v-flex text-xs-center>
      <v-card class="mt-3" >
        <v-list>
            <v-list-item v-for="(item, i) in navItems" exact :key="i" :to="item.path">
                <router-link class="nav-link" :to="{ path: item.path }">
                    <v-btn href="#" id="logo" text depressed>
                        {{item.title}}
                    </v-btn>
                </router-link>
            </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { path: '/current-orders', name: 'current-orders', title: 'Current Orders' },
        { path: '/past-orders', name: 'past-orders', title: 'Past Orders' },
        { path: '/new-orders', name: 'new-orders', title: 'New Orders' }
      ]
    }
  },
  methods: {},
  computed: {}
}
</script>

<style lang="stylus">
  .router-link-exact-active {
    display: none;
  }
</style>
