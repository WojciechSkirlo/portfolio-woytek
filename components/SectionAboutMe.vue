<template>
  <section class="w-full bg-white">
    <MainWrapper>
      <HeadingDefault class="mb-8" :left="true">O mnie</HeadingDefault>
      <div class="flex flex-col">
        <h1 class="text-5xl font-medium leading-tight text-left mb-7">{{ aboutMe.title }}</h1>
        <p v-for="item in aboutMe.description" class="mb-6 font-extralight text-stone-600 last:mb-0" :key="item.id">{{ item.paragraph }}</p>
      </div>
      <div class="relative flex items-center self-center justify-around w-full mt-12">
        <div class="h-full w-0.5 bg-accent absolute top-0 left-1/2 -translate-x-1/2"></div>
        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div v-for="(item, index) in timeLine" :key="item.id" class="relative flex flex-col w-full mb-24 last:mb-12 first:mt-12">
            <div class="absolute top-0 flex w-1/2 -translate-y-1/2" :class="index % 2 == 0 ? 'right-0' : 'left-0'">
              <div
                class="absolute top-1/2 w-2.5 h-2.5 bg-black -translate-y-1/2"
                :class="index % 2 == 0 ? ['left-0', '-translate-x-1/2'] : ['right-0', 'translate-x-1/2']"
              ></div>
              <p class="w-full font-medium" :class="index % 2 == 0 ? ['ml-4', 'text-left'] : ['mr-4', 'text-right']">{{ item.description }}</p>
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
        title: "Trochę mojej historii",
        description: [
          {
            id: 1,
            paragraph: `Tak właściwie to nazywam się Skirło Wojciech. Mam 19 lat. Pochodzę z niewielkiej miejscowości położonej 50 km od Krakowa. 
                      Od najmłodszych lat interesuję się komputerem a w 2021 roku zostałem absolwentem kierunku Technik Informatyk. 
                      Z każdym dniem wzbogacam się o nowe umiejętności aw przyszłości chcę pracować jako`,
          },
          {
            id: 2,
            paragraph: `W wolnym czasie zajmuję się tworzeniem muzyki jak i jej wykonywaniem. Lubię spotykać się ze
                      znajomymi, grać na instrumentach takich jak gitara czy pianino. Ogólnie
                      to nie wyobrażam sobie świata bez muzyki. „`,
          },
        ],
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