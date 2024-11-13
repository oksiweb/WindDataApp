import { WindData } from "../../types/common";

type CurrentWindConditionsProps = {
  currentWindData: WindData;
};

export default function CurrentWindConditions({
  currentWindData,
}: CurrentWindConditionsProps) {
  if (!currentWindData || !currentWindData.wind) {
    return (
      <div className="text-center text-red-500">
        Wind data is not available.
      </div>
    );
  }

  const { wind } = currentWindData;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Current Wind Conditions
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Wind Speed</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {wind.speed ? `${wind.speed} m/s` : "N/A"}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Wind Direction
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {wind.deg ? `${wind.deg}°` : "N/A"}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Wind Gust</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {wind.gust ? `${wind.gust} m/s` : "N/A"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
