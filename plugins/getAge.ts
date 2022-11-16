import dayjs from "dayjs";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      getAge: (dateOfBirth: string) => {
        const age = dayjs().diff(dateOfBirth, "years");
        let suffix = "";

        if (age === 1) suffix = "rok";
        else if ((age > 14 || age <= 4) && age % 10 >= 2 && age % 10 <= 4) suffix = "lata";
        else suffix = "lat";

        return `${age} ${suffix}`;
      },
    },
  };
});
