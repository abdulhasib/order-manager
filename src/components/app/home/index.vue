<template>
	<div>
		<header-top :title="title" />
		<template v-if="isloaded === false">
			<loader />
		</template>
		<template v-else>
			<div class="button-container">
				<v-btn elevation="5" color="pink" fab dark small absolute bottom left>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</div>
		</template>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Loader from '@/components/common/loader.vue'
import HeaderTop from '@/components/common/header.vue'

export default {
	components: {
		Loader,
		HeaderTop
	},
	data() {
		return {
			title: 'Home',
			isloaded: false
		}
	},
	computed: {},
	async created() {
		this.fetch()
	},
	methods: {
		...mapGetters('order', ['getPastOrders']),
		...mapActions('order', ['fetchPastrders']),
		async fetch() {
			//await this.fetchPastrders()
			//this.table.data = this.getPastOrders()
			this.isloaded = true
		}
	}
}
</script>

<style lang="stylus" scoped>
	.button-container
		height: 10%;
		width: 100%;
		position: fixed;
		bottom: 56px;
</style>
