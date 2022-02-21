<template>
  <section class="w-full bg-white">
    <MainWrapper>
      <HeadingDefault class="mb-8" :left="true">O mnie</HeadingDefault>
      <div class="flex flex-col">
        <h1 class="text-5xl font-medium leading-tight text-left mb-7">{{ aboutMe.title }}</h1>
        <p v-for="item in aboutMe.description" class="mb-6 font-extralight text-stone-600 last:mb-0" :key="item.id">{{ item.paragraph }}</p>
      </div>
      <div class="relative flex items-center self-center justify-around w-11/12 mt-12 h-96">
        <div class="h-0.5 bg-emerald-200 w-full absolute top-1/2 -translate-y-1/2 left-0"></div>
        <div v-for="(item, index) in timeLine" :key="item.id" class="h-2.5 w-2.5 bg-black relative z-10">
          <div class="w-40 h-4 bg-stone-200" :class="index % 2 == 0 ? ['origin-top-left', '-rotate-90'] : ['origin-bottom-left', 'rotate-90']">
            <span>2020 - Pierwszy komercyjny projekt</span>
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
          description: "",
        },
        {
          id: 2,
          date: "2016",
          description: "",
        },
        {
          id: 3,
          date: "2016",
          description: "",
        },
      ],
    };
  },
};
</script>