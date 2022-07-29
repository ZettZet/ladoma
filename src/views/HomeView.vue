<template>
  <div class="card-container">
    <product-card v-for="product in productStore.products"
                  :product="product"
                  @add="onAdd"
    />
  </div>
</template>

<script lang="ts" setup>
import {useProductStore} from "@/store/productStore";
import ProductCard from "@/components/ProductCard.vue"
import {useCartStore} from "@/store/cartStore";

const productStore = useProductStore()
const {addProduct} = useCartStore()

const onAdd = (id: number) => {
  addProduct(id)
}

</script>

<style lang="sass" scoped>
.card-container
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around
</style>