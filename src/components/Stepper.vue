<template>
  <div class="container">
    <button class="decrement button" @click="onClick(-props.step)">-</button>
    <input class="number" type="number" :value="props.modelValue"/>
    <button class="increment button" @click="onClick(props.step)">+</button>
  </div>
</template>

<script lang="ts" setup>

interface IStepperProps {
  min: number
  max: number
  step: number
  modelValue: number
}

interface IStepperEmits {
  (eventName: 'update:modelValue', newValue: number): void
}

const props = defineProps<IStepperProps>()
const emit = defineEmits<IStepperEmits>()

const onClick = (amount: number) => {
  const after = props.modelValue + amount
  if (after > props.max || after < props.min)
    return
  emit('update:modelValue', props.modelValue + amount)
}

</script>

<style lang="sass" scoped>
.container
  display: flex
  flex-direction: row

.decrement
  padding: 15px 5px 15px 25px
  border-radius: 45px 0 0 45px

.increment
  padding: 15px 25px 15px 5px
  border-radius: 0 45px 45px 0

.button
  border: none
  font-size: 20px
  font-weight: bold
  cursor: pointer
  background-color: lightgray

.button:hover
  background-color: gray

.number
  -moz-appearance: textfield
  outline: none
  text-align: center
  font-size: 20px
  font-weight: bold
  border: none
  background-color: lightgray
  width: 30%

.number:hover, .number:focus
  background-color: gray

.number::-webkit-outer-spin-button, .number::-webkit-inner-spin-button
  -webkit-appearance: none
  margin: 0
</style>