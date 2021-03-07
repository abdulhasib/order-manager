<template>
	<div>
		<v-data-table :headers="table.headers" :items="table.data" />
	</div>
</template>

<script>
export default {
	props: {
		table: {
			type: Object,
			required: true
		}
	},
	computed: {},
	created() {
		//console.log(this.$props.table)
	},
	methods: {}
}
</script>

<style lang="stylus" scoped></style>
