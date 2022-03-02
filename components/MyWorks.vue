<template>
  <div v-click-outside="toggleInfo" class="relative w-full overflow-hidden aspect-square">
    <div class="flex items-center justify-center w-full h-full bg-accent-light" @click="toggleInfo(true)">
      <img
        :src="`/static/works/${item.img}`"
        :alt="item.name"
        class="object-contain w-32 h-32 transition-transform duration-500 delay-300"
        :class="isInfo && 'scale-110'"
      />
    </div>
    <div
      class="absolute top-0 right-0 flex items-center justify-center w-full h-full p-4 transition-transform duration-500 translate-x-full bg-white  bg-opacity-30 backdrop-blur-md"
      :class="isInfo ? 'translate-x-0' : 'translate-x-full'"
      @click="toggleInfo(false)"
    >
      <div class="flex flex-col items-center text-center">
        <div
          class="px-3 py-1.5 text-lg font-light leading-none uppercase bg-white"
          :class="((item.hasOwnProperty('live') && item.live) || (item.hasOwnProperty('github') && item.github)) && 'mb-8'"
        >
          <span class="font-medium text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-light">{{ item.name }}</span>
        </div>
        <div class="flex flex-col items-center gap-4">
          <a :href="item.live" target="_blank" v-if="item.hasOwnProperty('live') && item.live" class="flex items-center">
            <span class="font-medium">Sprawdź Live</span>
            <svg class="ml-2 animate-bounce-right" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="16" fill="currentColor">
              <path
                d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              ></path>
            </svg>
          </a>
          <a :href="item.github" target="_blank" v-if="item.hasOwnProperty('github') && item.github" class="flex items-center">
            <span class="font-medium">GitGub</span>
            <svg class="ml-2 animate-bounce-right" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="16" fill="currentColor">
              <path
                d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 flex flex-wrap w-full p-4 gap-1.5">
        <template v-if="item.hasOwnProperty('techStack') && item.techStack">
          <div v-for="element in item.techStack" :key="element.id" class="bg-black text-white px-1 py-0.5 uppercase font-medium text-xs">
            {{ element.name }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      isInfo: false,
    };
  },
  methods: {
    toggleInfo(param = false) {
      this.isInfo = param;
    },
  },
  directives: {
    clickOutside: {
      beforeMount(el, binding) {
        el.clickOutSideEvent = (event) => {
          if (!(el == event.target || el.contains(event.target))) {
            binding.value();
          }
        };
        document.addEventListener("click", el.clickOutSideEvent);
      },
      unmounted: (el) => {
        document.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
};
</script>