import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
    if (useRuntimeConfig().public.appEnv !== 'production') return
    nuxtApp.vueApp.use(createGtm({
        id: useRuntimeConfig().public.google_analytics_id,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: true,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
})