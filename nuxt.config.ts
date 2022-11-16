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

  pwa: {
    manifest: {
      name: "Wojciech Skirło | Portfolio",
      short_name: "Wojciech Skirło",
      description: `Tak właściwie to nazywam się Skirło Wojciech.
      Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa.
                    Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej.
                   `,
      lang: "pl-PL",
      icons: [
        {
          purpose: "maskable",
          src: "icon.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      id: "1",
    },
  },

  css: ["~/assets/css/style.css"],
});
