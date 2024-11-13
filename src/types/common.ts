export type WindData = {
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
};

export type TurbineCoordinates = {
  latitude: number;
  longitude: number;
};

export type WindForecastPoint = {
  dt: number;
} & WindData;

export type WindForecast = {
  list: WindForecastPoint[];
};
