<script setup lang="ts">
const { page } = useContent()
const { data } = await useAsyncData('pl', () =>
    queryContent({
      where: [
        {
          _id: `content:${page.value.downloads}`,
        },
      ],
      without: ['_'],
    }).findOne(),
)
</script>

<template>
  <ul class="list-none p-0 mt-0">
    <li v-for="group in data.body">
      <details class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
            class="flex cursor-pointer items-center px-4 py-6"
            :class="[group.color]"
        >
          <span class="shrink-0 transition duration-300 -rotate-90 group-open:rotate-0">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              />
            </svg>
          </span>
          <span class="text-sm font-medium"> {{ group.label.fr }} </span>
        </summary>

        <ul class="mt-2 space-y-1 px-4 list-none">
          <li v-for="file in group.files">
            <a
                :href="file.filename"
                target="_blank"
                class="block px-4 py-2 text-sm font-medium text-gray-500 flex items-center"
            >
              <span class="i-material-symbols-download text-xl mr-1"></span>
              {{ file.label.fr }}
            </a>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<style scoped lang="postcss">

</style>
