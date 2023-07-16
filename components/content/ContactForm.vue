<script setup lang="ts">
export interface EmailForm {
  name: string
  email: string
  message: string
}
const form = ref<EmailForm>({
  name: '',
  email: '',
  message: '',
})
const mailSent = ref(false)
const sending = ref(false)
const error = ref(false)

const formValid = computed(
    () =>
        form.value.name !== '' &&
        form.value.email !== '' &&
        form.value.message !== '',
)

const sendEmail = async () => {
  sending.value = true
  error.value = false
  try {
    const { data } = await useFetch('/.netlify/functions/sendmail', {
      method: 'post',
      body: form.value,
    })

    let result = data.value
    if (typeof result === 'string') {
      result = JSON.parse(result)
    }
    if (result.success) {
      mailSent.value = true
      form.value = {
        name: '',
        email: '',
        message: '',
      }
    } else {
      error.value = true
    }
  } catch (e) {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="relative">
    <form v-if="!mailSent" @submit.prevent="sendEmail">
      <div v-if="error" role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4 mb-10">
        <div class="flex items-center gap-2 text-red-800">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
          >
            <path
                fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
            />
          </svg>

          <strong class="block font-medium"> Une erreur s'est produite </strong>
        </div>

        <p class="mt-2 text-sm text-red-700">
          Veuillez réessayer d'envoyer votre email. Si l'erreur persiste, veuillez recharger la page.
        </p>
      </div>
      <div class="container px-5 py-24 mx-auto bg-gray-200">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600">Nom et prénom</label>
                <input type="text" id="name" v-model="form.name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">E-mail</label>
                <input type="email" id="email" v-model="form.email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" v-model="form.message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button :disabled="!formValid || sending" class="flex mx-auto items-center text-white bg-stone-500 border-0 py-2 px-8 focus:outline-none hover:bg-stone-600 rounded text-lg">
                <span class="i-material-symbols-send mr-2" />
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div v-else role="alert" class="rounded border-s-4 border-green-500 bg-green-50 p-4">
      <div class="flex items-center gap-2 text-green-800">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <strong class="block font-medium"> E-mail envoyé! </strong>
      </div>

      <p class="mt-2 text-sm text-green-700">
        Merci pour votre message.
      </p>
    </div>
  </section>
</template>
