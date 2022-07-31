<template>
  <hr>
  <div class="checkout">
    <div class="total">
      <div>
        <div class="subtotal">Sub-Total</div>
        <div class="items">{{ cart.cart.length }} items</div>
      </div>
      <div class="total-amount">{{ cart.getTotalPrice.toFixed(2) }}₽</div>
    </div>
    <button class="checkout__button">Checkout</button>
  </div>
</template>

<script lang="ts" setup>
import {useCartStore} from "@/store/cartStore";

const cart = useCartStore()
</script>

<style lang="sass" scoped>

hr
  width: 66%
  float: right
  margin-right: 5%

.checkout
  float: right
  margin-right: 5%
  width: 28%
  display: flex
  flex-direction: column

.total
  width: 100%
  display: flex
  justify-content: space-between

.subtotal
  font-size: 22px
  font-weight: 700
  color: #202020

.items
  font-size: 16px
  font-weight: 500
  color: dimgray
  line-height: 10px

.total-amount
  font-size: 36px
  font-weight: 900
  color: #202020

.checkout__button
  height: 40px
  border: none
  border-radius: 25px
  background-color: $primary
  color: $secondary
  cursor: pointer
  font-size: 16px
  font-weight: bold

.checkout__button:hover
  background-color: $sub-primary
</style>