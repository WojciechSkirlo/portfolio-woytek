<template>
  <section id="about-me" class="w-full transition-colors duration-300 bg-white dark:bg-dark-neutral">
    <MainWrapper class="items-center gap-10 lg:gap-14 md:flex-row">
      <div class="relative flex flex-col flex-1">
        <div
          class="absolute right-0 w-24 h-24 rounded-full  -top-2 animation-move bg-gradient-to-br from-accent/70 via-accent-light/70 to-white backdrop-blur-md"
        ></div>
        <HeadingDefault class="mb-8" :left="true">{{ aboutMe.header }}</HeadingDefault>
        <div class="flex flex-col">
          <div class="relative flex mb-7">
            <h1 class="pr-8 text-5xl font-medium leading-tight text-left transition-colors duration-300 dark:text-dark-white">
              {{ aboutMe.title }}
            </h1>
          </div>
          <p
            v-for="item in aboutMe.description"
            class="mb-6 transition-colors duration-300 font-extralight text-stone-600 dark:text-dark-grey last:mb-0"
            :key="item.id"
            v-html="item.paragraph"
          ></p>
          <blockquote class="px-4 py-1.5 font-medium text-right text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-light">
            <q>
              {{ aboutMe.quote }}
            </q>
            <span> - {{ aboutMe.authorOfQuote }}</span>
          </blockquote>
        </div>
      </div>
      <div class="relative flex items-center self-center justify-around flex-1 w-full md:w-auto">
        <div class="h-full w-0.5 bg-accent absolute top-0 left-1/2 -translate-x-1/2"></div>
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div v-for="(item, index) in timeLine" :key="item.id" class="relative flex flex-col w-full mb-20 last:mb-12 first:mt-12">
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
            paragraph: `Tak właściwie to nazywam się <b>Skirło Wojciech</b>. Mam 20 lat. Pochodzę z niewielkiej miejscowości położonej 60 km od Krakowa.
                      Od najmłodszych lat interesuję się informatyką a w 2021 roku rozpocząłem naukę w Wyższej Szkole Ekonomii i Informatyki w Krakowie na kierunku informatyki stosowanej.
                      Z każdym dniem wzbogacam się o nowe umiejętności, dzięki czemu potrafię coraz więcej.`,
          },
          {
            id: 2,
            paragraph: `Aktualnie pracuje jako <b>Frontend Developer</b>. W wolnym czasie zajmuję się tworzeniem muzyki jak i jej wykonywaniem. Lubię spotykać się ze
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
          description: "2017 wrz - Rozpoczęcie przygody z Informatyką w Zespole szkół technicznych i branżowych w Brzesku",
        },
        {
          id: 1,
          description: "2020 - Pierwszy komercyjny projekt",
        },
        {
          id: 2,
          description: "2021 maj - Ukończenie technikum z wyróżnieniem",
        },
        {
          id: 3,
          description: "2021 lip - Rozpoczęcie pierwszej pracy jako Frontend developer w firmie Maal",
        },
        {
          id: 4,
          description: "2021 paź - Rozpoczęcie nauki w Wyższej Szkole Ekonomii i Informatyki w Krakowie",
        },
      ],
    };
  },
};
</script>
<style>
.animation-move {
  animation: animation-move 9s infinite;
}
@keyframes animation-move {
  50% {
    transform: translateY(-20px);
  }
}
</style>