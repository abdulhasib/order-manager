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
</style>
