// https://nuxt.com/docs/api/configuration/nuxt-config
//const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = process.env;
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    //serviceDomain: MICROCMS_SERVICE_DOMAIN,
    //apiKey: MICROCMS_API_KEY,
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
    tailwindcss: {
      config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});
