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
  <div class="py-16 pl-24 pr-16" :class="{ 'mr-10': !rtl, 'rounded-r-[100px]': !rtl, 'border-l-0': !rtl, 'ml-10': rtl, 'rounded-l-[100px]': rtl, 'border-r-0': rtl }">
    <h2 v-if="slots.title" class="font-display text-5xl mb-10" :id="id"><slot name="title" /></h2>
    <slot />
  </div>
</template>

