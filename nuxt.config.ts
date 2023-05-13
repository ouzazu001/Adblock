// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      autoprefixer: {},
      tailwindcss: {}
    },
  },
  components: {
    dirs: [
      '~/components',
    ]
  },
  modules: [
    // '@nuxt/ui',
    // https://tailwindcss.nuxt.dev
    '@nuxtjs/tailwindcss',
  ],
  app: {
    baseURL: '/Adblock/'
  },
  css: [
    // '~/assets/icomoon/style.css',
    '~/assets/css/main.css',
  ],
})
