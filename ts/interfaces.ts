export {};

type Technology = "html" | "css" | "sass" | "tailwindcss" | "js" | "ts" | "vue" | "nuxt" | "jquery" | "php" | "pwa";

declare global {
    interface Work {
        id: number;
        name: string;
        img: string;
        live?: string;
        github?: string;
        techStack?: Array<Technology>;
    }

    interface Bubble {
        id: number;
        size: number;
        left: number;
        delay: number;
        animation: number;
    }
}
