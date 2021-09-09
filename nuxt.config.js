export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/global',
    'reset-css/reset.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
  ],

  styleResources: {
    scss: ['~assets/styles/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  webfontloader: {
    google: {
      families: ['Rubik:400,700']
    },
  },
  i18n: {
    lazy: true,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English'},
      { code: 'es', iso: 'es-MX', file: 'es.js', name: 'Español'}
    ],
    defaultLocale: 'en',
    langDir: '~locales/',
  },
  bootstrapVue: {
    icons: true
  },
  axios: {
    baseURL: 'https://api.nuxtjs.dev'
  }
}
