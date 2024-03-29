// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    imports: {
        dirs: ["ts"]
    },
    modules: ["@kevinmarrec/nuxt-pwa", "@nuxtjs/i18n"],
    i18n: {
        locales: ["en", "pl"],
        defaultLocale: "en",
        strategy: "prefix"
    },
    pwa: {
        manifest: {
            id: "2",
            name: "Woytek | Portfolio",
            short_name: "Woytek",
            description: `Tak właściwie to nazywam się Skirło Wojciech.
      Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa.
                    Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej.
                   `,
            lang: "pl-PL",
            icons: [
                {
                    purpose: "maskable",
                    src: "android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    purpose: "maskable",
                    src: "android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                }
            ]
        },
        icon: {
            fileName: "maskable_icon_x192",
            sizes: [192, 512],
            source: "./public/android-chrome-192x192.png"
        }
    },
    css: ["~/assets/css/style.css"]
});
