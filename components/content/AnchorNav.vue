<script setup lang="ts">
type Props = {
  anchorTag: string
  leftImageSrc?: string
  rightImageSrc?: string
}

interface NavItem {
  anchor: string
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  leftImageSrc: '',
  rightImageSrc: ''
})

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
      <div class="flex flex-col justify-center px-10">
        <nav v-if="nav.length" class="flex flex-col py-2">
          <a
              v-for="item in nav"
              :key="item.anchor"
              :href="`#${item.anchor}`"
              class="flex items-start font-display"
          >
            {{ item.title }}
          </a>
        </nav>
      </div>
      <TopImage v-if="leftImageSrc" :src="leftImageSrc" class="col-span-1 ml-6 mr-10" />
      <TopImage v-if="rightImageSrc" :src="rightImageSrc" class="col-span-1 mr-16" />
    </div>
    <div ref="container" class="content">
      <slot />
    </div>
  </div>
</template>
