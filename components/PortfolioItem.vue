<template>
  <div
    class="relative w-full overflow-hidden sm:w-[calc(50%-10px)] lg:w-[calc(33%-11px)] 2xl:w-[calc(25%-15px)] aspect-square"
    @mouseleave="toggleInfo(false)"
  >
    <div class="flex items-center justify-center w-full h-full rounded-lg bg-accent-light" @mouseenter="toggleInfo(true)">
      <img
        :src="`/works/${item.img}.png`"
        :alt="item.name"
        class="object-contain w-32 h-32 transition-transform duration-500"
        :class="isInfo && 'scale-110'"
      />
    </div>
    <div
      class="absolute top-0 right-0 flex items-center justify-center w-full h-full p-4 transition-transform duration-500 translate-x-full rounded-lg bg-white/50 dark:bg-dark-neutral/60 backdrop-blur-md"
      :class="isInfo ? 'translate-x-0' : 'translate-x-full'"
      @click="toggleInfo(false)"
    >
      <div class="flex flex-col items-center text-center">
        <div
          class="px-3 py-1.5 text-lg font-light leading-none uppercase bg-white rounded"
          :class="((item.hasOwnProperty('live') && item.live) || (item.hasOwnProperty('github') && item.github)) && 'mb-8'"
        >
          <span class="font-medium text-transparent bg-clip-text bg-gradient-to-l from-black via-accent to-black">{{ item.name }}</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <NuxtLink
            v-if="item.hasOwnProperty('live') && item.live"
            :href="item.live"
            target="_blank"
            aria-label="Show live"
            class="flex items-center group"
          >
            <span class="font-medium transition-colors duration-300 dark:text-dark-white">Sprawdź Live</span>
            <svg
              class="ml-2 transition-colors duration-300 animate-bounce-right group-hover:animate-bounce-right-faster dark:fill-dark-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="16"
              fill="currentColor"
            >
              <path
                d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              ></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            v-if="item.hasOwnProperty('github') && item.github"
            :href="item.github"
            target="_blank"
            aria-label="GitHub"
            class="flex items-center group"
          >
            <span class="font-medium transition-colors duration-300 dark:text-dark-white">GitHub</span>
            <svg
              class="ml-2 transition-colors duration-300 animate-bounce-right group-hover:animate-bounce-right-faster dark:fill-dark-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="16"
              fill="currentColor"
            >
              <path
                d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 flex flex-wrap w-full p-4 gap-1.5">
        <template v-if="item.hasOwnProperty('techStack') && item.techStack">
          <div v-for="(element, index) in item.techStack" :key="index" class="text-white px-1 py-0.5 uppercase font-medium text-xs bg-black">
            {{ element }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  item: Work;
}>();

const isInfo = ref(false);

const toggleInfo = (param: boolean = false) => {
  isInfo.value = param;
};
</script>
