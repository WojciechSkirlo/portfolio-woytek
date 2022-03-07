<template>
  <div id="header" v-cloak v-click-outside="hideMenu">
    <div
      class="fixed top-0 right-0 z-20 items-center w-full transition-all duration-500"
      :class="isBackgroundMenu && ['bg-white/70', 'dark:bg-dark-neutral/70', 'backdrop-blur-md']"
    >
      <div class="container flex items-center justify-end p-4 px-5 mx-auto">
        <button @click="toggleMenu" class="flex items-center justify-center w-5 h-5">
          <MenuAlt4Icon v-show="!isMenu" class="w-full h-5 transition-colors duration-300 dark:text-dark-white" />
          <XIcon v-show="isMenu" class="w-full h-5 transition-colors duration-300 dark:text-dark-white" />
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition-transform duration-300"
      leave-active-class="transition-transform duration-300"
      leave-to-class="-translate-x-full"
      enter-from-class="-translate-x-full"
    >
      <div
        v-if="isMenu"
        class="
          fixed
          top-0
          bottom-0
          left-0
          z-20
          flex flex-col
          w-4/5
          transition-[colors,transform]
          duration-300
          bg-white/70
          dark:bg-dark-neutral/70
          backdrop-blur-md
        "
      >
        <div class="flex items-center justify-start w-full gap-4 py-[17px] px-5">
          <button
            @click="themeMode === 'dark' ? (themeMode = 'light') : (themeMode = 'dark')"
            class="relative flex h-4 transition-colors duration-300 bg-black rounded-full dark:bg-dark-white w-9"
          >
            <div
              class="absolute -top-0.5 w-5 h-5 rounded-full transition-[left] bg-accent"
              :class="themeMode === 'dark' ? 'left-[18px]' : '-left-0.5'"
            ></div>
          </button>
          <span class="transition-colors duration-300 dark:text-dark-white">Tryb ciemny {{ themeMode === "dark" ? "włączony" : "wyłączony" }}</span>
        </div>
        <div class="flex flex-col p-6 px-8">
          <!-- Menu -->
          <h3 class="mb-6 text-sm font-semibold uppercase transition-colors duration-300 dark:text-dark-white">Menu</h3>
          <ul class="ml-2">
            <li v-for="item in menu" :key="item.id" class="mb-1 transition-colors duration-300 dark:text-dark-white last:mb-0">
              <button
                @click="scrollToSection(item.link)"
                class="
                  px-4
                  py-1.5
                  leading-4
                  inline-block
                  transition-colors
                  duration-300
                  bg-accent-light
                  rounded
                  dark:text-dark-neutral
                  font-medium
                  text-sm
                "
              >
                {{ item.name }}
              </button>
            </li>
          </ul>

          <!-- Contact -->
          <h3 class="mt-10 mb-6 text-sm font-semibold uppercase transition-colors duration-300 dark:text-dark-white">Kontakt</h3>
          <ul class="flex flex-col items-start ml-2">
            <li v-for="item in contact" :key="item.id" class="flex mb-1 transition-colors duration-300 dark:text-dark-white last:mb-0">
              <a
                :href="item.link"
                class="
                  px-4
                  py-1.5
                  bg-accent-light
                  rounded
                  dark:text-dark-neutral
                  transition-colors
                  duration-300
                  font-medium
                  flex
                  justify-start
                  leading-4
                  gap-2
                  items-center
                  text-sm
                "
                target="_blank"
              >
                <span>
                  <svg class="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" v-html="item.icon"></svg>
                </span>
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { MenuAlt4Icon, XIcon } from "@heroicons/vue/solid";
export default {
  components: { MenuAlt4Icon, XIcon },
  data() {
    return {
      themeMode: "light",
      isMenu: false,
      isBackgroundMenu: false,
      menu: [
        {
          id: 1,
          name: "Hello",
          link: "#hello",
        },
        {
          id: 1,
          name: "O mnie",
          link: "#about-me",
        },
        {
          id: 1,
          name: "Portfolio",
          link: "#portfolio",
        },
        {
          id: 1,
          name: "Kontakt",
          link: "#contact",
        },
      ],
      contact: [
        {
          id: 1,
          name: "GitHub",
          link: "https://github.com/WojciechSkirlo",
          icon: ` <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
              />`,
        },
        {
          id: 1,
          name: "Likedin",
          link: "https://www.linkedin.com/in/wojciech-skir%C5%82o-54861b213/",
          icon: `<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />`,
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu;
    },
    hideMenu() {
      this.isMenu && (this.isMenu = false);
    },
    scrollToSection(link) {
      const el = document.querySelector(link);
      window.scroll({ top: el.offsetTop - 52, behavior: "smooth" });
      this.hideMenu();
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
  watch: {
    isMenu(newValue) {
      newValue ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
    },
    themeMode(newValue) {
      if (newValue === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
  mounted() {
    window.pageYOffset > 50 ? (this.isBackgroundMenu = true) : (this.isBackgroundMenu = false);
    window.addEventListener("scroll", () => {
      window.pageYOffset > 50 ? (this.isBackgroundMenu = true) : (this.isBackgroundMenu = false);
    });

    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      this.themeMode = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      this.themeMode = "light";
    }
  },
};
</script>