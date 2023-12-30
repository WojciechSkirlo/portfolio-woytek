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
const birthDate = "2001-10-20";
const age = getAge(birthDate);

const aboutMe = computed<AboutMe>(() => ({
    header: t("aboutMe.header"),
    title: t("aboutMe.title"),
    description: [
        {
            id: 1,
            paragraph: t("aboutMe.description[0]", { name: "Skirło Wojciech", age: age.age }, { plural: age.plural })
        },
        {
            id: 2,
            paragraph: t("aboutMe.description[1]")
        }
    ],
    quote: "Music is the wine that fills the cup of silence",
    authorOfQuote: "Robert Fripp"
}));

const timeLine = computed<Array<TimeLine>>(() => [
    {
        id: 1,
        description: t("aboutMe.timeline[0]")
    },
    {
        id: 2,
        description: t("aboutMe.timeline[1]")
    },
    {
        id: 3,
        description: t("aboutMe.timeline[2]")
    },
    {
        id: 4,
        description: t("aboutMe.timeline[3]")
    },
    {
        id: 5,
        description: t("aboutMe.timeline[4]")
    }
]);
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
