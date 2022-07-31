<template>
  <div class="header">
    <h1 class="heading">Shopping Cart</h1>
    <button class="action" @click="clear">Clear the cart</button>
  </div>
</template>

<script lang="ts" setup>
import {useCartStore} from "@/store/cartStore";

const {clear} = useCartStore()
</script>

<style lang="sass" scoped>
.header
  height: 15%
  display: flex
  justify-content: space-between
  align-items: center
  width: 60%
  margin: 10px auto 10px

.heading
  font-weight: 700
  color: #2F3841


.action
  font-size: 20px
  font-weight: 600
  color: $dangerous
  cursor: pointer
  background-color: inherit
  border: none
  outline: none
  text-decoration: underline

</style>