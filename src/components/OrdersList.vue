<template>
  <div>
    <div
      v-for="(item, i) in data"
      :key="i"
      exact
      class="cards-container"
    >
      <v-card
        class="order-card"
        elevation="5"
        outlined
      >
        <v-card-title
          class="order-title"
        >
          Order Number: {{ item.id }}
        </v-card-title>

        <v-card-text
          class="order-text"
        >
          Assigned to: 
          <span v-if="'employee' in item && item.employee !== null">
            {{ item.employee.first_name }}
          </span>
          <span v-else>
            None
          </span>
        </v-card-text>

        <v-card-subtitle
          class="order-subtitle"
        >
          <span>
            Created at: {{ item.created_at }}
          </span>
          <br>
          <span>
            Modified at: {{ item.modified_at }}
          </span>
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
    computed: {
    },
    created () {
      //console.log(this.$props.table)
    },
    methods: {

    }
  }
</script>

<style lang="stylus" scoped>
  .cards-container
    padding 0 0.5rem
</style>
