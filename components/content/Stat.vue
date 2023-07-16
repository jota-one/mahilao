<script setup lang="ts">
type Props = {
  figure: string
  legend: string
}
defineProps<Props>()
</script>

<template>
  <div class="flex flex-col px-4 py-8 text-center font-display text-white">
    <dt class="order-last text-lg font-medium">
      {{ legend }}
    </dt>

    <dd class="text-4xl font-extrabold md:text-5xl">{{ figure }}</dd>
  </div>
</template>
