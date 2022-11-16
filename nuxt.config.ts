// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ["ts"],
  },

  modules: ["@kevinmarrec/nuxt-pwa"],

  css: ["~/assets/css/style.css"],
});
