<script setup lang="ts">
type Props = {
  color: string
  titleTag: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'black',
  titleTag: 'h2'
})
</script>

<template>
  <div>
    <component :is="titleTag" class="text-2xl mb-10" :class="[`text-${color}`]"><slot name="title" /></component>
    <slot name="content" />
  </div>
</template>

<style scoped lang="postcss">

</style>
