// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: "blogkadai",
    apiKey: "HgmmZhMj70FwElDSU8HrqrVzFDupMpiAQWUh",
    //serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    //apiKey: process.env.MICROCMS_API_KEY,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
