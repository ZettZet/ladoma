<template>
  <div class="cart-item">
    <div class="image-box">
      <img class="image" :src=cartEntry.product.image alt=""/>
    </div>
    <div class="about">
      <h2 class="title">{{ cartEntry.product.title }}</h2>
      <h3 class="subtitle">{{ cartEntry.product.category }}</h3>
    </div>
    <div class="counter">
      <stepper :min=0 :max=100 v-model="cartEntry.count" :step=1></stepper>
    </div>
    <div class="prices">
      <div class="amount">{{ cartEntry.product.price }}₽</div>
    </div>
    <div class="is-remove">
      <button class="remove" v-if="cartEntry.count===0"
              @click="removeProduct(cartEntry.product.id)">Remove from cart?</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";
import {CartEntry} from "@/models/product";
import {useCartStore} from "@/store/cartStore";
import Stepper from "@/components/Stepper.vue"

const {cartEntry} = defineProps<{ cartEntry: CartEntry }>()

const {removeProduct} = useCartStore();

</script>
<style lang="sass" scoped>
.cart-item
  padding: 3px
  display: flex
  justify-content: flex-start
  align-items: center


.cart-item:first-child
  border-radius: 25px 25px 0 0

.cart-item:last-child
  border-radius: 0 0 25px 25px

.image-box
  width: 15%
  text-align: center

.image
  height: 120px

.about
  height: 100%
  width: 44%

.title
  font-weight: bold
  margin-bottom: 15px

.subtitle
  line-height: 10px
  font-size: 18px
  font-weight: 600

.counter
  width: 10%
  display: flex
  justify-content: center
  align-items: center

.prices
  height: 100%
  text-align: right
  width: 15%

.amount
  font-size: 26px
  font-weight: 800

.is-remove
  width: 16%
  display: flex
  justify-content: center

.remove
  font-size: 14px
  font-weight: 600
  cursor: pointer
  outline: none
  border: none
  background-color: inherit
  color: $dangerous

</style>