import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { WindForecastPoint } from "../../types/common";
import { useChartData } from "../../hooks/useChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type WindSpeedChartProps = {
  forecast: WindForecastPoint[];
};

export default function WindSpeedChart({ forecast }: WindSpeedChartProps) {
  const chartData = useChartData(forecast);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Wind Speed Chart
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <div className="sm:p-6">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}
