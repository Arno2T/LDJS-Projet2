import { type Olympic, type Participation } from "../models/interfaces";

const useChartData = (data: Array<Olympic>) => {
  const calculateTotalMedals = (country: Olympic): number => {
    return country.participations.reduce(
      (sum: number, p: Participation) => sum + p.medalsCount,
      0,
    );
  };

  return {
    labels: data?.map((d) => d.name),
    datasets: [
      {
        label: "Total des médailles",
        data: data?.map((d) => calculateTotalMedals(d)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

export { useChartData };
