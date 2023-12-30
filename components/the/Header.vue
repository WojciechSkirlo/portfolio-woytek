<script setup lang="ts">
interface Menu {
    id: number;
    name: string;
    link: string;
}

interface Contact {
    id: number;
    name: string;
    link: string;
    icon: string;
}

const { t } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isMenu = ref(false);
const isBackgroundMenu = ref(false);
const isDarkMode = ref(false);

const menu = computed<Array<Menu>>(() => [
    {
        id: 1,
        name: t("nav.home"),
        link: "#hello"
    },
    {
        id: 2,
        name: t("nav.aboutMe"),
        link: "#about-me"
    },
    {
        id: 3,
        name: t("nav.portfolio"),
        link: "#portfolio"
    },
    {
        id: 4,
        name: t("nav.contact"),
        link: "#contact"
    }
]);

const contact = computed<Array<Contact>>(() => [
    {
        id: 1,
        name: "GitHub",
        link: "https://github.com/WojciechSkirlo",
        icon: ` <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
              />`
    },
    {
        id: 1,
        name: "Linkedin",
        link: "https://www.linkedin.com/in/wojciech-skir%C5%82o-54861b213/",
        icon: `<!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />`
    }
]);

const toggleMenu = () => {
    setTimeout(() => {
        isMenu.value = !isMenu.value;
    }, 100);
};

const hideMenu = () => {
    isMenu.value && (isMenu.value = false);
};

const scrollToSection = (link: string, navHeight: number = 52) => {
    const el = document.querySelector(link)! as HTMLElement;
    window.scroll({ top: el.offsetTop - navHeight, behavior: "smooth" });
    hideMenu();
};

const toogleIsBackgroundMenu = () => {
    window.pageYOffset > 50 ? (isBackgroundMenu.value = true) : (isBackgroundMenu.value = false);
};

watch(isDarkMode, (newValue: boolean) => {
    if (newValue) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});

watch(isMenu, (newValue: boolean) => {
    newValue ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
});

onMounted(() => {
    toogleIsBackgroundMenu();
    window.addEventListener("scroll", () => {
        toogleIsBackgroundMenu();
    });

    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        isDarkMode.value = true;
    } else {
        document.documentElement.classList.remove("dark");
        isDarkMode.value = false;
    }
});
</script>

<template>
    <div>
        <!-- Desktop -->
        <div
            class="fixed top-0 left-0 z-40 items-center justify-end hidden w-full transition-colors duration-500 lg:flex"
            :class="isBackgroundMenu && ['bg-white/70', 'dark:bg-dark-neutral/70', 'backdrop-blur-md']"
        >
            <div class="flex items-center gap-5">
                <nav>
                    <ul class="flex gap-4 py-4">
                        <li v-for="item in menu" :key="item.id">
                            <button
                                aria-label="Scroll To Section"
                                class="px-4 text-sm py-1.5 font-medium leading-4 bg-accent-light rounded hover:bg-black hover:text-white transition-colors duration-300"
                                @click="scrollToSection(item.link, 64)"
                            >
                                <span>
                                    {{ item.name }}
                                </span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div class="flex gap-2 dark:text-white">
                    <NuxtLink :to="switchLocalePath('en')" active-class="underline" class="hover:underline">
                        EN
                    </NuxtLink>
                    <NuxtLink :to="switchLocalePath('pl')" active-class="underline" class="hover:underline">
                        PL
                    </NuxtLink>
                </div>
                <BaseSwitch v-model="isDarkMode" />
                <div class="flex h-16 gap-4">
                    <NuxtLink
                        v-for="item in contact"
                        :key="item.id"
                        :to="item.link"
                        target="_blank"
                        class="flex items-center justify-center h-16 group"
                        :aria-label="$t('nav.contact')"
                    >
                        <svg
                            class="w-4 h-4 fill-black"
                            :class="isBackgroundMenu ? 'dark:fill-dark-grey' : ''"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            v-html="item.icon"
                        ></svg>
                    </NuxtLink>
                    <NuxtLink
                        href="mailto:wojciechskiro@gmail.com"
                        class="flex items-center justify-center w-16 h-16 bg-black"
                        :aria-label="$t('nav.contact')"
                    >
                        <BaseIcon name="PaperAirplaneIcon" class="text-white rotate-45" bigger />
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="lg:hidden" id="header" v-click-outside="hideMenu">
            <div
                class="fixed top-0 right-0 z-40 items-center w-full transition-all duration-500"
                :class="isBackgroundMenu && ['bg-white/70', 'dark:bg-dark-neutral/70', 'backdrop-blur-md']"
            >
                <div class="container flex items-center justify-end px-5 py-4 mx-auto">
                    <button
                        type="button"
                        class="flex items-center justify-center w-5 h-5"
                        aria-label="Toggle menu"
                        @click="toggleMenu"
                    >
                        <BaseIcon
                            v-if="!isMenu"
                            name="MenuAlt4Icon"
                            class="transition-colors duration-300 dark:text-dark-white"
                            bigger
                        />
                        <BaseIcon
                            v-else
                            name="XIcon"
                            class="transition-colors duration-300 dark:text-dark-white"
                            bigger
                        />
                    </button>
                </div>
            </div>
            <Transition
                enter-active-class="transition-transform duration-300"
                leave-active-class="transition-transform duration-300"
                leave-to-class="-translate-x-full"
                enter-from-class="-translate-x-full"
            >
                <div
                    v-if="isMenu"
                    class="fixed top-0 bottom-0 left-0 z-50 flex flex-col w-4/5 transition-[colors,transform] duration-300 bg-white/70 dark:bg-dark-neutral/70 backdrop-blur-md"
                >
                    <div class="flex items-center justify-start w-full gap-4 py-[17px] px-5">
                        <BaseSwitch v-model="isDarkMode" background />
                        <span class="transition-colors duration-300 dark:text-dark-white">
                            {{ $t("Dark mode") }} {{ isDarkMode ? $t("on") : $t("off") }}
                        </span>
                    </div>
                    <nav class="flex flex-col px-5 py-1">
                        <div class="flex gap-2 mb-5 dark:text-white">
                            <NuxtLink :to="switchLocalePath('en')" active-class="underline" class="hover:underline">
                                EN
                            </NuxtLink>
                            <NuxtLink :to="switchLocalePath('pl')" active-class="underline" class="hover:underline">
                                PL
                            </NuxtLink>
                        </div>

                        <!-- Menu -->
                        <h3
                            class="mb-4 text-sm font-semibold uppercase transition-colors duration-300 dark:text-dark-white"
                        >
                            {{ $t("nav.menu") }}
                        </h3>
                        <ul>
                            <li
                                v-for="item in menu"
                                :key="item.id"
                                class="mb-1 transition-colors duration-300 dark:text-dark-white last:mb-0"
                            >
                                <button
                                    aria-label="Scroll To Section"
                                    class="px-4 py-1.5 leading-4 inline-block transition-colors duration-300 bg-accent-light rounded dark:text-dark-neutral font-medium text-sm"
                                    @click="scrollToSection(item.link, 52)"
                                >
                                    {{ item.name }}
                                </button>
                            </li>
                        </ul>

                        <!-- Contact -->
                        <h3
                            class="mt-6 mb-4 text-sm font-semibold uppercase transition-colors duration-300 dark:text-dark-white"
                        >
                            {{ $t("nav.contact") }}
                        </h3>
                        <ul class="flex flex-col items-start">
                            <li
                                v-for="item in contact"
                                :key="item.id"
                                class="flex mb-1 transition-colors duration-300 dark:text-dark-white last:mb-0"
                            >
                                <NuxtLink
                                    :to="item.link"
                                    target="_blank"
                                    :aria-label="$t('nav.contact')"
                                    class="px-4 py-1.5 bg-accent-light rounded dark:text-dark-neutral transition-colors duration-300 font-medium flex justify-start leading-4 gap-2 items-center text-sm"
                                >
                                    <span>
                                        <svg
                                            class="w-4 h-4 fill-black"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                            v-html="item.icon"
                                        ></svg>
                                    </span>
                                    <span>{{ item.name }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Transition>
        </div>
    </div>
</template>
