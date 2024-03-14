import { faker } from "@faker-js/faker";

const data = Array(3).fill({
  xLabel: faker.number.int({ min: 1, max: 80 }),
  value: faker.number.int({ min: 1, max: 80 }),
});

export const genderData = {
  datasets: [
    {
      label: " # of Genders",
      data,
      backgroundColor: [
        "hsla(144, 83%, 35%, 1)",
        "hsla(58, 100%, 66%, 1)",
        "hsla(224, 33%, 24%, 1)",
      ],
    },
  ],
};
