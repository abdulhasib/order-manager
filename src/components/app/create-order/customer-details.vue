<script setup>
import CustomerDetails from '@/components/common/CustomerDetails.vue'

import { ref } from 'vue'
import { useOrderStore } from '@/stores/order'

import ObjectHelper from '@/utils/ObjectHelper'

const minimised = ref(true)

let {
  createOrderForm: { customerDetails }
} = useOrderStore()
const updateInput = (fieldName, value) =>
  (customerDetails = ObjectHelper.updateUsingDotNotation(customerDetails, fieldName, value))
</script>

<template>
  <v-card color="#dbd9d9" class="order-card" outlined>
    <div class="order-title mt-2 mx-1">
      <v-btn
        class="d-flex justify-space-between position-right text-body-2"
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
            variant="solo-filled"
            required
            @input="updateInput('firstname', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Last Name"
            variant="solo-filled"
            required
            @input="updateInput('lastname', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            :counter="11"
            label="Phone Number"
            variant="solo-filled"
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
            variant="solo-filled"
            required
            @input="updateInput('address.line1', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Address 2"
            variant="solo-filled"
            required
            @input="updateInput('address.line2', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="City"
            variant="solo-filled"
            required
            @input="updateInput('address.city', $event.target.value)"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Postcode"
            variant="solo-filled"
            required
            @input="updateInput('address.postcode', $event.target.value)"
          />
        </v-col>
      </v-row>
    </div>

    <div class="mx-2 my-4">
      <CustomerDetails :minimised="minimised" :customerDetails="customerDetails" />
    </div>
  </v-card>
</template>

<style lang="stylus" scoped>
.customer-details-form-section-container
	padding 1rem
</style>
