<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/order'

let {
  createOrderForm: { productsDetails }
} = useOrderStore()

const minimised = ref(true)
const productsList = [
  { name: 'Standard 1', type: 'standard' },
  { name: 'Standard 2', type: 'standard' },
  { name: 'Standard 3', type: 'standard' },
  { name: 'Standard 4', type: 'standard' },
  { name: 'Premium 1', type: 'premium' },
  { name: 'Premium 2', type: 'premium' },
  { name: 'Premium 3', type: 'premium' },
  { name: 'Premium 4', type: 'premium' }
]

const newProduct = () => productsDetails.products.push({ selected: [], price: 0 })

const removeProduct = (productNumber) => {
  productsDetails.totalCost =
    productsDetails.totalCost - productsDetails.products[productNumber].price
  productsDetails.products.splice(productNumber, 1)
}

const calculateProductPrice = (selectedProducts) => {
  let calculatedProducPrice = 0

  const isPremium =
    selectedProducts.length && selectedProducts.some(({ type }) => type === 'premium')
  const fixedPrice = isPremium ? 15 : 13

  // min 3 selected before price change
  if (selectedProducts.length >= 4)
    calculatedProducPrice = fixedPrice + (selectedProducts.length - 3)
  else if (selectedProducts.length > 0) calculatedProducPrice = fixedPrice

  return calculatedProducPrice
}

const updateSelected = (productNumber) => {
  const product = productsDetails.products[productNumber]
  const selectedProducts = product.selected

  // remove product[i] price from total cost before recalculating
  productsDetails.totalCost = productsDetails.totalCost - product.price

  const price = calculateProductPrice(selectedProducts)
  product.price = price

  productsDetails.totalCost += product.price
}
</script>

<template>
  <v-card color="#dbd9d9" class="order-card" outlined>
    <div class="order-title mt-2">
      <v-btn
        class="d-flex justify-space-between text-body-2"
        depressed
        text
        width="100%"
        @click="minimised = !minimised"
      >
        <span>Products</span>
        <v-icon :icon="minimised ? 'mdi-chevron-down' : 'mdi-chevron-up'" />
      </v-btn>
    </div>
    <v-divider />

    <!--find out why v-show selects all checkboxes value of checkboxes were being created on the fly maybe, value is now an existing object-->
    <div v-show="!minimised" class="products-details-form-section-container">
      <v-row>
        <v-col cols="12" sm="12">
          <div>
            <span class="text-caption">
              Standard selections are £13. Premium selections are £15. Up to 3 options. <br />
              If selection exceeds 3, a charge of £1 will be added per extra selection.
            </span>
          </div>
          <v-card-text class="pt-4">
            <div>
              <v-expand-transition v-for="(product, i) in productsDetails.products" :key="i" appear>
                <v-card class="pl-3 pr-3 mt-2 mb-2 rounded-lg tertiary">
                  <v-container>
                    <div class="card-title-container">
                      <v-card-title class="product-title pl-0 pb-5">
                        Product {{ i + 1 }}
                      </v-card-title>
                      <v-btn
                        v-show="productsDetails.products.length > 1"
                        fab
                        small
                        @click="removeProduct(i)"
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                    </div>
                    <v-row>
                      <v-col class="d-flex justify-space-between" cols="12" sm="12">
                        <div>
                          Standard
                          <div v-for="(item, index1) in productsList" :key="index1">
                            <v-checkbox
                              v-if="item.type === 'standard'"
                              v-model="product.selected"
                              :label="item.name"
                              :value="item"
                              @change="updateSelected(i)"
                              class="product-checkbox"
                            />
                          </div>
                        </div>
                        <div>
                          Premium
                          <div v-for="(item, index2) in productsList" :key="index2">
                            <v-checkbox
                              v-if="item.type === 'premium'"
                              v-model="product.selected"
                              :label="item.name"
                              :value="item"
                              @change="updateSelected(i)"
                              class="product-checkbox"
                            />
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                    <div class="d-flex flex-row-reverse mr-2">
                      <span> Product {{ i + 1 }}: £{{ productsDetails.products[i].price }} </span>
                    </div>
                  </v-container>
                </v-card>
              </v-expand-transition>
              <v-layout flex justify-center wrap>
                <div class="mb-3">
                  <v-btn density="comfortable" fab small @click="newProduct()">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </v-layout>
              <v-divider />
              <div class="d-flex flex-row-reverse font-weight-medium mr-2 mt-4">
                <span> Products Total: £{{ productsDetails.totalCost }} </span>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </div>

    <div
      v-show="minimised"
      class="products-details-form-section-summary-container mx-2 my-4 text-caption"
    >
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
  </v-card>
</template>

<style lang="stylus" scoped>
.card-title-container
	display flex
	align-items center
	justify-content space-between

.products-details-form-section-container
	padding 1rem

.products-details-form-section-summary
	display flex
	justify-content center
	min-width 100px

:deep(.product-checkbox .v-label)
	font-size 12px

:deep(.v-selection-control__input)
	justify-content flex-start

:deep(.v-selection-control__wrapper)
	margin-right -0.5rem

:deep(.v-card-text)
	padding 0
</style>
