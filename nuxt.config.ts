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
      google_analytics_id: 'GTM-55BGRFG',
      appEnv: 'production',
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
