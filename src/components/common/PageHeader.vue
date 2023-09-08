<template>
  <v-toolbar color="#273339" dark flat>
    <v-btn v-model="isDisabled" to="/" icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title class="headline font-weight-medium">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" transition="slide-x-transition" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isDisabled: false,
      items: [{ title: 'Sign out' }]
    }
  },
  computed: {},
  created() {
    if (this.$route.path === '/') this.isDisabled = true
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
	.v-toolbar
		position: fixed
		width 100%
		top 0px
		left: 0px;
		overflow hidden


:deep(.v-toolbar__content)
	height auto !important
</style>
