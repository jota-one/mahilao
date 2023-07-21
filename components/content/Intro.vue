<script setup lang="ts">
type Props = {
  color?: 'farming' | 'women' | 'neutral'
  titleTag?: string
  ctaHref?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: 'neutral',
  titleTag: 'h2',
  ctaHref: ''
})
</script>

<template>
  <div class="flex flex-col justify-between">
    <component :is="titleTag" class="text-2xl mb-6 sm:mb-10 font-subtitle"><slot name="title" /></component>
    <div class="flex-1"><slot name="content" /></div>
    <Cta v-if="ctaHref" :href="ctaHref" :color="color"><slot name="cta" /></Cta>
  </div>
</template>

