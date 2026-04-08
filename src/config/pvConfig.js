export const pvConfig = [
  {
    name: "Skyblock Level",
    category: "Core Stats",
    tags: ["level", "lvl", "skylevel"],
    getValue: (player) => Math.floor(player.leveling.experience / 100)
  }
];