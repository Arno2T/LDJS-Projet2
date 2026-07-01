import { type Participation, type Olympic } from "../models/interfaces";

const useEvolutionData = (country: Olympic) => {
  return {
    labels: country?.participations
      .map((p: Participation) => p.year.toString())
      .sort((a, b) => parseInt(a) - parseInt(b)),
    datasets: [
      {
        label: "Nombre de médailles",
        data: country?.participations.map((p: Participation) => p.medalsCount),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };
};

const evolutionOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "black",
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "black",
      },
      grid: {
        color: "black",
      },
    },
    x: {
      ticks: {
        color: "black",
      },
      grid: {
        color: "black",
      },
    },
  },
};

export { useEvolutionData, evolutionOptions };
