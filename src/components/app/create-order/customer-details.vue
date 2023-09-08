<script setup>
import { ref } from 'vue'
//import { ref, reactive, computed } from 'vue'
import { useOrderStore } from '@/stores/order'

import ObjectHelper from '@/utils/ObjectHelper'

//const props = defineProps(['customerDetails'])
//defineProps({
//	customerDetails: {
//			type: Object,
//			required: true
//		}
//})

const minimised = ref(true)
//const bar = reactive({ name: "hi" });

let {
  createOrderForm: { customerDetails }
} = useOrderStore()
const updateInput = (fieldName, value) =>
  (customerDetails = ObjectHelper.updateUsingDotNotation(customerDetails, fieldName, value))
</script>

<template>
  <v-card color="#dbd9d9" class="order-card" outlined>
    <div class="order-title mt-2">
      <v-btn
        class="d-flex justify-space-between position-right"
        depressed
        text
        width="100%"
        @click="minimised = !minimised"
      >
        <span>Customer Details</span>
        <v-icon :icon="minimised ? 'mdi-chevron-down' : 'mdi-chevron-up'" />
      </v-btn>
    </div>
    <v-divider />

    <div v-show="!minimised" class="customer-details-form-section-container">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            label="First Name"
            required
            @input="updateInput('firstname', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Last Name"
            required
            @input="updateInput('lastname', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :counter="11"
            label="Phone Number"
            required
            @input="updateInput('number', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="12"
          ><v-list-subheader class="ml-2 align-end">Address</v-list-subheader></v-col
        >

        <v-col cols="12" md="4">
          <v-text-field
            label="Address 1"
            required
            @input="updateInput('address.line1', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Address 2"
            required
            @input="updateInput('address.line2', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="City"
            required
            @input="updateInput('address.city', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Postcode"
            required
            @input="updateInput('address.postcode', $event.target.value)"
          />
        </v-col>
      </v-row>
    </div>

    <div
      v-show="minimised"
      class="products-details-form-section-summary-container mx-2 my-4 text-caption"
    >
      <div class="body-2 ml-4 mb-4">
        <span> First Name: {{ customerDetails.firstname }} </span><br />
        <span> Last Name: {{ customerDetails.lastname }} </span><br />
        <span> Number: {{ customerDetails.number }} </span><br />
        <span>
          Address: {{ customerDetails.address.line1 }}
          {{ customerDetails.address.line2 }}
          {{ customerDetails.address.city }}
          {{ customerDetails.address.postcode }}
        </span>
      </div>
    </div>
  </v-card>
</template>

<script>
//import { mapActions } from 'vuex'

export default {
  //props: {
  //	customerDetails: {
  //		type: Object,
  //		required: true
  //	}
  //},
  //data() {
  //	return {
  //		minimised: true
  //	}
  //},
  computed: {},
  created() {
    //console.log(this.$props.table)
  },
  methods: {
    // ...mapGetters('order', ['getCreateOrderForm']),
    //...mapActions('order', ['updateForm']),
    //updateInput(fieldName, value) {
    //	const updatedForm = { section: 'customerDetails', fieldName, value }
    //	this.updateForm(updatedForm)
    //}
  }
}
</script>

<style lang="stylus" scoped>
.customer-details-form-section-container
	padding 1rem
</style>
