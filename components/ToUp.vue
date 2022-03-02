<template>
  <transition
    enter-active-class="transition-opacity duration-500"
    leave-active-class="transition-opacity duration-500"
    leave-to-class="opacity-0"
    enter-from-class="opacity-0"
  >
    <button
      v-if="isToUp"
      @click="scrollToUp"
      class="
        fixed
        z-10
        flex flex-col
        items-center
        justify-center
        px-2.5
        pt-3
        pb-2
        text-xs text-white
        uppercase
        bg-black
        font-extralight
        bottom-9
        right-4
        bg-opacity-70
        hover:bg-opacity-100
        transition-[background]
        duration-300
      "
    >
      <ArrowNarrowUpIcon class="w-3.5 h-3.5 fill-white" />
      <span class="mt-1.5">to</span>
      <span>up</span>
    </button>
  </transition>
</template>
<script>
import { ArrowNarrowUpIcon } from "@heroicons/vue/solid";
export default {
  components: { ArrowNarrowUpIcon },
  data() {
    return {
      isToUp: false,
    };
  },
  methods: {
    scrollToUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.pageYOffset > 400 ? (this.isToUp = true) : (this.isToUp = false);
    window.addEventListener("scroll", () => {
      window.pageYOffset > 400 ? (this.isToUp = true) : (this.isToUp = false);
    });
  },
};
</script>