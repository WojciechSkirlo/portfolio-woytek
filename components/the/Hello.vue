<template>
  <section
    id="hello"
    class="relative flex flex-col w-full h-screen min-h-[576px] max-h-[690px] md:max-h-[1080px] overflow-hidden bg-gradient-to-br from-accent to-accent-light"
  >
    <div
      v-for="item in bubbles"
      :key="item.id"
      class="absolute bottom-0 rounded-full bg-gradient-to-br from-accent/70 via-accent-light/70 to-white backdrop-blur-md"
      :class="item.animation == 1 ? ['animate-bubble'] : ['animate-bubble-second', 'translate-y-full']"
      :style="`width: ${item.size}rem; height: ${item.size}rem; left: ${item.left}%; animation-delay: ${item.delay}ms`"
    ></div>
    <div class="container relative z-10 flex flex-col items-center flex-1 px-5 mx-auto">
      <div class="w-full h-16"></div>
      <div class="flex flex-col items-center justify-center flex-1 p-8 text-center">
        <h1 class="mb-8 md:mb-16 leading-tight md:leading-snug text-[4.25rem] md:text-[74px] font-extralight text-black">
          Cześć! Jestem
          <span class="uppercase">Woytek</span>
        </h1>
        <BaseBadge>Frontend Developer</BaseBadge>
      </div>
      <div class="flex items-center h-16">
        <div class="flex flex-col items-center animate-bounce">
          <span class="uppercase font-extralight mb-1.5">scroll me</span>
          <BaseIcon name="ArrowNarrowDownIcon" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const bubbles: any = [
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
];
</script>
