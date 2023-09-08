<script setup>
import { RouterLink } from 'vue-router'
</script>

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

      <v-bottom-navigation grow :input-value="active">
        <div v-for="(item, i) in navItems" :key="i" exact class="nav-container">
          <RouterLink class="nav-link" :to="{ path: item.path }">
            <v-btn
              class="button"
              href="#"
              text
              depressed
              :class="item.path === path ? 'active' : 'not-active'"
            >
              <span>
                <v-icon :icon="item.icon" />
                <span class="text-caption">{{ item.name }}</span>
              </span>
            </v-btn>
          </RouterLink>
        </div>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      path: this.$route.path,
      active: true,
      navItems: [
        {
          path: '/create-order',
          name: 'Create Order',
          icon: 'mdi-new-box'
        },
        {
          path: '/current-orders',
          name: 'Current Orders',
          icon: 'mdi-restart' //cached?
        },
        {
          path: '/completed-orders',
          name: 'Completed Orders',
          icon: 'mdi-archive'
        }
      ]
    }
  },
  computed: {},
  created() {
    // console.log(this.$route.path)
  },
  methods: {}
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
	background-color #273339
	a
		span
			color white

.button
	height 100% !important
	width 100% !important
	max-width inherit !important
	padding 0 !important
	.v-icon
		width auto
</style>
