<template>
  <div>
    <div v-for="(item, i) in data" :key="i" exact class="cards-container">
      <v-card class="order-card" elevation="5" outlined>
        <v-card-title class="order-title"> Order Number: {{ item.id }} </v-card-title>

        <v-card-text class="order-text">
          <div>
            Assigned to:
            <span v-if="item.assignedTo">
              {{ item.assignedTo.firstname }} {{ item.assignedTo.lastname }}
            </span>
            <span v-else> None </span>
          </div>
          <div>
            Status:
            <span>
              {{ item.status }}
            </span>
          </div>
        </v-card-text>

        <v-card-subtitle class="order-subtitle">
          <span> Created at: {{ item.created }} </span>
          <br />
          <span> Modified at: {{ item.modified }} </span>
        </v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
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

<style lang="stylus" scoped>
.order-card
		margin 1rem 0

.cards-container
	padding 0 0.5rem
</style>
