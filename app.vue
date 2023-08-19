<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
    htmlAttrs: {
        lang: "pl-PL"
    },
    title: "Wojciech Skirło | Portfolio",
    meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "apple-mobile-web-app-title", content: "Woytek" },
        {
            name: "description",
            content: `Tak właściwie to nazywam się Skirło Wojciech. Mam ${getAge(
                "2001-10-20"
            )}. Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa. Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.`
        },
        { property: "og:title", content: "Wojciech Skirło | Portfolio" },
        {
            property: "og:description",
            content: `Tak właściwie to nazywam się Skirło Wojciech. Mam ${getAge(
                "2001-10-20"
            )}. Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa. Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.`
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "pl_PL" },
        { property: "og:image", content: "https://woytek-portfolio.netlify.app/android-chrome-512x512.png" },
        { property: "og:site_name", content: "Wojciech Skirło | Portfolio" },
        { property: "twitter:card", content: "summary" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "~/assets/favicon.ico" }],
    noscript: [{ children: "Javascript is required" }]
});
</script>
