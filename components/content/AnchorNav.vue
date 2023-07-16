<script setup lang="ts">
type Props = {
  anchorTag: string
}

interface NavItem {
  anchor: string
  title: string
}

const props = defineProps<Props>()

const container = ref(null)
const nav = ref<NavItem[]>([])

const getItems = (): HTMLElement[] | undefined => {
  if (!container.value) {
    return
  }

  const containerEl: HTMLElement = container.value
  return Array.from(containerEl.querySelectorAll(props.anchorTag))
}

onMounted(async () => {
  const childrenEl = getItems()

  if (!childrenEl) {
    return
  }

  const children = []

  for (let i = 0; i < childrenEl.length; i++) {
    const child = childrenEl[i] as HTMLElement
    children.push({ title: child.innerText, anchor: child.id })
  }

  await nextTick()
  nav.value = children
})
</script>

<template>
  <div>
  <div class="grid grid-cols-3">
    <div class="flex flex-col justify-end px-10">
      <nav v-if="nav.length" class="flex flex-col py-2">
        <a
            v-for="item in nav"
            :key="item.anchor"
            :href="`#${item.anchor}`"
            class="flex items-start"
        >
          {{ item.title }}
        </a>
      </nav>
    </div>
    <div class="flex items-end justify-end col-span-2">
      <div class="rounded-l-full overflow-hidden w-71/12">
        <img src="/images/hero-women.jpg" alt="" />
      </div>
    </div>
  </div>
  <div ref="container" class="content">
    <slot />
  </div>
  </div>
</template>

<style scoped lang="postcss">

</style>