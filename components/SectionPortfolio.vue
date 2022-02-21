<template>
  <section class="w-full bg-white">
    <MainWrapper>
      <HeadingDefault class="mb-8" :center="true">Portfolio</HeadingDefault>
      <p class="px-8 mb-5 text-sm text-center font-extralight">
        Kliknij na pracę, aby poznać więcej szczegółów
        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
            clip-rule="evenodd"
          />
        </svg>
      </p>
      <div class="flex flex-col w-full gap-5">
        <MyWorks v-for="item in works" :key="item.id" :item="item" />
      </div>
    </MainWrapper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      works: [
        {
          id: 1,
          name: "projectq12",
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
          img: "thumbnail-babelkowespa.png",
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
      ],
    };
  },
};
</script>
