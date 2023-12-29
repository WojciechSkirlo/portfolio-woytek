import dayjs from "dayjs";

export default (dateOfBirth: string) => {
    const age = dayjs().diff(dateOfBirth, "years");
    let plural = 0;

    if (age === 1) plural = 0;
    else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) plural = 2;
    else plural = 1;

    return { age, plural };
};
