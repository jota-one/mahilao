<script setup lang="ts">
type Props = {
  id: string
}
defineProps<Props>()
</script>

<template>
  <div class="border-women-100 border-l-0 border-2 rounded-r-[100px] p-10 mr-5">
    <h2 class="font-display text-5xl uppercase mb-10" :id="id"><slot name="title" /></h2>
    <slot />
  </div>
</template>

<style scoped lang="postcss">

</style>
