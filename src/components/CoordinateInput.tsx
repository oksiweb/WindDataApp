import { useState } from "react";
import { validateCoordinates } from "../utils/common";

export type CoordinateInputProps = {
  onSubmit: (latitude: number, longitude: number) => void;
};

export default function CoordinateInput({ onSubmit }: CoordinateInputProps) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateCoordinates(latitude, longitude);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    onSubmit(parseFloat(latitude), parseFloat(longitude));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <div>
        <label
          htmlFor="latitude"
          className="block text-sm font-medium text-gray-700"
        >
          Latitude
        </label>
        <input
          id="latitude"
          type="number"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Enter latitude"
          required
          min={-90}
          max={90}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="longitude"
          className="block text-sm font-medium text-gray-700"
        >
          Longitude
        </label>
        <input
          id="longitude"
          type="number"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Enter longitude"
          required
          min={-180}
          max={180}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Wind Data
      </button>
    </form>
  );
}
