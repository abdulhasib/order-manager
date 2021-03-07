<template>
	<div>
		<header-top :title="title" />
		<template v-if="isloaded === false">
			<loader />
		</template>
		<template v-else>
			<div>{{ createOrderForm }}</div>
		</template>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '@/components/common/loader.vue'
import HeaderTop from '@/components/common/header.vue'
// import DataTable from '@/components/common/data-table.vue'

export default {
	components: {
		Loader,
		HeaderTop
		// DataTable
	},
	data() {
		return {
			title: 'Past Orders',
			isloaded: false
		}
	},
	computed: {
		...mapState('order', ['createOrderForm'])
	},
	async created() {
		this.fetch()
	},
	methods: {
		async fetch() {
			//await this.fetchPastrders()
			//this.table.data = this.getPastOrders()
			this.isloaded = true
		}
	}
}
</script>

<style lang="stylus"></style>
