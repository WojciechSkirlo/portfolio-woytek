<template>
  <section id="portfolio" class="w-full transition-colors duration-300 bg-white dark:bg-dark-neutral">
    <MainWrapper>
      <HeadingDefault class="mb-8" :center="true">Portfolio</HeadingDefault>
      <p class="hidden px-12 mb-5 text-sm text-center transition-colors duration-300 lg:block font-extralight dark:text-dark-grey">
        Najedź na pracę, aby poznać więcej szczegółów
        <CursorClickIcon class="inline-block w-4 h-4 ml-2" />
      </p>
      <p class="px-12 mb-5 text-sm text-center transition-colors duration-300 lg:hidden font-extralight dark:text-dark-grey">
        Kliknij na pracę, aby poznać więcej szczegółów
        <CursorClickIcon class="inline-block w-4 h-4 ml-2" />
      </p>
      <div class="flex flex-wrap justify-center w-full gap-5">
        <MyWorks v-for="item in works" :key="item.id" :item="item" />
      </div>
    </MainWrapper>
  </section>
</template>
<script>
import { CursorClickIcon } from "@heroicons/vue/solid/index.js";
export default {
  components: { CursorClickIcon },
  data() {
    return {
      works: [
        {
          id: 1,
          name: "projectq12",
          img: "thumbnail-projectq12",
          github: "https://github.com/WojciechSkirlo/projectq12",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "css",
            },
            {
              id: 3,
              name: "js",
            },
            {
              id: 4,
              name: "jquery",
            },
            {
              id: 5,
              name: "php",
            },
          ],
        },
        {
          id: 2,
          name: "gmw-spaw",
          img: "thumbnail-gmwspaw",
          live: "https://gmw-spaw.com/",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "sass",
            },
            {
              id: 3,
              name: "js",
            },
            {
              id: 4,
              name: "jquery",
            },
            {
              id: 5,
              name: "php",
            },
            {
              id: 6,
              name: "git",
            },
          ],
        },
        {
          id: 3,
          name: "bąbelkowe spa",
          img: "thumbnail-babelkowespa",
          live: "http://babelkowespa.pl/",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "sass",
            },
            {
              id: 3,
              name: "js",
            },
            {
              id: 4,
              name: "jquery",
            },
            {
              id: 5,
              name: "git",
            },
          ],
        },
        {
          id: 4,
          name: "emulator intel 8086",
          img: "thumbnail-portfolio",
          live: "https://merry-granita-33b312.netlify.app/",
          github: "https://github.com/WojciechSkirlo/architecture-of-computer-systems-project",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "css",
            },
            {
              id: 3,
              name: "vue",
            },
            {
              id: 4,
              name: "tailwind 3",
            },
            {
              id: 5,
              name: "js",
            },
            {
              id: 6,
              name: "vue 3",
            },
            {
              id: 7,
              name: "git",
            },
          ],
        },
        {
          id: 5,
          name: "najmcar",
          img: "thumbnail-najmcar",
          live: "http://najmcar.pl/",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "sass",
            },
            {
              id: 3,
              name: "jquery",
            },
            {
              id: 4,
              name: "git",
            },
          ],
        },
        {
          id: 6,
          name: "portfolio",
          img: "thumbnail-portfolio",
          live: "https://www.woytek.com.pl/",
          github: "https://github.com/WojciechSkirlo/portfolio-woytek",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "css",
            },
            {
              id: 3,
              name: "tailwind 3",
            },
            {
              id: 4,
              name: "js",
            },
            {
              id: 4,
              name: "nuxt 3",
            },
            {
              id: 5,
              name: "vue 3",
            },
            {
              id: 6,
              name: "git",
            },
          ],
        },
        {
          id: 7,
          name: "warszawa45",
          img: "thumbnail-warszawa45",
          live: "https://wojciechskirlo.github.io/warszawa45/",
          github: "https://github.com/WojciechSkirlo/warszawa45",
          techStack: [
            {
              id: 1,
              name: "html",
            },
            {
              id: 2,
              name: "sass",
            },
            {
              id: 3,
              name: "js",
            },
            {
              id: 4,
              name: "jquery",
            },
            {
              id: 5,
              name: "git",
            },
          ],
        },
      ],
    };
  },
};
</script>
