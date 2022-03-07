<template>
  <section id="about-me" class="w-full transition-colors duration-300 bg-white dark:bg-dark-neutral">
    <MainWrapper>
      <HeadingDefault class="mb-8" :left="true">{{ aboutMe.header }}</HeadingDefault>
      <div class="flex flex-col">
        <h1 class="text-5xl font-medium leading-tight text-left transition-colors duration-300 mb-7 dark:text-dark-white">{{ aboutMe.title }}</h1>
        <p
          v-for="item in aboutMe.description"
          class="mb-6 transition-colors duration-300 font-extralight text-stone-600 dark:text-dark-grey last:mb-0"
          :key="item.id"
        >
          {{ item.paragraph }}
        </p>
        <blockquote class="pt-4 pb-2 pl-4 font-medium text-right text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-light">
          <q>
            {{ aboutMe.quote }}
          </q>
          <span> - {{ aboutMe.authorOfQuote }}</span>
        </blockquote>
      </div>
      <div class="relative flex items-center self-center justify-around w-full mt-12">
        <div class="h-full w-0.5 bg-accent absolute top-0 left-1/2 -translate-x-1/2"></div>
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div v-for="(item, index) in timeLine" :key="item.id" class="relative flex flex-col w-full mb-24 last:mb-12 first:mt-12">
            <div class="absolute top-0 flex w-1/2 -translate-y-1/2" :class="index % 2 == 0 ? 'right-0' : 'left-0'">
              <div
                class="absolute top-1/2 w-2.5 h-2.5 bg-black dark:bg-dark-grey -translate-y-1/2"
                :class="index % 2 == 0 ? ['left-0', '-translate-x-1/2'] : ['right-0', 'translate-x-1/2']"
              ></div>
              <p
                class="w-full font-medium transition-colors duration-300 dark:text-dark-grey"
                :class="index % 2 == 0 ? ['ml-4', 'text-left'] : ['mr-4', 'text-right']"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      aboutMe: {
        header: "o mnie",
        title: "Trochę mojej historii",
        description: [
          {
            id: 1,
            paragraph: `Tak właściwie to nazywam się Skirło Wojciech. Mam 20 lat. Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa.
                      Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej.
                      Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.`,
          },
          {
            id: 2,
            paragraph: `Aktualnie pracuje jako Frontend Developer. W wolnym czasie zajmuję się tworzeniem muzyki jak i jej wykonywaniem. Lubię spotykać się ze
                      znajomymi, grać na instrumentach takich jak gitara czy pianino. Ogólnie
                      to nie wyobrażam sobie świata bez muzyki.`,
          },
        ],
        quote: "Music is the wine that fills the cup of silence",
        authorOfQuote: "Robert Fripp",
      },
      timeLine: [
        {
          id: 1,
          date: "2016",
          description: "2016 - Początek przygody z kodowaniem stron",
        },
        {
          id: 2,
          date: "2016",
          description: "2017 wrz - Rozpoczęcie nauki jako Technik Informatyk",
        },
        {
          id: 3,
          date: "2016",
          description: "2020 - Pierwszy komercyjny projekt",
        },
        {
          id: 4,
          date: "2016",
          description: "2021 mar - Zdobycie certyfikatu EE.09",
        },
        {
          id: 5,
          date: "2016",
          description: "2021 maj - Ukończnie technikum z wyróżnieniem",
        },
      ],
    };
  },
};
</script>