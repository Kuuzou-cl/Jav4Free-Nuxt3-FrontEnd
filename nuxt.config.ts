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
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  css: ['~/assets/scss/main.scss','~/assets/scss/main-mobile.scss'],
  modules: [
    '@nuxtjs/device'
  ]
})
