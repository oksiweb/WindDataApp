import { useWeather } from "../hooks/useWeather";
import CurrentWindConditions from "./ui/CurrentWindConditions";
import ForecastTable from "./ui/ForecastTable";

import { TurbineCoordinates } from "../types/common";
import WindSpeedChart from "./ui/WindSpeedChart";

export default function WindData({ latitude, longitude }: TurbineCoordinates) {
  const { currentWindData, forecast, loading, error } = useWeather({
    latitude,
    longitude,
  });

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  if (!currentWindData || !forecast) return null;

  return (
    <div className="space-y-6">
      <CurrentWindConditions currentWindData={currentWindData} />
      <ForecastTable forecast={forecast.list} />
      <WindSpeedChart forecast={forecast.list} />
    </div>
  );
}
