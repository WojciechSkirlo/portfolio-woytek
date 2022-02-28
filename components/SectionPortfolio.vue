<template>
  <section class="w-full bg-white">
    <MainWrapper>
      <HeadingDefault class="mb-8" :center="true">Portfolio</HeadingDefault>
      <p class="px-12 mb-5 text-sm text-center font-extralight">
        Kliknij na pracę, aby poznać więcej szczegółów
        <CursorClickIcon class="inline-block w-4 h-4 ml-2" />
      </p>
      <div class="flex flex-col w-full gap-5">
        <MyWorks v-for="item in works" :key="item.id" :item="item" />
      </div>
    </MainWrapper>
  </section>
</template>
<script>
import { CursorClickIcon } from "@heroicons/vue/solid";
export default {
  components: { CursorClickIcon },
  data() {
    return {
      works: [
        {
          id: 1,
          name: "projectq12",
          img: "thumbnail-projectq12.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
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
          img: "thumbnail-gmwspaw.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
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
          img: "thumbnail-babelkowespa.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
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
          name: "marc-verso",
          img: "thumbnail-marcverso.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
          techStack: [
            {
              id: 1,
              name: "wordpress",
            },
          ],
        },
        {
          id: 5,
          name: "najmcar",
          img: "thumbnail-najmcar.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
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
          img: "thumbnail-woytek.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
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
          img: "thumbnail-warszawa45.png",
          live: "http://projectq12.woytek.com.pl/home.php",
          github: "https://github.com/",
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
