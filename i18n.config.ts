import en from "@/locales/en.json";
import pl from "@/locales/pl.json";

export default defineI18nConfig(() => ({
    legacy: false,
    warnHtmlMessage: false,
    messages: {
        en,
        pl
    }
}));
