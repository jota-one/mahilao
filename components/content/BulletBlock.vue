<script setup lang="ts">
type Props = {
  titleClass?: string
  sepClass?: string
}
withDefaults(defineProps<Props>(), {
  titleClass: 'font-subtitle text-xl mb-4',
  sepClass: ''
})
const slots = useSlots()
</script>

<template>
  <div class="mb-4 sm:mb-10 text-md">
    <hr class="w-7 border-2 mb-2" :class="sepClass" />
    <h3 v-if="slots.title" :class="titleClass"><slot name="title" /></h3>
    <slot />
  </div>
</template>

<style scoped lang="postcss">

</style>
