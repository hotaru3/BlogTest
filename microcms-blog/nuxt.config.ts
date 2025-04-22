// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from "@tailwindcss/typography";
export default defineNuxtConfig({
  modules: ["nuxt-microcms-module", "@nuxtjs/tailwindcss"],
  microCMS: {
    serviceDomain: "blogkadai",
    apiKey: "HgmmZhMj70FwElDSU8HrqrVzFDupMpiAQWUh",
    //serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    //apiKey: process.env.MICROCMS_API_KEY,
  },
    tailwindcss: {
      config: {
      content: [],
      plugins: [tailwindTypography],
    },
  },
});
