export interface AlchemyLevel {
  level: number;
  xpRequired: number;
  totalXpRequired: number;
  coinReward: number;
  totalCoinReward: number;
  intelligenceBonus: number;
  totalIntelligenceBonus: number;
  durationBonus: number;
  totalDurationBonus: number;
  skyblockXp: number;
  totalSkyblockXp: number;
}

export const ALCHEMY_LEVELS: AlchemyLevel[] = [
  { level: 1, xpRequired: 50, totalXpRequired: 50, coinReward: 100, totalCoinReward: 100, intelligenceBonus: 1, totalIntelligenceBonus: 1, durationBonus: 1, totalDurationBonus: 1, skyblockXp: 5, totalSkyblockXp: 5 },
  { level: 2, xpRequired: 125, totalXpRequired: 175, coinReward: 250, totalCoinReward: 350, intelligenceBonus: 1, totalIntelligenceBonus: 2, durationBonus: 1, totalDurationBonus: 2, skyblockXp: 5, totalSkyblockXp: 10 },
  { level: 3, xpRequired: 200, totalXpRequired: 375, coinReward: 500, totalCoinReward: 850, intelligenceBonus: 1, totalIntelligenceBonus: 3, durationBonus: 1, totalDurationBonus: 3, skyblockXp: 5, totalSkyblockXp: 15 },
  { level: 4, xpRequired: 300, totalXpRequired: 675, coinReward: 750, totalCoinReward: 1600, intelligenceBonus: 1, totalIntelligenceBonus: 4, durationBonus: 1, totalDurationBonus: 4, skyblockXp: 5, totalSkyblockXp: 20 },
  { level: 5, xpRequired: 500, totalXpRequired: 1175, coinReward: 1000, totalCoinReward: 2600, intelligenceBonus: 1, totalIntelligenceBonus: 5, durationBonus: 1, totalDurationBonus: 5, skyblockXp: 5, totalSkyblockXp: 25 },
  { level: 6, xpRequired: 750, totalXpRequired: 1925, coinReward: 2000, totalCoinReward: 4600, intelligenceBonus: 1, totalIntelligenceBonus: 6, durationBonus: 1, totalDurationBonus: 6, skyblockXp: 5, totalSkyblockXp: 30 },
  { level: 7, xpRequired: 1000, totalXpRequired: 2925, coinReward: 3000, totalCoinReward: 7600, intelligenceBonus: 1, totalIntelligenceBonus: 7, durationBonus: 1, totalDurationBonus: 7, skyblockXp: 5, totalSkyblockXp: 35 },
  { level: 8, xpRequired: 1500, totalXpRequired: 4425, coinReward: 4000, totalCoinReward: 11600, intelligenceBonus: 1, totalIntelligenceBonus: 8, durationBonus: 1, totalDurationBonus: 8, skyblockXp: 5, totalSkyblockXp: 40 },
  { level: 9, xpRequired: 2000, totalXpRequired: 6425, coinReward: 5000, totalCoinReward: 16600, intelligenceBonus: 1, totalIntelligenceBonus: 9, durationBonus: 1, totalDurationBonus: 9, skyblockXp: 5, totalSkyblockXp: 45 },
  { level: 10, xpRequired: 3500, totalXpRequired: 9925, coinReward: 7500, totalCoinReward: 24100, intelligenceBonus: 1, totalIntelligenceBonus: 10, durationBonus: 1, totalDurationBonus: 10, skyblockXp: 5, totalSkyblockXp: 50 },
  { level: 11, xpRequired: 5000, totalXpRequired: 14925, coinReward: 10000, totalCoinReward: 34100, intelligenceBonus: 1, totalIntelligenceBonus: 11, durationBonus: 1, totalDurationBonus: 11, skyblockXp: 10, totalSkyblockXp: 60 },
  { level: 12, xpRequired: 7500, totalXpRequired: 22425, coinReward: 15000, totalCoinReward: 49100, intelligenceBonus: 1, totalIntelligenceBonus: 12, durationBonus: 1, totalDurationBonus: 12, skyblockXp: 10, totalSkyblockXp: 70 },
  { level: 13, xpRequired: 10000, totalXpRequired: 32425, coinReward: 20000, totalCoinReward: 69100, intelligenceBonus: 1, totalIntelligenceBonus: 13, durationBonus: 1, totalDurationBonus: 13, skyblockXp: 10, totalSkyblockXp: 80 },
  { level: 14, xpRequired: 15000, totalXpRequired: 47425, coinReward: 25000, totalCoinReward: 94100, intelligenceBonus: 1, totalIntelligenceBonus: 14, durationBonus: 1, totalDurationBonus: 14, skyblockXp: 10, totalSkyblockXp: 90 },
  { level: 15, xpRequired: 20000, totalXpRequired: 67425, coinReward: 30000, totalCoinReward: 124100, intelligenceBonus: 2, totalIntelligenceBonus: 16, durationBonus: 1, totalDurationBonus: 15, skyblockXp: 10, totalSkyblockXp: 100 },
  { level: 16, xpRequired: 30000, totalXpRequired: 97425, coinReward: 40000, totalCoinReward: 164100, intelligenceBonus: 2, totalIntelligenceBonus: 18, durationBonus: 1, totalDurationBonus: 16, skyblockXp: 10, totalSkyblockXp: 110 },
  { level: 17, xpRequired: 50000, totalXpRequired: 147425, coinReward: 50000, totalCoinReward: 214100, intelligenceBonus: 2, totalIntelligenceBonus: 20, durationBonus: 1, totalDurationBonus: 17, skyblockXp: 10, totalSkyblockXp: 120 },
  { level: 18, xpRequired: 75000, totalXpRequired: 222425, coinReward: 65000, totalCoinReward: 279100, intelligenceBonus: 2, totalIntelligenceBonus: 22, durationBonus: 1, totalDurationBonus: 18, skyblockXp: 10, totalSkyblockXp: 130 },
  { level: 19, xpRequired: 100000, totalXpRequired: 322425, coinReward: 80000, totalCoinReward: 359100, intelligenceBonus: 2, totalIntelligenceBonus: 24, durationBonus: 1, totalDurationBonus: 19, skyblockXp: 10, totalSkyblockXp: 140 },
  { level: 20, xpRequired: 200000, totalXpRequired: 522425, coinReward: 100000, totalCoinReward: 459100, intelligenceBonus: 2, totalIntelligenceBonus: 26, durationBonus: 1, totalDurationBonus: 20, skyblockXp: 10, totalSkyblockXp: 150 },
  { level: 21, xpRequired: 300000, totalXpRequired: 822425, coinReward: 125000, totalCoinReward: 584100, intelligenceBonus: 2, totalIntelligenceBonus: 28, durationBonus: 1, totalDurationBonus: 21, skyblockXp: 10, totalSkyblockXp: 160 },
  { level: 22, xpRequired: 400000, totalXpRequired: 1222425, coinReward: 150000, totalCoinReward: 734100, intelligenceBonus: 2, totalIntelligenceBonus: 30, durationBonus: 1, totalDurationBonus: 22, skyblockXp: 10, totalSkyblockXp: 170 },
  { level: 23, xpRequired: 500000, totalXpRequired: 1722425, coinReward: 175000, totalCoinReward: 909100, intelligenceBonus: 2, totalIntelligenceBonus: 32, durationBonus: 1, totalDurationBonus: 23, skyblockXp: 10, totalSkyblockXp: 180 },
  { level: 24, xpRequired: 600000, totalXpRequired: 2322425, coinReward: 200000, totalCoinReward: 1109100, intelligenceBonus: 2, totalIntelligenceBonus: 34, durationBonus: 1, totalDurationBonus: 24, skyblockXp: 10, totalSkyblockXp: 190 },
  { level: 25, xpRequired: 700000, totalXpRequired: 3022425, coinReward: 225000, totalCoinReward: 1334100, intelligenceBonus: 2, totalIntelligenceBonus: 36, durationBonus: 1, totalDurationBonus: 25, skyblockXp: 10, totalSkyblockXp: 200 },
  { level: 26, xpRequired: 800000, totalXpRequired: 3822425, coinReward: 250000, totalCoinReward: 1584100, intelligenceBonus: 2, totalIntelligenceBonus: 38, durationBonus: 1, totalDurationBonus: 26, skyblockXp: 20, totalSkyblockXp: 220 },
  { level: 27, xpRequired: 900000, totalXpRequired: 4722425, coinReward: 275000, totalCoinReward: 1859100, intelligenceBonus: 2, totalIntelligenceBonus: 40, durationBonus: 1, totalDurationBonus: 27, skyblockXp: 20, totalSkyblockXp: 240 },
  { level: 28, xpRequired: 1000000, totalXpRequired: 5722425, coinReward: 300000, totalCoinReward: 2159100, intelligenceBonus: 2, totalIntelligenceBonus: 42, durationBonus: 1, totalDurationBonus: 28, skyblockXp: 20, totalSkyblockXp: 260 },
  { level: 29, xpRequired: 1100000, totalXpRequired: 6822425, coinReward: 325000, totalCoinReward: 2484100, intelligenceBonus: 2, totalIntelligenceBonus: 44, durationBonus: 1, totalDurationBonus: 29, skyblockXp: 20, totalSkyblockXp: 280 },
  { level: 30, xpRequired: 1200000, totalXpRequired: 8022425, coinReward: 350000, totalCoinReward: 2834100, intelligenceBonus: 2, totalIntelligenceBonus: 46, durationBonus: 1, totalDurationBonus: 30, skyblockXp: 20, totalSkyblockXp: 300 },
  { level: 31, xpRequired: 1300000, totalXpRequired: 9322425, coinReward: 375000, totalCoinReward: 3209100, intelligenceBonus: 2, totalIntelligenceBonus: 48, durationBonus: 1, totalDurationBonus: 31, skyblockXp: 20, totalSkyblockXp: 320 },
  { level: 32, xpRequired: 1400000, totalXpRequired: 10722425, coinReward: 400000, totalCoinReward: 3609100, intelligenceBonus: 2, totalIntelligenceBonus: 50, durationBonus: 1, totalDurationBonus: 32, skyblockXp: 20, totalSkyblockXp: 340 },
  { level: 33, xpRequired: 1500000, totalXpRequired: 12222425, coinReward: 425000, totalCoinReward: 4034100, intelligenceBonus: 2, totalIntelligenceBonus: 52, durationBonus: 1, totalDurationBonus: 33, skyblockXp: 20, totalSkyblockXp: 360 },
  { level: 34, xpRequired: 1600000, totalXpRequired: 13822425, coinReward: 450000, totalCoinReward: 4484100, intelligenceBonus: 2, totalIntelligenceBonus: 54, durationBonus: 1, totalDurationBonus: 34, skyblockXp: 20, totalSkyblockXp: 380 },
  { level: 35, xpRequired: 1700000, totalXpRequired: 15522425, coinReward: 475000, totalCoinReward: 4959100, intelligenceBonus: 2, totalIntelligenceBonus: 56, durationBonus: 1, totalDurationBonus: 35, skyblockXp: 20, totalSkyblockXp: 400 },
  { level: 36, xpRequired: 1800000, totalXpRequired: 17322425, coinReward: 500000, totalCoinReward: 5459100, intelligenceBonus: 2, totalIntelligenceBonus: 58, durationBonus: 1, totalDurationBonus: 36, skyblockXp: 20, totalSkyblockXp: 420 },
  { level: 37, xpRequired: 1900000, totalXpRequired: 19222425, coinReward: 550000, totalCoinReward: 6009100, intelligenceBonus: 2, totalIntelligenceBonus: 60, durationBonus: 1, totalDurationBonus: 37, skyblockXp: 20, totalSkyblockXp: 440 },
  { level: 38, xpRequired: 2000000, totalXpRequired: 21222425, coinReward: 600000, totalCoinReward: 6609100, intelligenceBonus: 2, totalIntelligenceBonus: 62, durationBonus: 1, totalDurationBonus: 38, skyblockXp: 20, totalSkyblockXp: 460 },
  { level: 39, xpRequired: 2100000, totalXpRequired: 23322425, coinReward: 650000, totalCoinReward: 7259100, intelligenceBonus: 2, totalIntelligenceBonus: 64, durationBonus: 1, totalDurationBonus: 39, skyblockXp: 20, totalSkyblockXp: 480 },
  { level: 40, xpRequired: 2200000, totalXpRequired: 25522425, coinReward: 700000, totalCoinReward: 7959100, intelligenceBonus: 2, totalIntelligenceBonus: 66, durationBonus: 1, totalDurationBonus: 40, skyblockXp: 20, totalSkyblockXp: 500 },
  { level: 41, xpRequired: 2300000, totalXpRequired: 27822425, coinReward: 750000, totalCoinReward: 8709100, intelligenceBonus: 2, totalIntelligenceBonus: 68, durationBonus: 1, totalDurationBonus: 41, skyblockXp: 20, totalSkyblockXp: 520 },
  { level: 42, xpRequired: 2400000, totalXpRequired: 3022425, coinReward: 800000, totalCoinReward: 9509100, intelligenceBonus: 2, totalIntelligenceBonus: 70, durationBonus: 1, totalDurationBonus: 42, skyblockXp: 20, totalSkyblockXp: 540 },
  { level: 43, xpRequired: 2500000, totalXpRequired: 32722425, coinReward: 850000, totalCoinReward: 10359100, intelligenceBonus: 2, totalIntelligenceBonus: 72, durationBonus: 1, totalDurationBonus: 43, skyblockXp: 20, totalSkyblockXp: 560 },
  { level: 44, xpRequired: 2600000, totalXpRequired: 35322425, coinReward: 900000, totalCoinReward: 11259100, intelligenceBonus: 2, totalIntelligenceBonus: 74, durationBonus: 1, totalDurationBonus: 44, skyblockXp: 20, totalSkyblockXp: 580 },
  { level: 45, xpRequired: 2750000, totalXpRequired: 38072425, coinReward: 1000000, totalCoinReward: 12259100, intelligenceBonus: 2, totalIntelligenceBonus: 76, durationBonus: 1, totalDurationBonus: 45, skyblockXp: 20, totalSkyblockXp: 600 },
  { level: 46, xpRequired: 2900000, totalXpRequired: 40972425, coinReward: 1000000, totalCoinReward: 13259100, intelligenceBonus: 2, totalIntelligenceBonus: 78, durationBonus: 1, totalDurationBonus: 46, skyblockXp: 20, totalSkyblockXp: 620 },
  { level: 47, xpRequired: 3100000, totalXpRequired: 44072425, coinReward: 1000000, totalCoinReward: 14259100, intelligenceBonus: 2, totalIntelligenceBonus: 80, durationBonus: 1, totalDurationBonus: 47, skyblockXp: 20, totalSkyblockXp: 640 },
  { level: 48, xpRequired: 3400000, totalXpRequired: 47472425, coinReward: 1000000, totalCoinReward: 15259100, intelligenceBonus: 2, totalIntelligenceBonus: 82, durationBonus: 1, totalDurationBonus: 48, skyblockXp: 20, totalSkyblockXp: 660 },
  { level: 49, xpRequired: 3700000, totalXpRequired: 51172425, coinReward: 1000000, totalCoinReward: 16259100, intelligenceBonus: 2, totalIntelligenceBonus: 84, durationBonus: 1, totalDurationBonus: 49, skyblockXp: 20, totalSkyblockXp: 680 },
  { level: 50, xpRequired: 4000000, totalXpRequired: 55172425, coinReward: 1000000, totalCoinReward: 17259100, intelligenceBonus: 2, totalIntelligenceBonus: 86, durationBonus: 1, totalDurationBonus: 50, skyblockXp: 20, totalSkyblockXp: 700 }
];