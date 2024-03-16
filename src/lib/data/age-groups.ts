import { faker } from "@faker-js/faker";

export const ageGroupOptions = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Age Group",
      align: "start" as const,
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      display: false,
    },
    y: {
      stacked: true,
      display: false,
    },
  },
};

const labels = ["16-25", "25-35", "35-55", "55+"];

export const ageGroupData = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "hsla(144, 83%, 35%, 1)",
      backgroundColor: "hsla(144, 83%, 35%, 1)",
      stack: "Stack 0",
    },
    {
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "hsla(58, 100%, 66%, 1)",
      backgroundColor: "hsla(58, 100%, 66%, 1)",
      stack: "Stack 0",
    },
    {
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "hsla(224, 33%, 24%, 1)",
      backgroundColor: "hsla(224, 33%, 24%, 1)",
      stack: "Stack 0",
    },
  ],
};
