<template>
  <section id="hello" class="relative flex flex-col w-full h-screen overflow-hidden bg-gradient-to-br from-accent to-accent-light">
    <NuxtLink to="/" class="flex items-center gap-2 px-8 py-4 mt-4">
      <svg
        class="duration-300 rotate-180 shrink-0 dark:fill-dark-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -2 24 24"
        width="16"
        fill="currentColor"
      >
        <path
          d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
        ></path>
      </svg>
      <span class="uppercase hover:underline">Back to home page</span>
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
        <h1 class="mb-8 md:mb-12 leading-tight md:leading-snug text-[4.25rem] md:text-[74px] font-extralight text-black">Error 404!</h1>
        <div class="px-6 py-2 text-white uppercase bg-black">
          <span class="font-medium text-transparent md:text-lg bg-clip-text bg-gradient-to-br from-accent via-accent-light to-white">
            Page not found :/
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      bubbles: [
        {
          id: 1,
          size: 5,
          left: 10,
          delay: 200,
          animation: 1,
        },
        {
          id: 2,
          size: 7,
          left: 70,
          delay: 3500,
          animation: 2,
        },
        {
          id: 3,
          size: 6,
          left: 60,
          delay: 6900,
          animation: 1,
        },

        {
          id: 5,
          size: 5,
          left: 20,
          delay: 9500,
          animation: 2,
        },
        {
          id: 6,
          size: 5,
          left: 70,
          delay: 12500,
          animation: 1,
        },
        {
          id: 7,
          size: 9,
          left: 0,
          delay: 16500,
          animation: 1,
        },
      ],
    };
  },
};
</script>
