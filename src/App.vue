<template>
  <nav-bar/>
  <router-view/>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

html
  font-family: sans-serif

body
  background-color: white
</style>
