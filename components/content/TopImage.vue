<script setup lang="ts">
type Props = {
  src: string
}
defineProps<Props>()
</script>

<template>
  <div class="flex items-end justify-end">
    <div class="rounded-b-full overflow-hidden h-[350px]">
      <img :src="src" alt="" />
    </div>
  </div>
</template>
