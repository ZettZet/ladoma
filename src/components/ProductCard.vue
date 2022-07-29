<template>
  <div class="card">
    <img class="image" alt="placeholder" :src=imageSource>
    <div class="container">
      <h4><strong>{{ name }}</strong></h4>
      <p>{{ description }}</p>
      <button @click="onClick">{{ price }}₽</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Product} from "@/models/product";

interface IProduct extends Product {
  id: number
  name: string
  description: string
  price: number
  imageSource: string
}

const {product} = defineProps<{ product: IProduct }>()
const {imageSource, name, description, price, id} = product
const emit = defineEmits<{ (e: 'add', id: number): void }>()
const onClick = () => {
  emit('add', id)
}
</script>

<style lang="sass" scoped>
.card
  max-height: 300px
  max-width: 300px

.image
  width: 100%
  height: 100px

.container
  padding: 2px 16px

</style>