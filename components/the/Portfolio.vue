<script setup lang="ts">
const works: Array<Work> = [
    {
        id: 1,
        name: "spotify-clone",
        img: "thumbnail-spotify-clone.png",
        github: "https://github.com/spotify-copy-app/spotify-clone",
        live: "https://spotify-clone-application.netlify.app/",
        techStack: ["html", "css", "tailwindcss", "ts", "react"]
    },
    {
        id: 2,
        name: "check messages",
        img: "thumbnail-check-messages.png",
        live: "https://resplendent-sunflower-035ed8.netlify.app/",
        github: "https://github.com/WojciechSkirlo/check-messages",
        techStack: ["html", "css", "tailwindcss", "ts", "vue"]
    },
    {
        id: 3,
        name: "iThread",
        img: "thumbnail-ithread.png",
        live: "https://expo.dev//accounts/woytek01/projects/ithread/builds/5ef57a15-6371-42f3-a01a-9d6504675d0b",
        github: "https://github.com/WojciechSkirlo/ithread",
        techStack: ["react native", "expo", "ts", "node.js", "express", "socket.io", "mongodb"]
    },
    {
        id: 4,
        name: "projectq12",
        img: "thumbnail-projectq12.png",
        github: "https://github.com/WojciechSkirlo/projectq12",
        techStack: ["html", "css", "js", "jquery", "php"]
    },
    {
        id: 5,
        name: "gmw-spaw",
        img: "thumbnail-gmwspaw.png",
        live: "https://gmw-spaw.com/",
        techStack: ["html", "css", "sass", "js", "jquery", "php"]
    },
    {
        id: 6,
        name: "Caesar cipher",
        img: "thumbnail-cc.png",
        live: "https://voluble-snickerdoodle-37831a.netlify.app/",
        github: "https://github.com/WojciechSkirlo/caesar-cipher",
        techStack: ["html", "css", "tailwindcss", "ts", "vue", "pwa"]
    },
    {
        id: 7,
        name: "emulator intel 8086",
        img: "thumbnail-portfolio.png",
        live: "https://merry-granita-33b312.netlify.app/",
        github: "https://github.com/WojciechSkirlo/architecture-of-computer-systems-project",
        techStack: ["html", "css", "tailwindcss", "js", "vue"]
    },
    {
        id: 8,
        name: "warszawa45",
        img: "thumbnail-warszawa45.png",
        live: "https://wojciechskirlo.github.io/warszawa45/",
        github: "https://github.com/WojciechSkirlo/warszawa45",
        techStack: ["html", "css", "sass", "js", "jquery"]
    },
];
</script>

<template>
    <section id="portfolio" class="w-full transition-colors duration-300 bg-white dark:bg-dark-neutral">
        <BaseWrapper>
            <BaseHeading center class="mb-8">{{ $t("portfolio.header") }}</BaseHeading>
            <p
                class="px-12 mb-5 text-sm text-center transition-colors duration-300 font-extralight dark:text-dark-grey"
            >
                <span class="hidden lg:inline">{{ $t("portfolio.infoDesktop") }}</span>
                <span class="lg:hidden">{{ $t("portfolio.infoMobile") }}</span>
                <BaseIcon name="CursorClickIcon" class="inline-block ml-2" />
            </p>
            <div class="flex flex-wrap justify-center w-full gap-5">
                <PortfolioItem v-for="item in works" :key="item.id" :item="item" />
            </div>
        </BaseWrapper>
    </section>
</template>
