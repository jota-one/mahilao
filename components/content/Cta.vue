<script setup lang="ts">
type Props = {
  href: string
  target?: '_blank' | '_self'
  color?: string
  textColor?: string
}
withDefaults(defineProps<Props>(), {
  target: '_self',
  color: 'stone',
  textColor: 'white'
})
</script>

<template>
  <a
      :target="target"
      :href="href"
      :class="[`bg-${color}-500`, `hover:bg-${color}-700`, `focus:ring-${color}-50`, `text-${textColor}`]"
      class="inline-block rounded-md px-6 py-1 text-center font-display text-xl transition focus:outline-none focus:ring"
  >
    <slot />
  </a>
</template>

