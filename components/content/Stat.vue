<script setup lang="ts">
type Props = {
  figure: string
  legend: string
  horizontal?: boolean
  figureWidth?: string
}

withDefaults(defineProps<Props>(), {
  horizontal: false,
  figureWidth: ''
})
</script>

<template>
  <div class="flex text-white" :class="{ 'flex-col': !horizontal, 'flex-row': horizontal, 'items-center': horizontal, 'text-center': !horizontal }">
    <dt class="order-last text-lg font-medium flex-1">
      {{ legend }}
    </dt>

    <dd class="text-4xl font-extrabold md:text-5xl font-display" :style="`width: ${figureWidth};`">{{ figure }}</dd>
  </div>
</template>
