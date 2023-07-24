<template>
  <article
    class="sm:grid sm:grid-cols-12 max-w-screen-2xl mx-auto bg-white"
  >
    <button
        class="sm:hidden absolute z-10"
        data-drawer-target="menu"
        data-drawer-show="menu"
    >
      <span class="i-material-symbols-menu text-5xl text-white"></span>
    </button>
    <header id="menu" class="fixed sm:sticky w-2/3 sm:w-auto top-0 left-0 sm:left-auto col-span-2 z-40 h-screen transition-transform -translate-x-full sm:transition-none sm:translate-x-0" :class="{ 'bg-neutral-200': !isHomepage, 'bg-white': isHomepage }">
      <button class="mt-3 ml-3 sm:hidden" data-drawer-hide="menu">
        <span class="i-material-symbols-close text-3xl text-black absolute"></span>
      </button>
      <Navigation />
    </header>
    <main ref="wrapperEl" class="sm:col-span-10 sm:col-start-3 pb-12" :class="{ 'bg-neutral-200': isHomepage }">
      <div class="pb-12">
        <slot />
      </div>
      <div class="flex justify-end pr-8">
        <button v-if="page?.backToTop" @click="scrollTop">
          <span class="i-material-symbols-arrow-upward text-4xl text-neutral"></span>
        </button>
      </div>
    </main>
  </article>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'
const { page } = useContent()
useHead({
  bodyAttrs: {
    class: 'bg-neutral-900'
  },
})

const wrapperEl = ref<HTMLElement>()

const isHomepage = computed(() => page.value._id === 'content:index.md')

const scrollTop = () => {
  if (!wrapperEl.value) {
    return
  }

  const scrollToOptions: ScrollToOptions = {
    top: 0,
    left: 0,
    behavior: 'smooth',
  }

  window.scroll(scrollToOptions)
  wrapperEl.value.scroll(scrollToOptions)
}

onMounted(initFlowbite)
</script>
