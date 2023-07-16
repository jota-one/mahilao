<script setup lang="ts">
type Props = {
  cols: number
}
defineProps<Props>()
</script>

<template>
  <div class="grid" :class="[`grid-cols-${cols}`]">
    <slot />
  </div>
</template>

<style scoped lang="postcss">

</style>
