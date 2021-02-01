<template>
  <v-card class="order-card" outlined>
    <v-card-title class="order-title">
      Customer Details
    </v-card-title>
    <div class="customer-details-form-section-container">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.firstname"
            :rules="nameRules"
            label="First name"
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.lastname"
            :rules="nameRules"
            label="Last name"
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.number"
            :rules="numberRules"
            :counter="11"
            label="Phone Number"
            required
          />
        </v-col>
        <v-subheader>Address</v-subheader>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.address.line1"
            :rules="numberRules"
            label="Address 1"
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.address.line2"
            :rules="numberRules"
            label="Address 2"
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.address.city"
            :rules="numberRules"
            label="City"
            required
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="customerDetails.address.postcode"
            :rules="numberRules"
            label="Postcode"
            required
          />
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
	export default {
		props: {
			customerDetails: {
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

<style lang="stylus" scoped>
	.customer-details-form-section-container
		padding 1rem
</style>
