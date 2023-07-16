<script setup lang="ts">
type Props = {
  id: string
  color?: string
  background?: string
  rtl?: boolean,
}
withDefaults(defineProps<Props>(), {
  color: 'stone',
  background: 'stone-50',
  rtl: false
})

const slots = useSlots()
</script>

<template>
  <div class="border-2 p-16" :class="[`border-${color}-300`, `bg-${background}`, { 'mr-10': !rtl, 'rounded-r-[100px]': !rtl, 'border-l-0': !rtl, 'ml-10': rtl, 'rounded-l-[100px]': rtl, 'border-r-0': rtl }]">
    <h2 v-if="slots.title" class="font-display text-5xl uppercase mb-10" :id="id"><slot name="title" /></h2>
    <slot />
  </div>
</template>

