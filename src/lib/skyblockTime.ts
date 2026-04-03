export const EPOCH = 1559829300000; //Thursday, June 6, 2019 at 1:55:00 PM
export const HOUR_MS = 50000;
export const DAY_MS = 1200000;
export const MONTH_MS = 37200000;
export const YEAR_MS = 446400000;

export const getSkyblockTime = (realTimeMs: number = Date.now()) => {
  const elapsedTime = realTimeMs - EPOCH;
  const year = Math.floor(elapsedTime / YEAR_MS) + 1;
  
  const yearRemainder = elapsedTime % YEAR_MS;
  const month = Math.floor(yearRemainder / MONTH_MS) + 1;
  const monthRemainder = yearRemainder % MONTH_MS;
  const day = Math.floor(monthRemainder / DAY_MS) + 1;
  const hour = Math.floor((monthRemainder % DAY_MS) / HOUR_MS);

  return { year, month, day, hour };
};

export const getElectionTimestamps = (targetYear: number) => {
  const boothCloseTime = (targetYear - 1) * YEAR_MS + EPOCH + (2 * MONTH_MS) + (26 * DAY_MS);
  const boothOpenTime = (targetYear - 2) * YEAR_MS + EPOCH + (5 * MONTH_MS) + (26 * DAY_MS);
  return { boothOpenTime, boothCloseTime };
};

export const formatTimeRemaining = (targetTimestamp: number) => {
  const remainingMs = targetTimestamp - Date.now();
  if (remainingMs <= 0) return { days: "0", hours: "00", minutes: "00", seconds: "00" };

  const totalHours = Math.floor(remainingMs / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24).toString();
  const hours = (totalHours % 24).toString().padStart(2, "0");
  const minutes = (Math.floor(remainingMs / (1000 * 60)) % 60).toString().padStart(2, "0");
  const seconds = (Math.floor(remainingMs / 1000) % 60).toString().padStart(2, "0");

  return { days, hours, minutes, seconds };
};