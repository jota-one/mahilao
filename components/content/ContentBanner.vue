<script setup lang="ts">
type Props = {
  id?: string
}
withDefaults(defineProps<Props>(), {
  id: ''
})
const slots = useSlots()
</script>

<template>
  <div class="py-8">
    <h2 v-if="slots.title" class="font-display text-5xl mb-10" :id="id"><slot name="title" /></h2>
    <slot />
  </div>
</template>
