// https://nuxt.com/docs/api/configuration/nuxt-config
//const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = process.env;
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],

  microCMS: {
    //serviceDomain: MICROCMS_SERVICE_DOMAIN,
    //apiKey: MICROCMS_API_KEY,
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  routeRules: {
    "/": { ssr: true, prerender: true },
    "/page/[id]": { ssr: false, prerender: true },
    "/[id]": { ssr: true, prerender: true },
  },
  tailwindcss: {
    config: {
    content: [],
    plugins: [tailwindTypography],
  },
},

  compatibilityDate: "2025-04-23",
});