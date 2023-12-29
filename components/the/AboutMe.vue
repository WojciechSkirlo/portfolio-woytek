<script setup lang="ts">
interface AboutMe {
    header: string;
    title: string;
    description: Array<{ id: number; paragraph: string }>;
    quote: string;
    authorOfQuote: string;
}

interface TimeLine {
    id: number;
    description: string;
}

const { t } = useI18n();

const aboutMe: AboutMe = {
    header: t("About me"),
    title: t("A bit of my story"),
    description: [
        {
            id: 1,
            paragraph: `${t("Actually, my name is")} <b>Skirło Wojciech</b>. ${t("I'm")} ${getAge("2001-10-20")}.
            ${t(
                "I come from a small town 60 km from Cracow. From an early age, I have been interested in computer science and in 2021 I started studying applied computer science at the Collage of Economics and Computer Science in Cracow. Every day I enrich myself with new skills, so I can do more and more."
            )}`
        },
        {
            id: 2,
            paragraph: `${t("I am currently working as a")} <b>Frontend Developer</b>. 
            ${t(
                "In my free time I am involved in creating music as well as performing it. I enjoy hanging out with friends, playing instruments such as guitar and piano. In general, I can't imagine the world without music."
            )}`
        }
    ],
    quote: "Music is the wine that fills the cup of silence",
    authorOfQuote: "Robert Fripp"
};

const timeLine: Array<TimeLine> = [
    {
        id: 1,
        description: t("2020 - First commercial project")
    },
    {
        id: 2,
        description: t("2021 jul - First job as Frontend developer at Maal company")
    },
    {
        id: 3,
        description: t("2021 oct - Starting studies at the Collage of Economics and Computer Science in Cracow")
    },
    {
        id: 4,
        description: t("2023 feb - New job at Ideo company")
    },
    {
        id: 5,
        description: t("2023 oct - GoIT Mentor - Share knowledge, inspire the future")
    }
];
</script>

<template>
    <section id="about-me" class="w-full transition-colors duration-300 bg-white dark:bg-dark-neutral">
        <BaseWrapper class="items-center gap-10 lg:gap-14 md:flex-row">
            <div class="relative flex flex-col flex-1">
                <div
                    class="absolute right-0 w-24 h-24 rounded-full -top-2 animation-move bg-gradient-to-br from-accent/70 via-accent-light/70 to-white backdrop-blur-md"
                ></div>
                <BaseHeading left class="mb-8">{{ aboutMe.header }}</BaseHeading>
                <div class="flex flex-col">
                    <div class="relative flex mb-7">
                        <h1
                            class="pr-8 text-5xl font-medium leading-tight text-left transition-colors duration-300 dark:text-dark-white"
                        >
                            {{ aboutMe.title }}
                        </h1>
                    </div>
                    <p
                        v-for="item in aboutMe.description"
                        class="mb-6 transition-colors duration-300 font-extralight text-stone-600 dark:text-dark-grey last:mb-0"
                        :key="item.id"
                        v-html="item.paragraph"
                    ></p>
                    <blockquote
                        class="px-4 py-1.5 font-medium text-right text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-light"
                    >
                        <q>
                            {{ aboutMe.quote }}
                        </q>
                        <span> - {{ aboutMe.authorOfQuote }}</span>
                    </blockquote>
                </div>
            </div>
            <div class="relative flex items-center self-center justify-around flex-1 w-full md:w-auto">
                <div class="h-full w-0.5 bg-accent absolute top-0 left-1/2 -translate-x-1/2"></div>
                <div class="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <div
                        v-for="(item, index) in timeLine"
                        :key="item.id"
                        class="relative flex flex-col w-full mb-20 last:mb-12 first:mt-12"
                    >
                        <div
                            class="absolute top-0 flex w-1/2 -translate-y-1/2"
                            :class="index % 2 == 0 ? 'right-0' : 'left-0'"
                        >
                            <div
                                class="absolute top-1/2 w-2.5 h-2.5 bg-black dark:bg-dark-grey -translate-y-1/2"
                                :class="
                                    index % 2 == 0 ? ['left-0', '-translate-x-1/2'] : ['right-0', 'translate-x-1/2']
                                "
                            ></div>
                            <p
                                class="w-full font-medium transition-colors duration-300 dark:text-dark-grey"
                                :class="index % 2 == 0 ? ['ml-4', 'text-left'] : ['mr-4', 'text-right']"
                            >
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BaseWrapper>
    </section>
</template>

<style scoped>
.animation-move {
    animation: animation-move 9s infinite;
}

@keyframes animation-move {
    50% {
        transform: translateY(-20px);
    }
}
</style>
