<script setup lang="ts">
type Props = {
  cols: number
}
defineProps<Props>()
</script>

<template>
  <div class="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:gap-x-16" :class="[`sm:grid-cols-${cols}`]">
    <slot />
  </div>
</template>

<style scoped lang="postcss">

</style>
