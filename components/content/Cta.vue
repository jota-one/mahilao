<script setup lang="ts">
type Props = {
  href: string
  target?: '_blank' | '_self'
  color?: 'women' | 'farming' | 'stone'
  textColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  target: '_self',
  color: 'stone',
  textColor: 'white'
})

const classes = computed(() => {
  if (props.color === 'women') {
    return 'bg-women-500 hover:bg-transparent border-women-500 border-2 hover:text-women-500 focus:ring-women-50 text-white'
  } else if (props.color === 'farming') {
    return 'bg-farming-500 hover:bg-transparent border-farming-500 border-2 hover:text-farming-500 focus:ring-farming-50 text-white'
  } else if (props.color === 'stone') {
    return 'bg-stone-500 hover:bg-transparent border-stone-500 border-2 hover:text-stone-500 focus:ring-stone-50 text-white'
  }
})
</script>

<template>
  <a
      :target="target"
      :href="href"
      :class="classes"
      class="inline-block rounded-md px-6 py-1 text-center font-display text-xl transition focus:outline-none focus:ring"
  >
    <slot />
  </a>
</template>

