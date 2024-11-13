export function validateCoordinates(lat: string, lon: string): string | null {
  const latValue = parseFloat(lat);
  const lonValue = parseFloat(lon);

  if (isNaN(latValue) || latValue < -90 || latValue > 90) {
    return "Latitude must be a number between -90 and 90.";
  }

  if (isNaN(lonValue) || lonValue < -180 || lonValue > 180) {
    return "Longitude must be a number between -180 and 180.";
  }

  return null;
}
