import { faker } from "@faker-js/faker";

export const engagementOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const engagementData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      backgroundColor: "hsl(var(--secondary))",
    },
  ],
};
