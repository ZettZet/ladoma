<template>
  <div class="card">
    <div class="container">
      <div class="container-content">
        <img class="image" alt="placeholder" :src=image>
        <h4 class="title">{{ title }}</h4>
        <p class="description">{{ description }}</p>
      </div>
      <button class="price" @click="onClick">{{ isAddedShow ? 'Added' : `${price}₽` }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Product} from "@/models/product";
import {ref} from "vue";

const isAddedShow = ref<boolean>(false)

interface IProduct extends Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

const {product} = defineProps<{ product: IProduct }>()
const {image, title, description, price, id} = product
const emit = defineEmits<{ (e: 'add', id: number): void }>()
const onClick = () => {
  isAddedShow.value = true
  emit('add', id)
  setTimeout(() => {
    isAddedShow.value = false
  }, 1000)
}
</script>

<style lang="sass" scoped>
.card
  border-radius: 10px
  max-width: 300px
  background: $secondary
  margin: 5px
  padding: 5px
  flex-shrink: 3

.container
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: flex-end
  height: 100%

.container-content
  *
    margin-bottom: 5px

.image
  float: left
  width: 100%
  height: auto
  object-fit: cover
  border-radius: 10px

.title
  font-size: large
  font-weight: bold
  margin-bottom: 10px

.description
  margin-bottom: 10px

.price
  font-size: large
  font-weight: bold
  padding: 5px 10px
  border-radius: 10px
  border: none
  cursor: pointer

  background-color: $primary
  color: $secondary

  transition: background-color, color 0.2s ease-in-out

.price:hover
  background-color: $sub-secondary
  color: $black


</style>