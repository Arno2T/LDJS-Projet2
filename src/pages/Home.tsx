// hooks
import { useOlympicData } from "../hooks/useOlympicData";
import {useChartData} from "../hooks/useChardata";

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
    
      const {data: olympicsData, isLoaded}= useOlympicData();
      const totalParticipatingCountries: number = olympicsData ? olympicsData.length : 0
      const totalGamesEditions: number = 5
      const chartData = useChartData(olympicsData);
    
      if (!isLoaded) {
        return <div>Chargement...</div>
      }
    
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              color: 'white',
            },
          },
        },
      }
    
      return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
          <div className="max-w-6xl mx-auto">
            <Header />
    
            {/* Anti-pattern 8 — Cartes dupliquées — extraire en composant réutilisable (Indicator.tsx). */}
            <div className="mb-2">
              <Card text="Pays participants" data={totalParticipatingCountries} />
              <Card text="Éditions des JO" data={totalGamesEditions}/>
    
            </div>
    
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <div style={{ height: '400px' }}>
                <Pie data={chartData} options={chartOptions} />
              </div>
            </div>
    
            <div className="text-sm text-gray-400">
              <p>Cliquez sur un pays pour voir ses détails</p>
            </div>
          </div>
        </div>
      )
};

export default Home;