<script setup lang="ts">
defineProps({
    error: Object
});

const bubbles = getBubbles();

useHead({
    htmlAttrs: {
        lang: "pl-PL"
    },
    title: "Nie znaleziono strony | Wojciech Skirło",
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

<template>
    <section
        id="hello"
        class="relative flex flex-col w-full h-screen overflow-hidden bg-gradient-to-br from-accent to-accent-light"
    >
        <NuxtLink to="/" class="flex items-center gap-2 px-8 py-4 mt-2">
            <svg
                class="-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="16"
                fill="currentColor"
            >
                <path
                    d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                ></path>
            </svg>
            <span class="uppercase hover:underline">{{ $t("Back to home page") }}</span>
        </NuxtLink>
        <div
            v-for="item in bubbles"
            :key="item.id"
            class="absolute bottom-0 rounded-full bg-gradient-to-br from-accent/70 via-accent-light/70 to-white backdrop-blur-md"
            :class="item.animation == 1 ? ['animate-bubble'] : ['animate-bubble-second', 'translate-y-full']"
            :style="`width: ${item.size}rem; height: ${item.size}rem; left: ${item.left}%; animation-delay: ${item.delay}ms`"
        ></div>
        <div class="container relative z-10 flex flex-col items-center flex-1 px-5 mx-auto">
            <div class="flex flex-col items-center justify-center flex-1 p-8 text-center">
                <h1
                    class="mb-8 md:mb-12 leading-tight md:leading-snug text-[4.25rem] md:text-[74px] font-extralight text-black"
                >
                    {{ $t("Error") }} {{ error?.statusCode }}!
                </h1>
                <BaseBadge>{{ $t("page not found") }}</BaseBadge>
            </div>
        </div>
    </section>
</template>
