export default defineNuxtConfig({
  devServer: {
    port: 8080
  },
  app: {
    head: {
      title: 'Jav4Free | Japanese Adult Videos for Free | Streaming Service',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/faviconJ4F.ico' }],
      script: [{ src: 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js' }]
    },
  },
  runtimeConfig: {
    public: {
      appEnv: 'production',
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      apiTokenCloudflare: process.env.API_TOKEN_CLOUDFLARE_IMAGES
    }
  },
  css: ['~/assets/scss/main.scss', '~/assets/scss/main-mobile.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: [
    '@nuxtjs/device'
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  }
})
