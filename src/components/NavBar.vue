<template>
  <v-navigation-drawer
    :mini-variant="true"
    style="min-width: 100px!important;"
    permanent="true"
    app
    floating
  >
    <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          exact
          :to="item.path"
        >
          <router-link
            class="nav-link"
            :to="{ path: item.path }"
          >
            <v-btn
              id="logo"
              href="#"
              text
              depressed
            >
              {{ item.title }}
            </v-btn>
          </router-link>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      navItems: [
        { path: '/current-orders', name: 'current-orders', title: 'Current Orders' },
        { path: '/past-orders', name: 'past-orders', title: 'Past Orders' },
        { path: '/new-orders', name: 'new-orders', title: 'New Orders' }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .router-link-exact-active {
    pointer-events: none;
    text-decoration: none;
  }

  .v-btn {
    padding: 0
  }

  .v-btn__content {
    font-size: 0.8em;
  }
</style>
