<template>
  <div v-for="cartEntry in cart">
    <div>{{ cartEntry.product.name }}</div>
    <input type="number" v-model="cartEntry.count" min="0"/>
    <div>{{ cartEntry.product.price }}₽</div>
    <button v-if="cartEntry.count===0" @click="removeProduct(cartEntry.product.id)">Удалить товар из корзины?</button>
  </div>
  <strong>{{ getTotalPrice }}₽</strong>
</template>

<script lang="ts" setup>
import {useCartStore} from "@/store/cartStore"
import {storeToRefs} from "pinia";

const cartStore = useCartStore()
const {getTotalPrice, cart} = storeToRefs(cartStore)
const {removeProduct} = cartStore

</script>

<style lang="sass" scoped>
</style>