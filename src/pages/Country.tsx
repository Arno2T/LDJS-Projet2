import { useParams, Link, useNavigate } from "react-router-dom";
import { type Olympic, type Participation } from "../models/interfaces";
import { useOlympicData } from "../hooks/useOlympicData";
import { useEvolutionData, evolutionOptions } from "../hooks/useCountryData";
import Card from "../components/Card";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
);

const Country = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: olympicsData, isLoaded } = useOlympicData();
  const country = olympicsData.find((c: Olympic) => c.id === Number(id)) ?? {
    id: 0,
    name: "Pays introuvable",
    participations: [],
  };

  const countryData = useEvolutionData(country);

  const totalMedals: number =
    country?.participations.reduce(
      (sum: number, p: Participation) => sum + p.medalsCount,
      0,
    ) ?? 0;
  const totalAthletes: number =
    country?.participations.reduce(
      (sum: number, p: Participation) => sum + p.athleteCount,
      0,
    ) ?? 0;

  const totalParticipations: number = country?.participations.length ?? 0;

  if (!isLoaded) {
    return <div>Chargement...</div>;
  }
  if (country.id === 0) {
    navigate("*");
  }

  return (
    <div className="min-h-screen bg-white text-[#39818D] p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-cyan-700 rounded text-white hover:bg-blue-700 transition"
          >
            Accueil
          </Link>
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-12 bg-cyan-700 rounded-lg p-6">
          <h1 className="text-4xl text-center text-white font-bold">
            {country?.name}
          </h1>
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-4">
          <Card text="Participations" data={totalParticipations} />
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-4">
          <Card text="Total Médailles" data={totalMedals} />
        </div>
        <div className="col-span-4 md:col-span-8 lg:col-span-4">
          <Card text="Total athlètes" data={totalAthletes} />
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div style={{ height: "400px" }}>
              <Line data={countryData} options={evolutionOptions} />
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-8 lg:col-span-12 text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  );
};
export default Country;
