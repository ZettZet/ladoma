<template>
  <div class="cart">
    <cart-header/>
    <div class="cart__container">
      <cart-item v-for="cartEntry in cart" :cartEntry="cartEntry"/>
      <cart-checkout/>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {useCartStore} from "@/store/cartStore"
import {storeToRefs} from "pinia";
import CartHeader from "./CartHeader.vue"
import CartCheckout from "./CartCheckout.vue"
import CartItem from "@/components/CartItem.vue";

const cartStore = useCartStore()
const {cart} = storeToRefs(cartStore)
const {removeProduct} = cartStore

</script>

<style lang="sass" scoped>
.cart
  display: flex
  flex-direction: column
  align-items: flex-end
  width: 100%

.cart__container
  width: 80%
  margin: 0 auto


</style>