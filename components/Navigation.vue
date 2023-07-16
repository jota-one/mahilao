<template>
  <div class="flex h-screen flex-col border-e">
    <div class="px-4 py-6 w-full flex-1">
    <NuxtLink
        class="grid h-10 w-32 place-content-center"
        href="/"
    >
      <img src="/images/logo.png" alt="Logo Mahilao" />
    </NuxtLink>

      <ul class="mt-6 space-y-1 text-right">
        <template v-for="(item, index) in i18nNavigation">
          <ActionableMenuItem v-if="item.children" :item="item" :page="page" />
          <li v-else>
            <NuxtLink
                :href="item._path"
                class="uppercase block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:text-gray-700"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>

    <div class="sticky inset-x-2 bottom-28 flex justify-center">
        <a
            href="#"
            class=" mx-4 inline-block rounded-full bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Faites un don
        </a>
    </div>

    <div class="sticky inset-x-0 bottom-0 p-8">
        <div>
          <p class="text-xs">
            <strong class="block font-medium">copyright @ Mahilao</strong>

            <span> blabla </span>
          </p>
        </div>
    </div>
  </div>
<!--  <pre>{{ i18nNavigation }}</pre>-->
</template>

<script setup lang="ts">
import ActionableMenuItem from "~/components/ActionableMenuItem.vue";

interface Props {
  opened: boolean
}

defineProps<Props>()
defineEmits(['close'])

const { navigation, page } = useContent()

const i18nNavigation = computed(() =>
  navigation.value
    .find((item: any) => item._path === '/fr')
    .children.map((subItem: any) => {
      subItem.active = page.value?._path.includes(subItem._path)
    if (subItem.children) {
      subItem.children = subItem.children.map((subSubItem: any) => {
        subSubItem.active = page.value?._path.includes(subSubItem._path)
        return subSubItem
      })
    }
      return subItem
    }),
)
</script>

<style lang="postcss" scoped>
</style>
