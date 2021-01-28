<template>
  <div>
    <v-data-table
      :headers="table.headers"
      :items="table.data"
    />
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      //required: true
    },
    tableData: {
      type: Array,
      //required: true
    },
    table: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
  },
  created () {
    console.log(this.$props.table)
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>

</style>
