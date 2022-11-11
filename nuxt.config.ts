// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "pl-PL",
      },
      title: "Woytek | Portfolio",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Tak właściwie to nazywam się Skirło Wojciech. Mam 21 lat. Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa. Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej. Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.",
        },
      ],
      noscript: [{ children: "Javascript is required" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" }],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // imports: {
  //   dirs: ["@heroicons/vue/solid/index.js"],
  // },

  css: ["~/assets/css/style.css"],
});
