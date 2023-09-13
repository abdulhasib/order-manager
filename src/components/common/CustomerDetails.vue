<script setup>
import { defineProps } from 'vue'

defineProps({
  customerDetails: {
    type: Object,
    required: true
  },
  minimised: {
    type: Boolean,
    required: false,
    default: true
  }
})
</script>

<template>
  <v-card
    class="customer-details-form-section-summary-container pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary"
    v-show="minimised"
  >
    <v-container class="pl-6 pr-6">
      <div class="mx-2 my-4 text-caption">
        <div class="ml-4 mb-4">
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
    </v-container>
  </v-card>
</template>
