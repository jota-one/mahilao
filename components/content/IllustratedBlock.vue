<script setup lang="ts">
type Props = {
  img: string
  imgAlt?: string
  imgClass?: string
  rtl?: boolean
}
withDefaults(defineProps<Props>(), {
  imgAlt: '',
  rtl: false,
  imgClass: 'w-96'
})

const slots = useSlots()
</script>

<template>
  <div class="flex" :class="{ 'flex-row-reverse': rtl }">
    <div class="flex-1">
      <h2 v-if="slots.title" class="text-5xl font-display mb-8"><slot name="title" /></h2>
      <slot />
    </div>
    <div class="overflow-hidden rounded-full" :class="[{ 'mr-16': rtl, 'ml-16': !rtl }, imgClass]">
      <img :src="img" :alt="imgAlt" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
