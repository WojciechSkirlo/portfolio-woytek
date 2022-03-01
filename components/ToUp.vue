<template>
  <div
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
  </div>
</template>
<script>
import { ArrowNarrowUpIcon } from "@heroicons/vue/solid";
export default {
  components: { ArrowNarrowUpIcon },
};
</script>