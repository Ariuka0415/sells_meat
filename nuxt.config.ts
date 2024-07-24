// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          "/C:/Users/Swift 3/Downloads/Component 11.svg",
          "file:///C:/Users/Swift%203/Documents/sellsMeat_ecommerce/frontend/assets/Vector%20(6).svg",
          "file:///C:/Users/Swift%203/Downloads/Group.svg",
          "file:///C:/Users/Swift%203/Documents/sellsMeat_ecommerce/frontend/assets/Vector%20(5).svg",
        ],
      },
    },
  },
});
