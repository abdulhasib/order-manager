<template>
	<div>
		<header-top :title="title" />
		<template v-if="isloaded === false">
			<loader />
		</template>
		<template v-else>
			<div class="overall-info-card" outlined>
				<v-subheader class="order-title font-weight-medium">
					<span class="orders-length">
						{{ currentOrders.length }}
					</span>
					<span>
						New Orders
					</span>
				</v-subheader>
			</div>
			<orders-list :data="currentOrders" />
		</template>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import Loader from '@/components/common/loader.vue'
	import HeaderTop from '@/components/common/header.vue'
	//import DataTable from '@/components/DataTable.vue'
	import OrdersList from './orders-list.vue'

	export default {
		components: {
			Loader,
			HeaderTop,
			//DataTable
			OrdersList
		},
		data() {
			return {
				title: 'New Orders',
				isloaded: false,
				data: []
			}
		},
		computed: {
			...mapState('order', ['currentOrders'])
		},
		async created() {
			await this.fetch()
			this.isloaded = true
		},
		methods: {
			...mapActions('order', ['fetchCurrentOrders']),
			async fetch() {
				await this.fetchCurrentOrders()
			}
		}
	}
</script>

<style lang="stylus">
	.overall-info-card
		margin 0.5rem 1rem 0 1rem
		.order-title
			padding 0 0.5rem
			.orders-length
				margin 0 0.25rem 0 0
</style>
