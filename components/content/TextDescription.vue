<script setup lang="ts">
type Props = {
  color?: string
  titleTag?: string
  sep?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  titleTag: 'h3',
  sep: false
})
</script>

<template>
  <Row :cols="3">
    <div class="col-span-1 pr-24">
      <component :is="titleTag" class="text-3xl" :class="[`text-${color}`]"><slot name="title" /></component>
    </div>
    <div class="col-span-2 text-md font-sans">
      <slot />
      <hr class="w-7 border-2 mt-8" :class="[`border-${color}`]" />
    </div>
  </Row>
</template>

<style scoped lang="postcss">

</style>
