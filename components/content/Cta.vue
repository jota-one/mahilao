<script setup lang="ts">
type Props = {
  href: string
  target?: '_blank' | '_self'
  color?: 'women' | 'farming' | 'neutral'
  textColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  target: '_self',
  color: 'neutral',
  textColor: 'white'
})

const classes = computed(() => {
  if (props.color === 'women') {
    return 'bg-women-200 hover:bg-transparent border-women-200 border-2 hover:text-women focus:ring-women-50 text-white'
  } else if (props.color === 'farming') {
    return 'bg-farming-200 hover:bg-transparent border-farming-200 border-2 hover:text-farming focus:ring-farming-50 text-white'
  } else if (props.color === 'neutral') {
    return 'bg-neutral hover:bg-transparent border-neutral border-2 hover:text-neutral focus:ring-neutral-50 text-white'
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

