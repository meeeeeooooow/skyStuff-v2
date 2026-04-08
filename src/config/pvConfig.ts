export interface StatItem {
  name: string;
  category: string;
  tags: string[];
  getValue: (player: any, profile?: any) => any;
}

export const pvConfig: StatItem[] = [  
  {
    name: "Skyblock Level",
    category: "General",
    tags: ["level", "lvl", "sb level", "sb lvl", "sb"],
    getValue: (player: any) => Math.floor((player?.leveling?.experience || 0) / 100)
  },
  {
    name: "Skyblock XP",
    category: "General",
    tags: ["xp", "experience", "sb xp", "sb experience", "sb"],
    getValue: (player: any) => player?.leveling?.experience || 0
  },
  {
    name: "Purse",
    category: "Economy",
    tags: ["coins", "money", "wallet", "purse", "cash"],
    getValue: (player: any) => Math.floor(player?.currencies?.coin_purse || player?.coin_purse || 0)
  },
  {
    name: "Bits",
    category: "Economy",
    tags: ["bits", "cookie", "booster"],
    getValue: (player: any) => player?.profile?.item_data?.bits_balance || 0
  },
  {
    name: "Motes",
    category: "Economy",
    tags: ["motes", "rift", "rift coins"],
    getValue: (player: any) => player?.currencies?.motes_purse || player?.rift?.motes?.purse || 0
  },
  {
    name: "Farming",
    category: "Skills",
    tags: ["farming", "farm", "crop", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_FARMING || player?.experience_skill_farming || 0
  },
  {
    name: "Mining",
    category: "Skills",
    tags: ["mining", "mine", "ore", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_MINING || player?.experience_skill_mining || 0
  },
  {
    name: "Combat",
    category: "Skills",
    tags: ["combat", "fight", "sword", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_COMBAT || player?.experience_skill_combat || 0
  },
  {
    name: "Foraging",
    category: "Skills",
    tags: ["foraging", "wood", "tree", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_FORAGING || player?.experience_skill_foraging || 0
  },
  {
    name: "Fishing",
    category: "Skills",
    tags: ["fishing", "fish", "rod", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_FISHING || player?.experience_skill_fishing || 0
  },
  {
    name: "Enchanting",
    category: "Skills",
    tags: ["enchanting", "enchant", "magic", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_ENCHANTING || player?.experience_skill_enchanting || 0
  },
  {
    name: "Alchemy",
    category: "Skills",
    tags: ["alchemy", "potion", "brew", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_ALCHEMY || player?.experience_skill_alchemy || 0
  },
  {
    name: "Taming",
    category: "Skills",
    tags: ["taming", "pet", "pets", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_TAMING || player?.experience_skill_taming || 0
  },
  {
    name: "Carpentry",
    category: "Skills",
    tags: ["carpentry", "furniture", "crafting", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_CARPENTRY || player?.experience_skill_carpentry || 0
  },
  {
    name: "Runecrafting",
    category: "Skills",
    tags: ["runecrafting", "rune", "cosmetic", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_RUNECRAFTING || player?.experience_skill_runecrafting || 0
  },
  {
    name: "Social",
    category: "Skills",
    tags: ["social", "guest", "island", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_SOCIAL || player?.experience_skill_social || 0
  },
  {
    name: "Zombie Slayer XP",
    category: "Slayers",
    tags: ["zombie", "revenant", "rev", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.zombie?.xp || 0
  },
  {
    name: "Spider Slayer XP",
    category: "Slayers",
    tags: ["spider", "tarantula", "tara", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.spider?.xp || 0
  },
  {
    name: "Wolf Slayer XP",
    category: "Slayers",
    tags: ["wolf", "sven", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.wolf?.xp || 0
  },
  {
    name: "Enderman Slayer XP",
    category: "Slayers",
    tags: ["enderman", "voidgloom", "eman", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.enderman?.xp || 0
  },
  {
    name: "Blaze Slayer XP",
    category: "Slayers",
    tags: ["blaze", "inferno", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.blaze?.xp || 0
  },
  {
    name: "Vampire Slayer XP",
    category: "Slayers",
    tags: ["vampire", "rift", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.vampire?.xp || 0
  },
  {
    name: "Catacombs XP",
    category: "Dungeons",
    tags: ["catacombs", "cata", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.dungeon_types?.catacombs?.experience || 0
  },
  {
    name: "Healer Class XP",
    category: "Dungeons",
    tags: ["healer", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.healer?.experience || 0
  },
  {
    name: "Mage Class XP",
    category: "Dungeons",
    tags: ["mage", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.mage?.experience || 0
  },
  {
    name: "Berserk Class XP",
    category: "Dungeons",
    tags: ["berserk", "melee", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.melee?.experience || 0
  },
  {
    name: "Archer Class XP",
    category: "Dungeons",
    tags: ["archer", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.archer?.experience || 0
  },
  {
    name: "Tank Class XP",
    category: "Dungeons",
    tags: ["tank", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.tank?.experience || 0
  },
  {
    name: "Heart of the Mountain XP",
    category: "Mining",
    tags: ["hotm", "heart of the mountain", "dwarven", "mining", "xp"],
    getValue: (player: any) => player?.mining_core?.experience || 0
  },
  {
    name: "Mithril Powder",
    category: "Mining",
    tags: ["mithril", "powder", "dwarven", "mining"],
    getValue: (player: any) => player?.mining_core?.powder_mithril || 0
  },
  {
    name: "Gemstone Powder",
    category: "Mining",
    tags: ["gemstone", "powder", "crystal", "mining"],
    getValue: (player: any) => player?.mining_core?.powder_gemstone || 0
  },
  {
    name: "Glacite Powder",
    category: "Mining",
    tags: ["glacite", "powder", "minesense", "mining"],
    getValue: (player: any) => player?.mining_core?.powder_glacite || 0
  },
  {
    name: "Wheat Collection",
    category: "Collections",
    tags: ["wheat", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.WHEAT || 0
  },
  {
    name: "Potato Collection",
    category: "Collections",
    tags: ["potato", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.POTATO_ITEM || 0
  },
  {
    name: "Carrot Collection",
    category: "Collections",
    tags: ["carrot", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.CARROT_ITEM || 0
  },
  {
    name: "Diamond Collection",
    category: "Collections",
    tags: ["diamond", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.DIAMOND || 0
  },
  {
    name: "Bank Balance",
    category: "Economy",
    tags: ["bank", "coins", "money", "shared", "economy"],
    getValue: (player: any, profile: any) => Math.floor(profile?.banking?.balance || 0)
  },
  {
    name: "Active Pet",
    category: "Pets",
    tags: ["active", "pet", "current", "companion", "equipped"],
    getValue: (player: any) => {
      const activePet = player?.pets?.find((p: any) => p.active);
      // We return the pet's type if we find one, otherwise we default to "None"
      return activePet ? activePet.type : "None";
    }
  },
  {
    name: "Total Pets",
    category: "Pets",
    tags: ["total", "pets", "amount", "count", "roster"],
    getValue: (player: any) => player?.pets?.length || 0
  },
  {
    name: "Pet Score",
    category: "Pets",
    tags: ["pet score", "score", "magic find", "pets"],
    getValue: (player: any) => player?.pet_stats?.pet_score || player?.pet_score || 0
  },
  {
    name: "Magical Power",
    category: "Accessories",
    tags: ["mp", "magical power", "talisman", "talismans", "accessories", "bag"],
    getValue: (player: any) => player?.accessory_bag_storage?.highest_magical_power || 0
  },
  {
    name: "Selected Power",
    category: "Accessories",
    tags: ["selected power", "power stone", "stone", "reforge", "accessories"],
    getValue: (player: any) => {
      const power = player?.accessory_bag_storage?.selected_power;
      // If a power exists, we capitalize the first letter to make it look nice on the dashboard
      return power ? power.charAt(0).toUpperCase() + power.slice(1) : "None";
    }
  },
  {
    name: "Selected Faction",
    category: "Crimson Isle",
    tags: ["faction", "crimson", "isle", "mage", "barbarian"],
    getValue: (player: any) => {
      const faction = player?.nether_island_player_data?.selected_faction;
      // Capitalize the first letter and lowercase the rest so "MAGES" becomes "Mages"
      return faction ? faction.charAt(0).toUpperCase() + faction.slice(1).toLowerCase() : "None";
    }
  },
  {
    name: "Mage Reputation",
    category: "Crimson Isle",
    tags: ["mage", "reputation", "rep", "crimson", "isle"],
    getValue: (player: any) => player?.nether_island_player_data?.mages_reputation || 0
  },
  {
    name: "Barbarian Reputation",
    category: "Crimson Isle",
    tags: ["barbarian", "reputation", "rep", "crimson", "isle"],
    getValue: (player: any) => player?.nether_island_player_data?.barbarians_reputation || 0
  },
  {
    name: "Wither Essence",
    category: "Essence",
    tags: ["wither", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.WITHER || 0
  },
  {
    name: "Undead Essence",
    category: "Essence",
    tags: ["undead", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.UNDEAD || 0
  },
  {
    name: "Dragon Essence",
    category: "Essence",
    tags: ["dragon", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.DRAGON || 0
  },
  {
    name: "Crimson Essence",
    category: "Essence",
    tags: ["crimson", "essence", "nether", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.CRIMSON || 0
  },
  {
    name: "Bestiary Milestone",
    category: "Bestiary",
    tags: ["bestiary", "milestone", "mobs", "kills", "level"],
    getValue: (player: any) => player?.bestiary?.milestone || 0
  },
  {
    name: "Unique Minions Crafted",
    category: "Minions",
    tags: ["minions", "crafted", "unique", "slots", "generators"],
    getValue: (player: any) => player?.crafted_generators?.length || 0
  }
];