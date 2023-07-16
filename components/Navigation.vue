<template>
  <div class="flex h-screen flex-col border-e">
    <div class="px-4 py-6 w-full flex-1 text-right">
      <NuxtLink
          class="grid h-20 place-content-end"
          href="/"
      >
        <img class="w-32" src="/images/logo.png" alt="Logo Mahilao" />
      </NuxtLink>

      <ul class="mt-6 space-y-1 text-right list-none">
        <template v-for="(item, index) in i18nNavigation">
          <ActionableMenuItem v-if="item.children" :item="item" :page="page" />
          <li v-else>
            <NuxtLink
                :href="item._path"
                class="uppercase block px-4 pt-2 text-lg font-medium text-gray-500 hover:text-gray-700"
            >
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>

    <div class="flex justify-end mr-8 mb-8">
      <Cta href="/fr/contact">Faire un don</Cta>
    </div>

    <div class="p-8">
        <div class="w-full text-right">
          <p class="text-xs">
            <strong class="block font-medium">copyright @ Mahilao</strong>
            <span> design by Geetha Laune </span>
            <a href="https://jota.one" target="_blank" class="flex justify-end -mr-2">
              <img src="/images/jota.svg" />
            </a>
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
const i18nNavigation = ref([])

watch(navigation, nav => {
  if (!nav) {
    return
  }
  i18nNavigation.value = nav
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
      })
}, { immediate: true })
</script>

<style lang="postcss" scoped>
</style>
