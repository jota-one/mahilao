<script setup lang="ts">
type Props = {
  img: string
}
defineProps<Props>()
</script>

<template>
  <div class="md:rounded-b-[300px] md:h-[650px] relative sm:overflow-hidden">
    <img :src="img" alt="" />
    <div class="sm:absolute sm:rounded-full sm:w-[400px] sm:h-[400px] bg-white text-red-700 sm:top-52 sm:left-44 flex items-center justify-center content-center p-10 text-[2rem] font-display">
      <slot />
    </div>
  </div>
</template>
