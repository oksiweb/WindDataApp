import { useMemo } from "react";
import { WindForecastPoint } from "../types/common";

export function useChartData(forecast: WindForecastPoint[]) {
  const chartData = useMemo(() => {
    return {
      labels: forecast.map((item) =>
        new Date(item.dt * 1000).toLocaleTimeString(),
      ),
      datasets: [
        {
          label: "Wind Speed (m/s)",
          data: forecast.map((item) => item.wind.speed),
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  }, [forecast]);

  return chartData;
}
