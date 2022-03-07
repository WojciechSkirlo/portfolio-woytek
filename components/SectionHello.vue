<template>
  <section
    id="hello"
    class="
      relative
      flex flex-col
      w-full
      h-screen
      min-h-[576px]
      max-h-[690px]
      md:max-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-accent
      to-accent-light
    "
  >
    <div
      v-for="item in bubbles"
      :key="item.id"
      class="absolute bottom-0 rounded-full bg-gradient-to-br from-accent/70 via-accent-light/70 to-white backdrop-blur-md"
      :class="item.animation == 1 ? ['animation-bubble'] : ['animation-bubble-2', 'translate-y-full']"
      :style="`width: ${item.size}rem; height: ${item.size}rem; left: ${item.left}%; animation-delay: ${item.delay}ms`"
    ></div>
    <div class="container relative z-10 flex flex-col items-center flex-1 px-5 mx-auto">
      <div class="w-full h-16"></div>
      <div class="flex flex-col items-center justify-center flex-1 p-8 text-center">
        <h1 class="mb-8 text-[4.25rem] leading-tight font-extralight text-black">Cześć! Jestem <span class="uppercase">Woytek</span></h1>
        <div class="px-6 py-2 text-white uppercase bg-black">
          <span class="font-medium text-transparent bg-clip-text bg-gradient-to-br from-accent via-accent-light to-white"> Frontend Developer </span>
        </div>
      </div>
      <div class="flex items-center h-16">
        <div class="flex flex-col items-center animate-bounce">
          <span class="uppercase font-extralight mb-1.5">scroll me</span>
          <ArrowNarrowDownIcon class="w-4 h-4" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ArrowNarrowDownIcon } from "@heroicons/vue/solid";
export default {
  components: { ArrowNarrowDownIcon },
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
<style>
.animation-bubble {
  animation: bubble 20s linear infinite both;
}
.animation-bubble-2 {
  animation: bubble-2 20s linear infinite both;
}
@keyframes bubble {
  0% {
    transform: translateX(0) scale(0);
  }
  2% {
    transform: translateX(2px) scale(1.1);
  }
  4% {
    transform: translateX(3px) scale(0.9);
  }
  5.5% {
    transform: translateX(4px) scale(1);
  }
  12.5% {
    transform: translateX(7px);
  }
  17.5% {
    transform: translateX(3px);
  }
  21.5% {
    transform: translateX(-3px);
  }
  30% {
    transform: translateX(2px);
  }
  40% {
    transform: translateX(4px);
  }
  50% {
    transform: translateX(16px) scale(1);
    bottom: 100%;
  }
  100% {
    transform: translateX(16px) scale(1);
    bottom: 100%;
  }
}

@keyframes bubble-2 {
  0% {
    transform: translate(0, 100%);
  }
  2% {
    transform: translate(-2px, 80%);
  }
  4% {
    transform: translate(-3px, 70%);
  }
  7% {
    transform: translate(-4px, 60%);
  }
  12.5% {
    transform: translate(-7px, 50%);
  }
  17.5% {
    transform: translate(-3px, 40%);
  }
  21.5% {
    transform: translate(5px, 30%);
  }
  30% {
    transform: translate(2px, 20%);
  }
  40% {
    transform: translate(-4px, 0%);
  }
  50% {
    transform: translateX(-16px);
    bottom: 100%;
  }
  100% {
    transform: translateX(16px);
    bottom: 100%;
  }
}
</style>
