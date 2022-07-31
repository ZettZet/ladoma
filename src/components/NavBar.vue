<template>
  <nav class="navigation">
    <router-link class="nav-link brand" to="/">LADOMA</router-link>
    <router-link class="nav-link cart" to="/cart">cart</router-link>
  </nav>
</template>

<script lang="ts" setup>
</script>

<style lang="sass" scoped>
.navigation
  height: 56px
  background-color: $black
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  padding: 10px

.nav-link
  text-decoration: none
  color: $secondary

.nav-link:hover
  color: $primary

.brand
  font-size: xx-large
  font-weight: bolder

.cart
  font-size: large
  font-weight: bold
  text-transform: capitalize
</style>