// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'stylesheet', href: '/fonts/Verveine.css' }],
      script: [
        {
          'defer': true,
          'data-domain': 'mahilao.org',
          'src': 'https://plausible.io/js/script.js',
        },
      ],
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true
  }
})
