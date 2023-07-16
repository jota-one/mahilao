<template>
  <article
    class="grid grid-cols-12 grid-flow-col max-w-screen-2xl mx-auto bg-white"
  >
    <header :class="['col-span-2', `bg-${page.color}-100`]">
      <button
        class="hamburger"
        @click="navigationOpened = true"
      />
      <Navigation
        class="navigation"
        :opened="navigationOpened"
        @close="navigationOpened = false"
      />
    </header>
    <main class="col-span-10" :class="{ 'bg-gray-200': isHomepage }">
      <div :class="['body', { transparent: !page?.bodyBg }]">
        <slot />
      </div>
      <div class="footer">
        <button v-if="page?.backToTop" class="back-to-top" @click="scrollTop">
          Back to top
        </button>
      </div>
    </main>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent()
useHead({
  bodyAttrs: {
    class: 'bg-gray-700'
  },
})

const wrapperEl = ref<HTMLElement>()
const navigationOpened = ref(false)

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
</script>
