// hooks
import { useOlympicData } from "../hooks/useOlympicData";
import {useChartData} from "../hooks/useChardata";
import { useNavigate } from "react-router-dom";

// Pages & Components
import Header from "../components/Header";
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
  type ChartEvent,
  type ActiveElement,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
)

const Home = () => {
      const navigate = useNavigate();

      const {data: olympicsData, isLoaded}= useOlympicData();
      const totalParticipatingCountries: number = olympicsData ? olympicsData.length : 0
      const totalGamesEditions: number = 5
      const chartData = useChartData(olympicsData);
    
      if (!isLoaded) {
        return <div>Chargement...</div>
      }

      const onCountryClick = (id: string | number) => {
        navigate(`/country/${id}`);
      }
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              color: 'black',
            },
          },
        },
        onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
            if (elements.length > 0) {
              const index = elements[0].index;
              const country = olympicsData[index];

              console.log("Clique sur le pays : ", country.name);
              onCountryClick(country.id);
            }
          }
      }
    
      return (
        <div className="min-h-screen bg-white text-[#39818D] p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <Header />
            </div>
    
              <div className="col-span-4 md:col-span-4 lg:col-span-6">
                <Card text="Pays participants" data={totalParticipatingCountries} />
              </div>
              <div className="col-span-4 md:col-span-4 lg:col-span-6">
                <Card text="Éditions des JO" data={totalGamesEditions}/>
              </div>
    
            <div className="col-span-4 md:col-span-8 lg:col-span-12 bg-white p-8 rounded-lg shadow-xl">
              <div style={{ height: '400px' }}>
                <Pie data={chartData} options={chartOptions} />
              </div>
            </div>
    
            <div className="col-span-4 md:col-span-8 lg:col-span-12 text-sm text-gray-400">
              <p>Cliquez sur un pays pour voir ses détails</p>
            </div>
          </div>
        </div>
      )
};

export default Home;
