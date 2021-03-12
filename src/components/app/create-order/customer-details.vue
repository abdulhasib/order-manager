<template>
	<v-card class="order-card" outlined>
		<v-card-title class="order-title my-2">
			<v-btn
				class="d-flex justify-space-between position-right"
				depressed
				text
				width="100%"
				@click="minimised = !minimised"
			>
				<span>Customer Details</span>
				<v-icon>{{ minimised ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
			</v-btn>
		</v-card-title>
		<v-divider />

		<div v-show="!minimised" class="customer-details-form-section-container">
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.firstname"
						label="First name"
						required
						@input="updateInput('firstname', $event)"
					/>
				</v-col>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.lastname"
						label="Last name"
						required
						@input="updateInput('lastname', $event)"
					/>
				</v-col>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.number"
						:counter="11"
						label="Phone Number"
						required
						@input="updateInput('number', $event)"
					/>
				</v-col>
				<v-subheader>Address</v-subheader>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.address.line1"
						label="Address 1"
						required
						@input="updateInput('address.line1', $event)"
					/>
				</v-col>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.address.line2"
						label="Address 2"
						required
						@input="updateInput('address.line2', $event)"
					/>
				</v-col>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.address.city"
						label="City"
						required
						@input="updateInput('address.city', $event)"
					/>
				</v-col>
				<v-col cols="12" md="4">
					<v-text-field
						v-model="customerDetails.address.postcode"
						label="Postcode"
						required
						@input="updateInput('address.postcode', $event)"
					/>
				</v-col>
			</v-row>
		</div>

		<div
			v-show="minimised"
			class="products-details-form-section-summary-container mx-2 my-4"
		>
			<div class="ml-4 mb-4">
				<span> First Name: {{ customerDetails.firstname }} </span><br>
				<span> Last Name: {{ customerDetails.lastname }} </span><br>
				<span> Number: {{ customerDetails.number }} </span><br>
				<span> Address: {{ customerDetails.address.line }}
				{{ customerDetails.address.line2 }} {{ customerDetails.address.city }}
				{{ customerDetails.address.postcode }} </span>
			</div>
		</div>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	props: {
		customerDetails: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			minimised: true
		}
	},
	computed: {},
	created() {
		//console.log(this.$props.table)
	},
	methods: {
		// ...mapGetters('order', ['getCreateOrderForm']),
		...mapActions('order', ['updateForm']),
		updateInput(fieldName, value) {
			const updatedForm = { section: 'customerDetails', fieldName, value }
			this.updateForm(updatedForm)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.customer-details-form-section-container
		padding 1rem

	.position-right
		position absolute
		right 0
</style>
