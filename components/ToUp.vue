<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    leave-active-class="transition-opacity duration-500"
    leave-to-class="opacity-0"
    enter-from-class="opacity-0"
  >
    <button
      v-if="isToTop"
      type="button"
      aria-label="Scroll To Up"
      class="fixed rounded z-10 flex flex-col items-center justify-center px-2.5 pt-3 pb-2 text-xs text-white uppercase bg-black font-extralight bottom-9 right-4 bg-opacity-70 hover:bg-opacity-100 transition-[background,opacity] duration-500"
      @click="scrollToTop"
    >
      <BaseIcon name="ArrowNarrowUpIcon" class="text-white" smaller />
      <span class="mt-1.5">to</span>
      <span>up</span>
    </button>
  </Transition>
</template>
<script setup lang="ts">
const isToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.pageYOffset > 400 ? (isToTop.value = true) : (isToTop.value = false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 400 ? (isToTop.value = true) : (isToTop.value = false);
  });
});
</script>
