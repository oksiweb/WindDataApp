import { useEffect, useState } from "react";
import { TurbineCoordinates, WindData, WindForecast } from "../types/common";

const API_KEY = import.meta.env.VITE_API_KEY;

export function useWeather({ latitude, longitude }: TurbineCoordinates) {
  const [currentWindData, setCurrentWindData] = useState<WindData | null>(null);
  const [forecast, setForecast] = useState<WindForecast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [currentResponse, forecastResponse] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
          ),
        ]);

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        setCurrentWindData({ wind: currentData.wind });
        setForecast(forecastData);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  return { currentWindData, forecast, loading, error };
}
