<template>
  <div v-cloak>
    <div
      @click="toggleMenu"
      class="fixed top-0 right-0 z-20 items-center w-full transition-all duration-500"
      :class="isBackgroundMenu && ['bg-white', 'bg-opacity-60', 'backdrop-blur-md']"
    >
      <div class="container flex justify-end p-4 mx-auto">
        <MenuAlt4Icon class="w-6 h-6" />
      </div>
    </div>
    <transition
      enter-active-class="transition-transform duration-300"
      leave-active-class="transition-transform duration-300"
      leave-to-class="-translate-x-full"
      enter-from-class="-translate-x-full"
    >
      <div v-if="isMenu" v-click-outside="hideMenu" class="fixed top-0 bottom-0 left-0 z-20 w-4/5 bg-white bg-opacity-60 backdrop-blur-md"></div>
    </transition>
  </div>
</template>
<script>
import { MenuAlt4Icon } from "@heroicons/vue/solid";
export default {
  components: { MenuAlt4Icon },
  data() {
    return {
      isMenu: false,
      isBackgroundMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    hideMenu() {
      console.log("hide");
      // this.isMenu && (this.isMenu = false);
      // this.isMenu = false;
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
  mounted() {
    window.pageYOffset > 50 ? (this.isBackgroundMenu = true) : (this.isBackgroundMenu = false);
    window.addEventListener("scroll", () => {
      window.pageYOffset > 50 ? (this.isBackgroundMenu = true) : (this.isBackgroundMenu = false);
    });
  },
};
</script>