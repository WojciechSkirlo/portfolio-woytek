<template>
  <div class="relative h-screen">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const { $getAge } = useNuxtApp();

useHead({
  htmlAttrs: {
    lang: "pl-PL",
  },
  title: "Wojciech Skirło | Portfolio",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content: `Tak właściwie to nazywam się Skirło Wojciech. Mam ${$getAge("2001-10-20")}.
        Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa.
                      Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej.
                      Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.`,
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" }],
  noscript: [{ children: "Javascript is required" }],
});
</script>
