"use client";

import { useState } from "react";
import CoordinateInput from "./components/CoordinateInput";
import WindData from "./components/WindData";
import "./index.css";

export default function WindDataApp() {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleCoordinateSubmit = (latitude: number, longitude: number) => {
    setCoordinates({ latitude, longitude });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Wind Data for Turbine Maintenance
      </h1>
      <div className="max-w-md mx-auto mb-8">
        <CoordinateInput onSubmit={handleCoordinateSubmit} />
      </div>
      {coordinates && (
        <WindData
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
        />
      )}
    </div>
  );
}
