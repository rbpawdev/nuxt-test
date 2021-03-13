export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    //'@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name:'testapp',
      short_name:'testapp nuxt',
      lang: 'en',
      start_url:'./',
      display:'standalone',
      icons:[]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://cdn.snipcart.com/.*',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
        ]
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
