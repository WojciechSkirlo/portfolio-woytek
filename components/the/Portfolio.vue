<template>
  <section id="portfolio" class="w-full transition-colors duration-300 bg-white dark:bg-dark-neutral">
    <BaseWrapper>
      <BaseHeading center class="mb-8">Portfolio</BaseHeading>
      <p class="px-12 mb-5 text-sm text-center transition-colors duration-300 font-extralight dark:text-dark-grey">
        <span class="hidden lg:inline">Najedź na pracę, aby poznać więcej szczegółów</span>
        <span class="lg:hidden">Naciśnij na pracę, aby poznać więcej szczegółów</span>
        <BaseIcon name="CursorClickIcon" class="inline-block ml-2" />
      </p>
      <div class="flex flex-wrap justify-center w-full gap-5">
        <PortfolioItem v-for="item in works" :key="item.id" :item="item" />
      </div>
    </BaseWrapper>
  </section>
</template>
<script setup lang="ts">
const works: Array<Work> = [
  {
    id: 1,
    name: "projectq12",
    img: "thumbnail-projectq12",
    github: "https://github.com/WojciechSkirlo/projectq12",
    techStack: ["html", "css", "js", "jquery", "php"],
  },
  {
    id: 2,
    name: "gmw-spaw",
    img: "thumbnail-gmwspaw",
    live: "https://gmw-spaw.com/",
    techStack: ["html", "css", "sass", "js", "jquery", "php"],
  },
  {
    id: 3,
    name: "Caesar cipher",
    img: "thumbnail-cc",
    live: "https://voluble-snickerdoodle-37831a.netlify.app/",
    github: "https://github.com/WojciechSkirlo/caesar-cipher",
    techStack: ["html", "css", "tailwindcss", "js", "ts", "vue", "pwa"],
  },
  {
    id: 4,
    name: "emulator intel 8086",
    img: "thumbnail-portfolio",
    live: "https://merry-granita-33b312.netlify.app/",
    github: "https://github.com/WojciechSkirlo/architecture-of-computer-systems-project",
    techStack: ["html", "css", "tailwindcss", "js", "vue"],
  },
  {
    id: 5,
    name: "najmcar",
    img: "thumbnail-najmcar",
    live: "http://najmcar.pl/",
    techStack: ["html", "css", "sass", "jquery"],
  },
  {
    id: 6,
    name: "check messages",
    img: "thumbnail-check-messages",
    live: "https://resplendent-sunflower-035ed8.netlify.app/",
    github: "https://github.com/WojciechSkirlo/check-messages",
    techStack: ["html", "css", "tailwindcss", "js", "ts", "vue"],
  },
  {
    id: 7,
    name: "warszawa45",
    img: "thumbnail-warszawa45",
    live: "https://wojciechskirlo.github.io/warszawa45/",
    github: "https://github.com/WojciechSkirlo/warszawa45",
    techStack: ["html", "css", "sass", "js", "jquery"],
  },
  {
    id: 8,
    name: "rick&morty",
    img: "thumbnail-rick-and-morty",
    live: "https://golden-bavarois-55b6c8.netlify.app/",
    github: "https://github.com/WojciechSkirlo/rick-morty",
    techStack: ["html", "css", "tailwindcss", "js", "vue"],
  },
];
</script>
