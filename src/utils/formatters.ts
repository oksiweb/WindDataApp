export const formatDateTime = (timestamp: number): string =>
  new Date(timestamp * 1000).toLocaleString();
