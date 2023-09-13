<script setup>
import { defineProps } from 'vue'

defineProps({
  productsDetails: {
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
    class="products-details-form-section-summary-container pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary"
    v-show="minimised"
  >
    <v-container class="pl-6 pr-6">
      <div class="mx-2 my-4 text-caption">
        <div v-for="(product, i) in productsDetails.products" :key="i">
          <div v-show="productsDetails.products[i].selected.length > 0" class="ml-4 mb-4">
            <v-divider v-show="i !== 0" />
            <div v-show="product.length !== 0" class="my-4">
              <div class="d-flex justify-space-between mb-1">
                <span class="body-2"> Product {{ i + 1 }} </span>
                <span class="body-2 font-weight-light mr-2">
                  £{{ productsDetails.products[i].price }}
                </span>
              </div>

              <div class="d-flex flex-wrap">
                <div class="d-flex flex-wrap" style="width: 100%">
                  <div
                    v-for="(selectedProduct, j) in product.selected"
                    :key="j"
                    class="products-details-form-section-summary caption"
                  >
                    <span>{{ selectedProduct.name }}</span>
                  </div>
                </div>
              </div>
            </div>
            <v-divider />
          </div>
        </div>
        <div v-show="productsDetails.totalCost !== 0">
          <div class="d-flex flex-row-reverse body-2 mr-2 mt-4">
            <span> Products Total: £{{ productsDetails.totalCost }} </span>
          </div>
        </div>

        <div v-show="productsDetails.products[0].selected.length === 0">
          <span class="body-2 ml-2">Select products.</span>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<style lang="stylus" scoped></style>
