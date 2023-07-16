<template>
  <li>
    <details class="group [&_summary::-webkit-details-marker]:hidden w-full" :open="open" @mouseover="open = true" @mouseout="resetOpen">
      <summary
          class="flex cursor-pointer rounded-lg px-4 pt-2 text-gray-500 hover:text-gray-700 justify-end"
      >
        <span class="text-lg font-medium uppercase text-right"> {{ item.title }} </span>
      </summary>

      <ul class="mb-4 space-y-1 px-4 mt-0">
        <li v-for="({ _path: path, title, active }, index) in item.children" class="flex items-center relative">
          <span v-if="active" class="w-3 h-3 block rounded-full absolute -right-5" :class="[`bg-${page.color}`]">&nbsp;</span>
          <NuxtLink
              :href="path"
              class="block text-sm font-medium text-gray-500 hover:text-gray-700 flex-1"
              :class="{ '-ml-3': active, [`text-${page.color}`]: active }"
          >
            {{ title }}
          </NuxtLink>
        </li>
      </ul>
    </details>
  </li>
</template>

<script setup lang="ts">
type Props = {
  item: any
  page: any
}
const props = defineProps<Props>()
const open = ref(props.item.active)

const resetOpen = () => {
  open.value = props.item.active
}
</script>

<style scoped lang="postcss">

</style>
