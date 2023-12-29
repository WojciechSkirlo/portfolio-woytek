import dayjs from "dayjs";

export default (dateOfBirth: string) => {
    const { t } = useI18n();

    const age = dayjs().diff(dateOfBirth, "years");
    let suffix = "";

    if (age === 1) suffix = t("rok");
    else if ((age > 14 || age <= 4) && age % 10 >= 2 && age % 10 <= 4) suffix = t("lata");
    else suffix = t("lat");

    return `${age} ${suffix}`;
};
