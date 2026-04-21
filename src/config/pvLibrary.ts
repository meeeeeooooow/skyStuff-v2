import { level200PetLevels, petRarityOffset, standardPetLevels } from "../data/pets";

export interface StatItem {
  name: string;
  category: string;
  tags: string[];
  getValue: (player: any, profile?: any) => any;
}

function formatPetName(type: string): string {
  if (!type) return "None";
  return type
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function calculatePetLevel(tier: string, exp: number, type: string): number {
  const level200Pets = ['GOLDEN_DRAGON', 'JADE_DRAGON', 'ROSE_DRAGON'];
  const isLevel200Pet = level200Pets.includes(type);

  const offsetKey = isLevel200Pet ? 'LEGENDARY' : tier;
  
  const offset = petRarityOffset[offsetKey as keyof typeof petRarityOffset] || 0;

  let level = 1;
  let remainingExp = exp;

  for (let i = offset; i < standardPetLevels.length; i++) {
    const xpNeeded = standardPetLevels[i];
    
    if (remainingExp >= xpNeeded) {
      remainingExp -= xpNeeded;
      level++;
      
      if (level === 100) break;
    } else {
      return level; 
    }
  }

  if (isLevel200Pet && level === 100) {
    for (let i = 0; i < level200PetLevels.length; i++) {
      const xpNeeded = level200PetLevels[i];
      
      if (remainingExp >= xpNeeded) {
        remainingExp -= xpNeeded;
        level++;
        
        if (level === 200) break;
      } else {
        break;
      }
    }
  }

  return level;
}

function getProfileCollectionTotal(profile: any, keys: string[]): number {
  let total = 0;
  const members = Object.values(profile?.members || {});

  for (const member of members as any[]) {
    for (const key of keys) {
      if (member?.collection?.[key] !== undefined) {
        total += member.collection[key];
        break;
      }
    }
  }

  return total;
}

const masterCollections: Record<string, { name: string; category: string; aliases?: string[] }> = {
  // Farming
  "WHEAT": { name: "Wheat", category: "Farming" },
  "POTATO_ITEM": { name: "Potato", category: "Farming" },
  "CARROT_ITEM": { name: "Carrot", category: "Farming" },
  "PUMPKIN": { name: "Pumpkin", category: "Farming" },
  "MELON": { name: "Melon", category: "Farming" },
  "SEEDS": { name: "Seeds", category: "Farming" },
  "MUSHROOM_COLLECTION": { name: "Mushroom", category: "Farming" },
  "INK_SACK:3": { name: "Cocoa Beans", category: "Farming", aliases: ["INK_SACK_3"] },
  "CACTUS": { name: "Cactus", category: "Farming" },
  "SUGAR_CANE": { name: "Sugar Cane", category: "Farming" },
  "NETHER_STALK": { name: "Nether Wart", category: "Farming" },
  "LEATHER": { name: "Leather", category: "Farming" },
  "PORK": { name: "Raw Porkchop", category: "Farming" },
  "RAW_CHICKEN": { name: "Raw Chicken", category: "Farming" },
  "FEATHER": { name: "Feather", category: "Farming" },
  "MUTTON": { name: "Mutton", category: "Farming" },
  "RABBIT": { name: "Raw Rabbit", category: "Farming" },
  "SUNFLOWER": { name: "Sunflower", category: "Farming", aliases: ["DOUBLE_PLANT:0"] },
  "MOONFLOWER": { name: "Moonflower", category: "Farming" },
  "WILD_ROSE": { name: "Wild Rose", category: "Farming", aliases: ["DOUBLE_PLANT:4"] },
  "CHILI_PEPPER": { name: "Chili Pepper", category: "Farming" },

  // Mining
  "COBBLESTONE": { name: "Cobblestone", category: "Mining" },
  "COAL": { name: "Coal", category: "Mining" },
  "IRON_INGOT": { name: "Iron", category: "Mining" },
  "GOLD_INGOT": { name: "Gold", category: "Mining" },
  "DIAMOND": { name: "Diamond", category: "Mining" },
  "INK_SACK:4": { name: "Lapis Lazuli", category: "Mining", aliases: ["INK_SACK_4"] },
  "REDSTONE": { name: "Redstone", category: "Mining" },
  "EMERALD": { name: "Emerald", category: "Mining" },
  "GRAVEL": { name: "Gravel", category: "Mining" },
  "SAND": { name: "Sand", category: "Mining" },
  "ICE": { name: "Ice", category: "Mining" },
  "OBSIDIAN": { name: "Obsidian", category: "Mining" },
  "ENDER_STONE": { name: "End Stone", category: "Mining" },
  "NETHERRACK": { name: "Netherrack", category: "Mining" },
  "QUARTZ": { name: "Nether Quartz", category: "Mining" },
  "GLOWSTONE_DUST": { name: "Glowstone", category: "Mining" },
  "MITHRIL_ORE": { name: "Mithril", category: "Mining" },
  "HARD_STONE": { name: "Hard Stone", category: "Mining" },
  "GEMSTONE_COLLECTION": { name: "Gemstone", category: "Mining" },
  "MYCEL": { name: "Mycelium", category: "Mining" },
  "SAND:1": { name: "Red Sand", category: "Mining", aliases: ["SAND_1"] },
  "GLACITE": { name: "Glacite", category: "Mining" },
  "TUNGSTEN": { name: "Tungsten", category: "Mining" },
  "UMBER": { name: "Umber", category: "Mining" },

  // Combat
  "ROTTEN_FLESH": { name: "Rotten Flesh", category: "Combat" },
  "BONE": { name: "Bone", category: "Combat" },
  "STRING": { name: "String", category: "Combat" },
  "SPIDER_EYE": { name: "Spider Eye", category: "Combat" },
  "SULPHUR": { name: "Gunpowder", category: "Combat" },
  "SLIME_BALL": { name: "Slimeball", category: "Combat" },
  "ENDER_PEARL": { name: "Ender Pearl", category: "Combat" },
  "GHAST_TEAR": { name: "Ghast Tear", category: "Combat" },
  "BLAZE_ROD": { name: "Blaze Rod", category: "Combat" },
  "MAGMA_CREAM": { name: "Magma Cream", category: "Combat" },

  // Foraging
  "LOG": { name: "Oak Wood", category: "Foraging" },
  "LOG:1": { name: "Spruce Wood", category: "Foraging", aliases: ["LOG_1"] },
  "LOG:2": { name: "Birch Wood", category: "Foraging", aliases: ["LOG_2"] },
  "LOG:3": { name: "Jungle Wood", category: "Foraging", aliases: ["LOG_3"] },
  "LOG_2": { name: "Acacia Wood", category: "Foraging", aliases: ["LOG_2:0"] },
  "LOG_2:1": { name: "Dark Oak Wood", category: "Foraging", aliases: ["LOG_2_1"] },
  "FIG_LOG": { name: "Fig Log", category: "Foraging" },
  "TENDER_WOOD": { name: "Tender Wood", category: "Foraging" },
  "MANGROVE_LOG": { name: "Mangrove Log", category: "Foraging" },
  "VINESAP": { name: "Vinesap", category: "Foraging" },
  "LUSHLILAC": { name: "Lushlilac", category: "Foraging" },
  "SEA_LUMIES": { name: "Sea Lumies", category: "Foraging" },

  // Fishing
  "RAW_FISH": { name: "Raw Fish", category: "Fishing" },
  "RAW_FISH:1": { name: "Raw Salmon", category: "Fishing", aliases: ["RAW_FISH_1"] },
  "RAW_FISH:2": { name: "Clownfish", category: "Fishing", aliases: ["RAW_FISH_2"] },
  "RAW_FISH:3": { name: "Pufferfish", category: "Fishing", aliases: ["RAW_FISH_3"] },
  "PRISMARINE_SHARD": { name: "Prismarine Shard", category: "Fishing" },
  "PRISMARINE_CRYSTALS": { name: "Prismarine Crystals", category: "Fishing" },
  "CLAY_BALL": { name: "Clay", category: "Fishing" },
  "WATER_LILY": { name: "Lily Pad", category: "Fishing" },
  "INK_SACK": { name: "Ink Sac", category: "Fishing" },
  "SPONGE": { name: "Sponge", category: "Fishing" },
  "MAGMA_FISH": { name: "Magmafish", category: "Fishing" },

  // Rift
  "HALF_EATEN_CARROT": { name: "Half-Eaten Carrot", category: "Rift" },
  "AGARICUS_CAP": { name: "Agaricus Cap", category: "Rift" },
  "LIVING_METAL_HEART": { name: "Living Metal Heart", category: "Rift", aliases: ["LIVING_METAL"] },
  "HEMOVIBE": { name: "Hemovibe", category: "Rift" },
  "WILTED_BERBERIS": { name: "Wilted Berberis", category: "Rift" },
  "CADUCOUS_STEM": { name: "Caducous Stem", category: "Rift" },
  "TIMITE": { name: "Timite", category: "Rift" },

  // Boss
  "BOSS_COLLECTION_BONZO": { name: "Bonzo", category: "Boss", aliases: ["BONZO"] },
  "BOSS_COLLECTION_SCARF": { name: "Scarf", category: "Boss", aliases: ["SCARF"] },
  "BOSS_COLLECTION_PROFESSOR": { name: "The Professor", category: "Boss", aliases: ["THE_PROFESSOR"] },
  "BOSS_COLLECTION_THORN": { name: "Thorn", category: "Boss", aliases: ["THORN"] },
  "BOSS_COLLECTION_LIVID": { name: "Livid", category: "Boss", aliases: ["LIVID"] },
  "BOSS_COLLECTION_SADAN": { name: "Sadan", category: "Boss", aliases: ["SADAN"] },
  "BOSS_COLLECTION_NECRON": { name: "Necron", category: "Boss", aliases: ["NECRON"] },
  "BOSS_COLLECTION_KUUDRA": { name: "Kuudra", category: "Boss", aliases: ["KUUDRA"] }
};

function getCollectionsByCategory(player: any, profile: any, targetCategory: string): string[] {
  const results: string[] = [];

  if (targetCategory === "Boss") {
    const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.tier_completions || {};
    const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions || {};

    const bossMapping = [
      { name: "Bonzo", floor: "1" },
      { name: "Scarf", floor: "2" },
      { name: "The Professor", floor: "3" },
      { name: "Thorn", floor: "4" },
      { name: "Livid", floor: "5" },
      { name: "Sadan", floor: "6" },
      { name: "Necron", floor: "7" }
    ];

    for (const boss of bossMapping) {
      const total = (normalCompletions[boss.floor] || 0) + (masterCompletions[boss.floor] || 0) * 2;
      results.push(`${boss.name}: ${total.toLocaleString()}`);
    }

    const kuudraTiers = player?.nether_island_player_data?.kuudra_completed_tiers || {};
    const kuudraTotal = (kuudraTiers.none || 0) + 
                        (kuudraTiers.hot || 0) + 
                        (kuudraTiers.burning || 0) + 
                        (kuudraTiers.fiery || 0) + 
                        (kuudraTiers.infernal || 0);
    
    results.push(`Kuudra: ${kuudraTotal.toLocaleString()}`);

    return results.length > 0 ? results : ["None"];
  }

  for (const key in masterCollections) {
    const col = masterCollections[key];
    if (col.category === targetCategory) {
      const keysToCheck = [key];
      if (col.aliases) keysToCheck.push(...col.aliases);
      
      let total = getProfileCollectionTotal(profile, keysToCheck);
      
      if (total === 0 && player?.collection) {
        for (const k of keysToCheck) {
          if (player.collection[k] !== undefined) {
            total += player.collection[k];
            break;
          }
        }
      }
      
      results.push(`${col.name}: ${total.toLocaleString()}`);
    }
  }
  return results.length > 0 ? results : ["None"];
}

const masterEssencePerks: Record<string, { name: string; categories: string[] }> = {
  // Undead Essence
  catacombs_boss_luck: { name: "Boss Luck", categories: ["Dungeons"] },
  catacombs_looting: { name: "Looting", categories: ["Dungeons"] },
  revive_stone: { name: "Help of the Fairies", categories: ["Dungeons"] },
  catacombs_health: { name: "Health Essence", categories: ["Dungeons"] },
  catacombs_defense: { name: "Defense Essence", categories: ["Dungeons"] },
  catacombs_strength: { name: "Strength Essence", categories: ["Dungeons"] },
  catacombs_intelligence: { name: "Intelligence Essence", categories: ["Dungeons"] },
  catacombs_crit_damage: { name: "Critical Essence", categories: ["Dungeons"] },

  // Wither Essence
  permanent_health: { name: "Forbidden Health", categories: ["General", "Combat", "Dungeons"] },
  permanent_defense: { name: "Forbidden Defense", categories: ["General", "Combat", "Dungeons"] },
  permanent_speed: { name: "Forbidden Speed", categories: ["General", "Combat", "Dungeons"] },
  permanent_intelligence: { name: "Forbidden Intelligence", categories: ["General", "Combat", "Dungeons"] },
  permanent_strength: { name: "Forbidden Strength", categories: ["General", "Combat", "Dungeons"] },
  forbidden_blessing: { name: "Forbidden Blessing", categories: ["Dungeons"] },
  dungeonbreaker_secrets: { name: "Echoes of the Lost", categories: ["Dungeons"] },

  // Dragon Essence
  flat_damage_vs_ender: { name: "One Punch", categories: ["Combat", "Dungeons"] },
  mana_after_ender_kill: { name: "Recharge", categories: ["Combat"] },
  fero_vs_dragons: { name: "Rageborn", categories: ["Combat"] },
  inc_zealots_odds: { name: "Zealuck", categories: ["Combat"] },
  combat_wisdom_in_end: { name: "Ender Training", categories: ["Combat"] },
  edrag_cd: { name: "Infused Dragon", categories: ["Combat"] },
  unbridled_rage: { name: "Unbridled Rage", categories: ["Dungeons"] },
  dragon_reforges_buff: { name: "Two-Headed Strike", categories: ["General", "Combat", "Dungeons"] },
  increased_sup_chances: { name: "Dragon Piper", categories: ["Combat"] },

  // Spider Essence
  empowered_agility: { name: "Empowered Agility", categories: ["General", "Combat", "Dungeons"] },
  vermin_control: { name: "Vermin Control", categories: ["Combat", "Dungeons"] },
  bane: { name: "Bane", categories: ["Combat", "Dungeons"] },
  spider_training: { name: "Spider Training", categories: ["Combat"] },
  toxophilite: { name: "Toxophilite", categories: ["Dungeons"] },

  // Ice Essence
  cold_efficiency: { name: "Cold Efficiency", categories: ["Dungeons"] },
  cooled_forges: { name: "Cooled Forges", categories: ["General", "Dungeons"] },
  frozen_skin: { name: "Frozen Skin", categories: ["General", "Combat", "Dungeons"] },
  season_of_joy: { name: "Season of Joy", categories: ["General"] },
  drake_piper: { name: "Drake Piper", categories: ["Fishing", "Combat"] },

  // Gold Essence
  heart_of_gold: { name: "Heart of Gold", categories: ["Dungeons"] },
  treasures_of_the_earth: { name: "Treasure of the Earth", categories: ["Mining"] },
  dwarven_training: { name: "Dwarven Training", categories: ["Mining"] },
  unbreaking: { name: "Unbreaking", categories: ["General", "Combat", "Dungeons"] },
  eager_miner: { name: "Eager Miner", categories: ["Mining"] },
  midas_lure: { name: "Midas Lure", categories: ["Fishing"] },

  // Diamond Essence
  radiant_fisher: { name: "Radiant Fisher", categories: ["Fishing"] },
  diamond_in_the_rough: { name: "Diamond in the Rough", categories: ["Dungeons"] },
  rhinestone_infusion: { name: "Rhinestone Infusion", categories: ["Mining"] },
  under_pressure: { name: "Under Pressure", categories: ["Mining"] },
  high_roller: { name: "High Roller", categories: ["Mining"] },
  return_to_sender: { name: "Return to Sender", categories: ["Mining"] },

  // Crimson Essence
  strongarm_kuudra: { name: "Strongarm", categories: ["Combat"] },
  fresh_tools_kuudra: { name: "Fresh Tools", categories: ["Combat"] },
  headstart_kuudra: { name: "Headstart", categories: ["Combat"] },
  master_kuudra: { name: "Kuudra Master", categories: ["Combat"] },
  fungus_fortuna: { name: "Fungus Fortuna", categories: ["Mining"] },
  harena_fortuna: { name: "Harena Fortuna", categories: ["Mining"] },
  crimson_training: { name: "Crimson Training", categories: ["Combat"] },
  wither_piper: { name: "Wither Piper", categories: ["Combat"] },

  // Forest Essence
  trapped: { name: "Trapped", categories: ["Foraging"] },
  axed: { name: "Axed", categories: ["Foraging", "Combat"] },
  extreme_pressure: { name: "Extreme Pressure", categories: ["Mining"] },
  lumberjack: { name: "Lumberjack", categories: ["Foraging"] },
  tasty: { name: "Tasty", categories: ["Foraging", "General"] },
  forest_training: { name: "Forest Training", categories: ["Foraging"] },

  // Agatha Essence
  agatha_power: { name: "Agatha Power", categories: ["Foraging"] },
  agatha_fig_fortune: { name: "Fig Fortune", categories: ["Foraging"] },
  agatha_mangrove_fortune: { name: "Mangrove Fortune", categories: ["Foraging"] },
  agatha_fig_personal_best: { name: "Fig Personal Best", categories: ["Foraging"] },
  agatha_mangrove_personal_best: { name: "Mangrove Personal Best", categories: ["Foraging"] },

  // Sun Gecko Essence
  blessing_of_time: { name: "Blessing of Time", categories: ["General", "Combat", "Dungeons"] }
};

function getEssencePerksByCategory(player: any, targetCategory: string): string[] {
  const results: string[] = [];
  const perks = player?.player_data?.perks || {};
  for (const key in masterEssencePerks) {
    if (masterEssencePerks[key].categories.includes(targetCategory) && perks[key] !== undefined) {
      results.push(`${masterEssencePerks[key].name} Level ${perks[key]}`);
    }
  }
  return results.length > 0 ? results : ["None"];
}

export const pvLibrary: Record<string, StatItem> = new Proxy({
  skyblock_level: {
    name: "Skyblock Level",
    category: "General",
    tags: ["level", "lvl", "sb level", "sb lvl", "sb"],
    getValue: (player: any) => Math.floor((player?.leveling?.experience || 0) / 100)
  },
  skyblock_xp: {
    name: "Skyblock XP",
    category: "General",
    tags: ["xp", "experience", "sb xp", "sb experience", "sb"],
    getValue: (player: any) => player?.leveling?.experience || 0
  },
  purse: {
    name: "Purse",
    category: "Economy",
    tags: ["coins", "money", "wallet", "purse", "cash"],
    getValue: (player: any) => Math.floor(player?.currencies?.coin_purse || player?.coin_purse || 0)
  },
  motes: {
    name: "Motes",
    category: "Economy",
    tags: ["motes", "rift", "rift coins"],
    getValue: (player: any) => player?.currencies?.motes_purse || player?.rift?.motes?.purse || 0
  },
  farming_xp: {
    name: "Farming",
    category: "Skills",
    tags: ["farming", "farm", "crop", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_FARMING || player?.experience_skill_farming || 0
  },
  mining_xp: {
    name: "Mining",
    category: "Skills",
    tags: ["mining", "mine", "ore", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_MINING || player?.experience_skill_mining || 0
  },
  combat_xp: {
    name: "Combat",
    category: "Skills",
    tags: ["combat", "fight", "sword", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_COMBAT || player?.experience_skill_combat || 0
  },
  foraging_xp: {
    name: "Foraging",
    category: "Skills",
    tags: ["foraging", "wood", "tree", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_FORAGING || player?.experience_skill_foraging || 0
  },
  fishing_xp: {
    name: "Fishing",
    category: "Skills",
    tags: ["fishing", "fish", "rod", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_FISHING || player?.experience_skill_fishing || 0
  },
  enchanting_xp: {
    name: "Enchanting",
    category: "Skills",
    tags: ["enchanting", "enchant", "magic", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_ENCHANTING || player?.experience_skill_enchanting || 0
  },
  alchemy_xp: {
    name: "Alchemy",
    category: "Skills",
    tags: ["alchemy", "potion", "brew", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_ALCHEMY || player?.experience_skill_alchemy || 0
  },
  taming_xp: {
    name: "Taming",
    category: "Skills",
    tags: ["taming", "pet", "pets", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_TAMING || player?.experience_skill_taming || 0
  },
  carpentry_xp: {
    name: "Carpentry",
    category: "Skills",
    tags: ["carpentry", "furniture", "crafting", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_CARPENTRY || player?.experience_skill_carpentry || 0
  },
  runecrafting_xp: {
    name: "Runecrafting",
    category: "Skills",
    tags: ["runecrafting", "rune", "cosmetic", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_RUNECRAFTING || player?.experience_skill_runecrafting || 0
  },
  social_xp: {
    name: "Social",
    category: "Skills",
    tags: ["social", "guest", "island", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_SOCIAL || player?.experience_skill_social || 0
  },
  hunting_xp: {
    name: "Hunting",
    category: "Skills",
    tags: ["hunting", "hunt", "animal", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_HUNTING || player?.experience_skill_hunting || 0
  },
  zombie_slayer_xp: {
    name: "Zombie Slayer XP",
    category: "Slayers",
    tags: ["zombie", "revenant", "rev", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.zombie?.xp || 0
  },
  spider_slayer_xp: {
    name: "Spider Slayer XP",
    category: "Slayers",
    tags: ["spider", "tarantula", "tara", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.spider?.xp || 0
  },
  wolf_slayer_xp: {
    name: "Wolf Slayer XP",
    category: "Slayers",
    tags: ["wolf", "sven", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.wolf?.xp || 0
  },
  enderman_slayer_xp: {
    name: "Enderman Slayer XP",
    category: "Slayers",
    tags: ["enderman", "voidgloom", "eman", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.enderman?.xp || 0
  },
  blaze_slayer_xp: {
    name: "Blaze Slayer XP",
    category: "Slayers",
    tags: ["blaze", "inferno", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.blaze?.xp || 0
  },
  vampire_slayer_xp: {
    name: "Vampire Slayer XP",
    category: "Slayers",
    tags: ["vampire", "rift", "slayer", "xp"],
    getValue: (player: any) => player?.slayer?.slayer_bosses?.vampire?.xp || 0
  },
  catacombs_xp: {
    name: "Catacombs XP",
    category: "Dungeons",
    tags: ["catacombs", "cata", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.dungeon_types?.catacombs?.experience || 0
  },
  healer_class_xp: {
    name: "Healer Class XP",
    category: "Dungeons",
    tags: ["healer", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.healer?.experience || 0
  },
  mage_class_xp: {
    name: "Mage Class XP",
    category: "Dungeons",
    tags: ["mage", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.mage?.experience || 0
  },
  berserk_class_xp: {
    name: "Berserk Class XP",
    category: "Dungeons",
    tags: ["berserk", "melee", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.berserk?.experience || 0
  },
  archer_class_xp: {
    name: "Archer Class XP",
    category: "Dungeons",
    tags: ["archer", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.archer?.experience || 0
  },
  tank_class_xp: {
    name: "Tank Class XP",
    category: "Dungeons",
    tags: ["tank", "class", "dungeon", "xp"],
    getValue: (player: any) => player?.dungeons?.player_classes?.tank?.experience || 0
  },
  heart_of_the_mountain_xp: {
    name: "Heart of the Mountain XP",
    category: "Mining",
    tags: ["hotm", "heart of the mountain", "dwarven", "mining", "xp"],
    getValue: (player: any) => player?.mining_core?.experience || 0
  },
  mithril_powder: {
    name: "Mithril Powder",
    category: "Mining",
    tags: ["mithril", "powder", "dwarven", "mining"],
    getValue: (player: any) => player?.mining_core?.powder_mithril || 0
  },
  gemstone_powder: {
    name: "Gemstone Powder",
    category: "Mining",
    tags: ["gemstone", "powder", "crystal", "mining"],
    getValue: (player: any) => player?.mining_core?.powder_gemstone || 0
  },
  glacite_powder: {
    name: "Glacite Powder",
    category: "Mining",
    tags: ["glacite", "powder", "minesense", "mining"],
    getValue: (player: any) => player?.mining_core?.powder_glacite || 0
  },
  bank_balance: {
    name: "Bank Balance",
    category: "Economy",
    tags: ["bank", "coins", "money", "shared", "economy"],
    getValue: (player: any, profile: any) => Math.floor((profile?.banking?.balance || player?.profile?.bank_account || 0))
  },
  active_pet: {
    name: "Active Pet",
    category: "Pets",
    tags: ["active", "pet", "current", "companion", "equipped"],
    getValue: (player: any) => {
      const rawPets = player?.pets_data?.pets || [];
      const activePet = rawPets.find((p: any) => p.active);
      
      if (!activePet) return "None";
      
      const name = formatPetName(activePet.type);
      const level = calculatePetLevel(activePet.tier, activePet.exp, activePet.type);
      
      return `[Lvl ${level}] ${name}`;
    }
  },
  pet_roster: {
    name: "Inactive Pets",
    category: "Pets",
    tags: ["inactive", "list", "all pets", "pets"],
    getValue: (player: any) => {
      const rawPets = player?.pets_data?.pets || [];
      const inactivePets = rawPets.filter((p: any) => !p.active);
      
      if (!inactivePets.length) return "None";
      
      return inactivePets.map((pet: any) => {
        const name = formatPetName(pet.type);
        const level = calculatePetLevel(pet.tier, pet.exp, pet.type);
        
        return `[Lvl ${level}] ${name}`;
      });
    }
  },
  magical_power: {
    name: "Magical Power",
    category: "Accessories",
    tags: ["mp", "magical power", "talisman", "talismans", "accessories", "bag"],
    getValue: (player: any) => player?.accessory_bag_storage?.highest_magical_power || 0
  },
  selected_power: {
    name: "Selected Power",
    category: "Accessories",
    tags: ["selected power", "power stone", "stone", "reforge", "accessories"],
    getValue: (player: any) => {
      const power = player?.accessory_bag_storage?.selected_power;
      return power ? power.charAt(0).toUpperCase() + power.slice(1) : "None";
    }
  },
  accessory_list: {
    name: "Accessory List",
    category: "Accessories",
    tags: ["accessories", "list", "talisman", "talismans", "bag"],
    getValue: (player: any) => {
      const talismanData = player?.inventory?.bag_contents?.talisman_bag?.data;
      if (!talismanData) return [];
      
      return talismanData
        .filter((item: any) => item.id || item.tag)
        .map((item: any) => (item.tag?.value?.display?.value?.Name?.value || "Unknown Accessory").replace(/§./g, "")); 
    }
  },
  selected_faction: {
    name: "Selected Faction",
    category: "Crimson Isle",
    tags: ["faction", "crimson", "isle", "mage", "barbarian"],
    getValue: (player: any) => {
      const faction = player?.nether_island_player_data?.selected_faction;
      return faction ? faction.charAt(0).toUpperCase() + faction.slice(1).toLowerCase() : "None";
    }
  },
  mage_reputation: {
    name: "Mage Reputation",
    category: "Crimson Isle",
    tags: ["mage", "reputation", "rep", "crimson", "isle"],
    getValue: (player: any) => player?.nether_island_player_data?.mages_reputation || 0
  },
  barbarian_reputation: {
    name: "Barbarian Reputation",
    category: "Crimson Isle",
    tags: ["barbarian", "reputation", "rep", "crimson", "isle"],
    getValue: (player: any) => player?.nether_island_player_data?.barbarians_reputation || 0
  },
  wither_essence: {
    name: "Wither Essence",
    category: "Essence",
    tags: ["wither", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.WITHER?.current || 0
  },
  undead_essence: {
    name: "Undead Essence",
    category: "Essence",
    tags: ["undead", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.UNDEAD?.current || 0
  },
  dragon_essence: {
    name: "Dragon Essence",
    category: "Essence",
    tags: ["dragon", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.DRAGON?.current || 0
  },
  crimson_essence: {
    name: "Crimson Essence",
    category: "Essence",
    tags: ["crimson", "essence", "nether", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.CRIMSON?.current || 0
  },
  diamond_essence: {
    name: "Diamond Essence",
    category: "Essence",
    tags: ["diamond", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.DIAMOND?.current || 0
  },
  gold_essence: {
    name: "Gold Essence",
    category: "Essence",
    tags: ["gold", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.GOLD?.current || 0
  },
  ice_essence: {
    name: "Ice Essence",
    category: "Essence",
    tags: ["ice", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.ICE?.current || 0
  },
  spider_essence: {
    name: "Spider Essence",
    category: "Essence",
    tags: ["spider", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.SPIDER?.current || 0
  },
  forest_essence: {
    name: "Forest Essence",
    category: "Essence",
    tags: ["forest", "essence", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.FOREST?.current || 0
  },
  bestiary_milestone: {
    name: "Bestiary Milestone",
    category: "Bestiary",
    tags: ["bestiary", "milestone", "mobs", "kills", "level"],
    getValue: (player: any) => player?.bestiary?.milestone.last_claimed_milestone || 0
  },
  unique_minions_crafted: {
    name: "Unique Minions Crafted",
    category: "Minions",
    tags: ["minions", "crafted", "unique", "slots", "generators"],
    getValue: (player: any) => player?.crafted_generators?.length || 0
  },
  farming_collections: {
    name: "Farming Collections",
    category: "Collections",
    tags: ["farming", "collections", "crops"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Farming")
  },
  mining_collections: {
    name: "Mining Collections",
    category: "Collections",
    tags: ["mining", "collections", "ores"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Mining")
  },
  combat_collections: {
    name: "Combat Collections",
    category: "Collections",
    tags: ["combat", "collections", "mobs"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Combat")
  },
  foraging_collections: {
    name: "Foraging Collections",
    category: "Collections",
    tags: ["foraging", "collections", "woods"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Foraging")
  },
  fishing_collections: {
    name: "Fishing Collections",
    category: "Collections",
    tags: ["fishing", "collections", "fishes"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Fishing")
  },
  rift_collections: {
    name: "Rift Collections",
    category: "Collections",
    tags: ["rift", "collections", "dimension"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Rift")
  },
  boss_collections: {
    name: "Boss Collections",
    category: "Collections",
    tags: ["boss", "collections", "dungeon", "mobs", "kuudra", "necron", "sadan", "livid", "thorn", "professor", "scarf", "bonzo"],
    getValue: (player: any, profile: any) => getCollectionsByCategory(player, profile, "Boss")
  },
  profile_created: {
    name: "Profile Created",
    category: "General",
    tags: ["profile", "created", "date", "first join", "age", "start"],
    getValue: (player: any, profile: any) => {
      const timestamp = player?.profile?.first_join || player?.first_join || profile?.created_at;
      
      if (!timestamp) return "Unknown";

      return new Date(timestamp).toLocaleDateString("en-US", { 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      });
    }
  },
  fairy_souls_collected: {
    name: "Fairy Souls Collected",
    category: "General",
    tags: ["fairy", "souls", "collected", "tia", "exploration", "health"],
    getValue: (player: any) => {
      return player?.fairy_soul?.total_collected || player?.fairy_souls_collected || 0;
    }
  },
  fairy_souls_exchanged: {
    name: "Fairy Souls Exchanged",
    category: "General",
    tags: ["fairy", "souls", "exchanged", "tia", "exploration"],
    getValue: (player: any) => {
      return player?.fairy_soul?.fairy_exchanges || player?.fairy_exchanges || 0;
    }
  },
  total_secrets: {
    name: "Total Secrets",
    category: "Dungeons",
    tags: ["secrets", "dungeons", "treasure", "hunter"],
    getValue: (player: any) => player?.dungeons?.secrets || 0
  },
  total_completions: {
    name: "Total Completions",
    category: "Dungeons",
    tags: ["dungeons", "runs", "completions", "total"],
    getValue: (player: any) => {
      const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.tier_completions || {};
      const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions || {};

      let total = 0;
      for (let i = 0; i <= 7; i++) {
        total += normalCompletions[i] || 0;
      }
      for (let i = 1; i <= 7; i++) {
        total += masterCompletions[i] || 0;
      }

      return total;
    }
  },
  total_attempts: {
    name: "Total Attempts",
    category: "Dungeons",
    tags: ["dungeons", "runs", "attempts", "played", "total"],
    getValue: (player: any) => {
      const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.times_played || {};
      const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.times_played || {};

      let total = 0;
      for (let i = 0; i <= 7; i++) {
        total += normalCompletions[i] || 0;
      }
      for (let i = 1; i <= 7; i++) {
        total += masterCompletions[i] || 0;
      }

      return total;
    }
  },
  floor_completions: {
    name: "Floor Completions",
    category: "Dungeons",
    tags: ["dungeons", "floor", "completions", "runs", "highest"],
    getValue: (player: any) => {
      const overview: string[] = [];
      const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.tier_completions || {};
      const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions || {};

      for (let i = 0; i <= 7; i++) {
        const runs = normalCompletions[i];
        if (runs) {
          overview.push(`${i === 0 ? "Entrance" : `Floor ${i}`}: ${runs}`);
        }
      }

      for (let i = 1; i <= 7; i++) {
        const runs = masterCompletions[i];
        if (runs) {
          overview.push(`Master ${i}: ${runs}`);
        }
      }

      return overview.length > 0 ? overview : ["None"];
    }
  },
  secrets_per_run: {
    name: "Secrets per Run",
    category: "Dungeons",
    tags: ["secrets", "ratio", "average", "dungeons", "runs"],
    getValue: (player: any) => {
      const totalSecrets = player?.dungeons?.secrets || 0;
      
      const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.tier_completions || {};
      const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions || {};

      let totalRuns = 0;
      for (let i = 0; i <= 7; i++) {
        totalRuns += normalCompletions[i] || 0;
      }
      for (let i = 1; i <= 7; i++) {
        totalRuns += masterCompletions[i] || 0;
      }

      if (totalRuns === 0) return 0;

      return Math.round((totalSecrets / totalRuns) * 100) / 100;
    }
  },
  highest_floor_completed: {
    name: "Highest Floor Completed",
    category: "Dungeons",
    tags: ["dungeons", "floor", "highest", "completions"],
    getValue: (player: any) => {
      const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions || {};
      const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.tier_completions || {};

      for (let i = 7; i >= 1; i--) {
        if (masterCompletions[i]) {
          return `Master ${i}`;
        }
      }

      for (let i = 7; i >= 1; i--) {
        if (normalCompletions[i]) {
          return `Floor ${i}`;
        }
      }

      if (normalCompletions[0]) return "Entrance";

      return "None";
    }
  },
  selected_dungeon_class: {
    name: "Selected Class",
    category: "Dungeons",
    tags: ["class", "selected", "dungeon", "role"],
    getValue: (player: any) => {
      const currentClass = player?.dungeons?.selected_dungeon_class;
      if (currentClass) {
        return currentClass.charAt(0).toUpperCase() + currentClass.slice(1);
      }
      return "None";
    }
  },
  blood_mobs_killed: {
    name: "Blood Mobs Killed",
    category: "Dungeons",
    tags: ["blood", "mobs", "kills", "watcher", "dungeon"],
    getValue: (player: any) => player?.dungeons?.dungeon_types?.catacombs?.watcher_kills?.total || 0
  },
  fastest_s_plus_times: {
    name: "Fastest S+ Times",
    category: "Dungeons",
    tags: ["fastest", "time", "s+", "s plus", "dungeon", "times"],
    getValue: (player: any) => {
      const times: string[] = [];
      const normalCompletions = player?.dungeons?.dungeon_types?.catacombs?.fastest_time_s_plus || {};
      const masterCompletions = player?.dungeons?.dungeon_types?.master_catacombs?.fastest_time_s_plus || {};

      for (let i = 1; i <= 7; i++) {
        const ms = normalCompletions[i];
        if (ms) {
          const totalSeconds = Math.floor(ms / 1000);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          times.push(`Floor ${i}: ${minutes}:${seconds.toString().padStart(2, '0')}`);
        }
      }

      for (let i = 1; i <= 7; i++) {
        const ms = masterCompletions[i];
        if (ms) {
          const totalSeconds = Math.floor(ms / 1000);
          const minutes = Math.floor(totalSeconds / 60);
          const seconds = totalSeconds % 60;
          times.push(`Master ${i}: ${minutes}:${seconds.toString().padStart(2, '0')}`);
        }
      }

      return times.length > 0 ? times : ["None"];
    }
  },
  dungeon_essence_perks: {
    name: "Dungeon Essence Perks",
    category: "Dungeons",
    tags: ["perks", "essence", "dungeons", "upgrades"],
    getValue: (player: any) => getEssencePerksByCategory(player, "Dungeons")
  },
  mining_essence_perks: {
    name: "Mining Essence Perks",
    category: "Mining",
    tags: ["perks", "essence", "mining", "upgrades"],
    getValue: (player: any) => getEssencePerksByCategory(player, "Mining")
  },
  combat_essence_perks: {
    name: "Combat Essence Perks",
    category: "Combat",
    tags: ["perks", "essence", "combat", "upgrades"],
    getValue: (player: any) => getEssencePerksByCategory(player, "Combat")
  },
  general_essence_perks: {
    name: "General Essence Perks",
    category: "General",
    tags: ["perks", "essence", "general", "upgrades"],
    getValue: (player: any) => getEssencePerksByCategory(player, "General")
  },
  foraging_essence_perks: {
    name: "Foraging Essence Perks",
    category: "Foraging",
    tags: ["perks", "essence", "foraging", "upgrades"],
    getValue: (player: any) => getEssencePerksByCategory(player, "Foraging")
  },
  fishing_essence_perks: {
    name: "Fishing Essence Perks",
    category: "Fishing",
    tags: ["perks", "essence", "fishing", "upgrades"],
    getValue: (player: any) => getEssencePerksByCategory(player, "Fishing")
  },
  dungeon_journals: {
    name: "Dungeon Journals",
    category: "Dungeons",
    tags: ["dungeons", "journals", "lore", "unlocked"],
    getValue: (player: any) => {
      const journalsArray = player?.dungeons?.dungeon_journal?.unlocked_journals;
      if (Array.isArray(journalsArray)) {
        return `${journalsArray.length}/25 Unlocked`;
      }
      return "0 Unlocked";
    }
  },
  cookie_buff_active: {
    name: "Cookie Buff Active",
    category: "General",
    tags: ["cookie", "buff", "profile", "active"],
    getValue: (player: any) => {
      return player?.profile?.cookie_buff_active === true ? "Active" : "Inactive";
    }
  },
  soulflow: {
    name: "Soulflow",
    category: "General",
    tags: ["soulflow", "item", "general"],
    getValue: (player: any) => player?.item_data?.soulflow || 0
  },
  favorite_arrow: {
    name: "Favorite Arrow",
    category: "General",
    tags: ["arrow", "combat", "bow"],
    getValue: (player: any) => {
      const arrow = player?.item_data?.favorite_arrow;
      if (!arrow) return "None";
      return arrow.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
  },
  teleporter_pill_consumed: {
    name: "Teleporter Pill",
    category: "Consumables",
    tags: ["consumables", "teleporter", "pill", "upgrades"],
    getValue: (player: any) => {
      return player?.item_data?.teleporter_pill_consumed === true ? "Consumed" : "Not Consumed";
    }
  },
  refined_jyrre_uses: {
    name: "Refined Jyrre",
    category: "Consumables",
    tags: ["consumables", "winter", "jyrre", "stats"],
    getValue: (player: any) => player?.winter_player_data?.refined_jyrre_uses || 0
  },
  refined_dark_cacao_truffles: {
    name: "Refined Dark Cacao Truffle",
    category: "Consumables",
    tags: ["consumables", "easter", "truffle", "cacao"],
    getValue: (player: any) => player?.events?.easter?.refined_dark_cacao_truffles || 0
  },
  serums_drank: {
    name: "Serums",
    category: "Consumables",
    tags: ["consumables", "experimentation", "serum", "enchanting"],
    getValue: (player: any) => player?.experimentation?.serums_drank || 0
  }
} as Record<string, StatItem>, {
  get(target, prop) {
    if (typeof prop === "string" && !(prop in target)) {
      const formattedName = prop.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
      return {
        name: formattedName,
        category: "Error",
        tags: ["error", "missing"],
        getValue: () => `[${formattedName}] is missing from the library`
      };
    }
    return Reflect.get(target, prop);
  }
});