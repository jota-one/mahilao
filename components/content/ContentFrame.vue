<script setup lang="ts">
type Props = {
  id: string
  rtl?: boolean,
}
withDefaults(defineProps<Props>(), {
  rtl: false
})

const slots = useSlots()
</script>

<template>
  <div class="pl-8 pr-4 py-16 sm:pl-24 sm:pr-0" :class="{ 'mr-8': !rtl, 'rounded-r-[100px]': !rtl, 'border-l-0': !rtl, 'ml-8': rtl, 'rounded-l-[100px]': rtl, 'border-r-0': rtl }">
    <h2 v-if="slots.title" class="font-display text-5xl mb-10" :id="id"><slot name="title" /></h2>
    <slot />
  </div>
</template>

