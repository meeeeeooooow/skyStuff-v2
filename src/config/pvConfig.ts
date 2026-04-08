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
    name: "Hunting",
    category: "Skills",
    tags: ["hunting", "hunt", "animal", "skill"],
    getValue: (player: any) => player?.player_data?.experience?.SKILL_HUNTING || player?.experience_skill_hunting || 0

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
    getValue: (player: any) => player?.dungeons?.player_classes?.berserk?.experience || 0
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
    getValue: (player: any) => player?.currencies?.essence?.WITHER?.current || 0
  },
  {
    name: "Undead Essence",
    category: "Essence",
    tags: ["undead", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.UNDEAD?.current || 0
  },
  {
    name: "Dragon Essence",
    category: "Essence",
    tags: ["dragon", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.DRAGON?.current || 0
  },
  {
    name: "Crimson Essence",
    category: "Essence",
    tags: ["crimson", "essence", "nether", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.CRIMSON?.current || 0
  },
  {
    name: "Diamond Essence",
    category: "Essence",
    tags: ["diamond", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.DIAMOND?.current || 0
  },
  {
    name: "Gold Essence",
    category: "Essence",
    tags: ["gold", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.GOLD?.current || 0
  },
  {
    name: "Ice Essence",
    category: "Essence",
    tags: ["ice", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.ICE?.current || 0
  },
  {
    name: "Spider Essence",
    category: "Essence",
    tags: ["spider", "essence", "dungeon", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.SPIDER?.current || 0
  },
  {
    name: "Forest Essence",
    category: "Essence",
    tags: ["forest", "essence", "upgrade"],
    getValue: (player: any) => player?.currencies?.essence?.FOREST?.current || 0
  },
  {
    name: "Bestiary Milestone",
    category: "Bestiary",
    tags: ["bestiary", "milestone", "mobs", "kills", "level"],
    getValue: (player: any) => player?.bestiary?.milestone.last_claimed_milestone || 0
  },
  {
    name: "Unique Minions Crafted",
    category: "Minions",
    tags: ["minions", "crafted", "unique", "slots", "generators"],
    getValue: (player: any) => player?.crafted_generators?.length || 0
  },
  {
    name: "Pumpkin Collection",
    category: "Collections",
    tags: ["pumpkin", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.PUMPKIN || 0
  },
  {
    name: "Melon Collection",
    category: "Collections",
    tags: ["melon", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.MELON || 0
  },
  {
    name: "Seeds Collection",
    category: "Collections",
    tags: ["seeds", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.SEEDS || 0
  },
  {
    name: "Mushroom Collection",
    category: "Collections",
    tags: ["mushroom", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.MUSHROOM_COLLECTION || 0
  },
  {
    name: "Cocoa Beans Collection",
    category: "Collections",
    tags: ["cocoa", "beans", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.["INK_SACK:3"] || player?.collection?.INK_SACK_3 || 0
  },
  {
    name: "Cactus Collection",
    category: "Collections",
    tags: ["cactus", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.CACTUS || 0
  },
  {
    name: "Sugar Cane Collection",
    category: "Collections",
    tags: ["sugar cane", "cane", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.SUGAR_CANE || 0
  },
  {
    name: "Nether Wart Collection",
    category: "Collections",
    tags: ["nether wart", "wart", "farming", "crop", "collection"],
    getValue: (player: any) => player?.collection?.NETHER_STALK || 0
  },
  {
    name: "Leather Collection",
    category: "Collections",
    tags: ["leather", "cow", "farming", "animal", "collection"],
    getValue: (player: any) => player?.collection?.LEATHER || 0
  },
  {
    name: "Raw Porkchop Collection",
    category: "Collections",
    tags: ["porkchop", "pork", "pig", "farming", "animal", "collection"],
    getValue: (player: any) => player?.collection?.PORK || 0
  },
  {
    name: "Raw Chicken Collection",
    category: "Collections",
    tags: ["chicken", "farming", "animal", "collection"],
    getValue: (player: any) => player?.collection?.RAW_CHICKEN || 0
  },
  {
    name: "Feather Collection",
    category: "Collections",
    tags: ["feather", "chicken", "farming", "animal", "collection"],
    getValue: (player: any) => player?.collection?.FEATHER || 0
  },
  {
    name: "Mutton Collection",
    category: "Collections",
    tags: ["mutton", "sheep", "farming", "animal", "collection"],
    getValue: (player: any) => player?.collection?.MUTTON || 0
  },
  {
    name: "Raw Rabbit Collection",
    category: "Collections",
    tags: ["rabbit", "farming", "animal", "collection"],
    getValue: (player: any) => player?.collection?.RABBIT || 0
  },
  {
    name: "Sunflower Collection",
    category: "Collections",
    tags: ["sunflower", "farming", "crop", "collection", "flower"],
    getValue: (player: any) => player?.collection?.SUNFLOWER || player?.collection?.["DOUBLE_PLANT:0"] || 0
  },
  {
    name: "Moonflower Collection",
    category: "Collections",
    tags: ["moonflower", "farming", "crop", "collection", "flower"],
    getValue: (player: any) => player?.collection?.MOONFLOWER || 0
  },
  {
    name: "Wild Rose Collection",
    category: "Collections",
    tags: ["wild rose", "rose", "farming", "crop", "collection", "flower"],
    getValue: (player: any) => player?.collection?.WILD_ROSE || player?.collection?.["DOUBLE_PLANT:4"] || 0
  },
  {
    name: "Rotten Flesh Collection",
    category: "Collections",
    tags: ["rotten flesh", "flesh", "zombie", "combat", "collection"],
    getValue: (player: any) => player?.collection?.ROTTEN_FLESH || 0
  },
  {
    name: "Bone Collection",
    category: "Collections",
    tags: ["bone", "skeleton", "combat", "collection"],
    getValue: (player: any) => player?.collection?.BONE || 0
  },
  {
    name: "String Collection",
    category: "Collections",
    tags: ["string", "spider", "combat", "collection"],
    getValue: (player: any) => player?.collection?.STRING || 0
  },
  {
    name: "Spider Eye Collection",
    category: "Collections",
    tags: ["spider eye", "eye", "spider", "combat", "collection"],
    getValue: (player: any) => player?.collection?.SPIDER_EYE || 0
  },
  {
    name: "Gunpowder Collection",
    category: "Collections",
    tags: ["gunpowder", "sulphur", "creeper", "combat", "collection"],
    getValue: (player: any) => player?.collection?.SULPHUR || 0
  },
  {
    name: "Slimeball Collection",
    category: "Collections",
    tags: ["slimeball", "slime", "combat", "collection"],
    getValue: (player: any) => player?.collection?.SLIME_BALL || 0
  },
  {
    name: "Ender Pearl Collection",
    category: "Collections",
    tags: ["ender pearl", "pearl", "enderman", "combat", "collection"],
    getValue: (player: any) => player?.collection?.ENDER_PEARL || 0
  },
  {
    name: "Ghast Tear Collection",
    category: "Collections",
    tags: ["ghast tear", "tear", "ghast", "combat", "collection"],
    getValue: (player: any) => player?.collection?.GHAST_TEAR || 0
  },
  {
    name: "Blaze Rod Collection",
    category: "Collections",
    tags: ["blaze rod", "blaze", "combat", "collection"],
    getValue: (player: any) => player?.collection?.BLAZE_ROD || 0
  },
  {
    name: "Magma Cream Collection",
    category: "Collections",
    tags: ["magma cream", "magma", "cube", "combat", "collection"],
    getValue: (player: any) => player?.collection?.MAGMA_CREAM || 0
  },
  {
    name: "Chili Pepper Collection",
    category: "Collections",
    tags: ["chili pepper", "chili", "pepper", "farming", "inferno", "collection"],
    getValue: (player: any) => player?.collection?.CHILI_PEPPER || 0
  },
    {
    name: "Raw Fish Collection",
    category: "Collections",
    tags: ["fish", "raw fish", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.RAW_FISH || 0
  },
  {
    name: "Raw Salmon Collection",
    category: "Collections",
    tags: ["salmon", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.["RAW_FISH:1"] || player?.collection?.RAW_FISH_1 || 0
  },
  {
    name: "Clownfish Collection",
    category: "Collections",
    tags: ["clownfish", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.["RAW_FISH:2"] || player?.collection?.RAW_FISH_2 || 0
  },
  {
    name: "Pufferfish Collection",
    category: "Collections",
    tags: ["pufferfish", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.["RAW_FISH:3"] || player?.collection?.RAW_FISH_3 || 0
  },
  {
    name: "Prismarine Shard Collection",
    category: "Collections",
    tags: ["prismarine", "shard", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.PRISMARINE_SHARD || 0
  },
  {
    name: "Prismarine Crystals Collection",
    category: "Collections",
    tags: ["prismarine", "crystals", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.PRISMARINE_CRYSTALS || 0
  },
  {
    name: "Clay Collection",
    category: "Collections",
    tags: ["clay", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.CLAY_BALL || 0
  },
  {
    name: "Lily Pad Collection",
    category: "Collections",
    tags: ["lily pad", "lily", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.WATER_LILY || 0
  },
  {
    name: "Ink Sac Collection",
    category: "Collections",
    tags: ["ink sac", "ink", "squid", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.INK_SACK || 0
  },
  {
    name: "Sponge Collection",
    category: "Collections",
    tags: ["sponge", "fishing", "collection"],
    getValue: (player: any) => player?.collection?.SPONGE || 0
  },
  {
    name: "Magmafish Collection",
    category: "Collections",
    tags: ["magmafish", "magma", "fishing", "crimson", "collection"],
    getValue: (player: any) => player?.collection?.MAGMA_FISH || 0
  },
    {
    name: "Oak Wood Collection",
    category: "Collections",
    tags: ["oak", "wood", "foraging", "tree", "collection"],
    getValue: (player: any) => player?.collection?.LOG || 0
  },
  {
    name: "Spruce Wood Collection",
    category: "Collections",
    tags: ["spruce", "wood", "foraging", "tree", "collection"],
    getValue: (player: any) => player?.collection?.["LOG:1"] || player?.collection?.LOG_1 || 0
  },
  {
    name: "Birch Wood Collection",
    category: "Collections",
    tags: ["birch", "wood", "foraging", "tree", "collection"],
    getValue: (player: any) => player?.collection?.["LOG:2"] || player?.collection?.LOG_2 || 0
  },
  {
    name: "Jungle Wood Collection",
    category: "Collections",
    tags: ["jungle", "wood", "foraging", "tree", "collection"],
    getValue: (player: any) => player?.collection?.["LOG:3"] || player?.collection?.LOG_3 || 0
  },
  {
    name: "Acacia Wood Collection",
    category: "Collections",
    tags: ["acacia", "wood", "foraging", "tree", "collection"],
    getValue: (player: any) => player?.collection?.LOG_2 || player?.collection?.["LOG_2:0"] || 0
  },
  {
    name: "Dark Oak Wood Collection",
    category: "Collections",
    tags: ["dark oak", "wood", "foraging", "tree", "collection"],
    getValue: (player: any) => player?.collection?.["LOG_2:1"] || player?.collection?.LOG_2_1 || 0
  },
  {
    name: "Fig Log Collection",
    category: "Collections",
    tags: ["fig", "log", "wood", "foraging", "tree", "collection", "galatea"],
    getValue: (player: any) => player?.collection?.FIG_LOG || 0
  },
  {
    name: "Tender Wood Collection",
    category: "Collections",
    tags: ["tender", "wood", "fig", "foraging", "tree", "collection", "galatea"],
    getValue: (player: any) => player?.collection?.TENDER_WOOD || 0
  },
  {
    name: "Mangrove Log Collection",
    category: "Collections",
    tags: ["mangrove", "log", "wood", "foraging", "tree", "collection", "galatea"],
    getValue: (player: any) => player?.collection?.MANGROVE_LOG || 0
  },
  {
    name: "Vinesap Collection",
    category: "Collections",
    tags: ["vinesap", "mangrove", "foraging", "tree", "collection", "galatea"],
    getValue: (player: any) => player?.collection?.VINESAP || 0
  },
  {
    name: "Lushlilac Collection",
    category: "Collections",
    tags: ["lushlilac", "bush", "foraging", "collection", "galatea", "salt"],
    getValue: (player: any) => player?.collection?.LUSHLILAC || 0
  },
  {
    name: "Sea Lumies Collection",
    category: "Collections",
    tags: ["sea lumies", "foraging", "collection", "galatea", "water"],
    getValue: (player: any) => player?.collection?.SEA_LUMIES || 0
  },
    {
    name: "Cobblestone Collection",
    category: "Collections",
    tags: ["cobblestone", "cobble", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.COBBLESTONE || 0
  },
  {
    name: "Coal Collection",
    category: "Collections",
    tags: ["coal", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.COAL || 0
  },
  {
    name: "Iron Collection",
    category: "Collections",
    tags: ["iron", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.IRON_INGOT || 0
  },
  {
    name: "Gold Collection",
    category: "Collections",
    tags: ["gold", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.GOLD_INGOT || 0
  },
  {
    name: "Diamond Collection",
    category: "Collections",
    tags: ["diamond", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.DIAMOND || 0
  },
  {
    name: "Lapis Lazuli Collection",
    category: "Collections",
    tags: ["lapis", "lazuli", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.["INK_SACK:4"] || player?.collection?.INK_SACK_4 || 0
  },
  {
    name: "Redstone Collection",
    category: "Collections",
    tags: ["redstone", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.REDSTONE || 0
  },
  {
    name: "Emerald Collection",
    category: "Collections",
    tags: ["emerald", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.EMERALD || 0
  },
  {
    name: "Gravel Collection",
    category: "Collections",
    tags: ["gravel", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.GRAVEL || 0
  },
  {
    name: "Sand Collection",
    category: "Collections",
    tags: ["sand", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.SAND || 0
  },
  {
    name: "Ice Collection",
    category: "Collections",
    tags: ["ice", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.ICE || 0
  },
  {
    name: "Obsidian Collection",
    category: "Collections",
    tags: ["obsidian", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.OBSIDIAN || 0
  },
  {
    name: "End Stone Collection",
    category: "Collections",
    tags: ["end stone", "end", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.ENDER_STONE || 0
  },
  {
    name: "Netherrack Collection",
    category: "Collections",
    tags: ["netherrack", "nether", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.NETHERRACK || 0
  },
  {
    name: "Nether Quartz Collection",
    category: "Collections",
    tags: ["quartz", "nether", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.QUARTZ || 0
  },
  {
    name: "Glowstone Collection",
    category: "Collections",
    tags: ["glowstone", "dust", "nether", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.GLOWSTONE_DUST || 0
  },
  {
    name: "Mithril Collection",
    category: "Collections",
    tags: ["mithril", "dwarven", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.MITHRIL_ORE || 0
  },
  {
    name: "Hard Stone Collection",
    category: "Collections",
    tags: ["hard stone", "crystal hollows", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.HARD_STONE || 0
  },
  {
    name: "Gemstone Collection",
    category: "Collections",
    tags: ["gemstone", "crystal hollows", "mining", "ore", "collection"],
    getValue: (player: any) => player?.collection?.GEMSTONE_COLLECTION || 0
  },
  {
    name: "Mycelium Collection",
    category: "Collections",
    tags: ["mycelium", "crimson isle", "mage", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.MYCEL || 0
  },
  {
    name: "Red Sand Collection",
    category: "Collections",
    tags: ["red sand", "crimson isle", "barbarian", "mining", "block", "collection"],
    getValue: (player: any) => player?.collection?.["SAND:1"] || player?.collection?.SAND_1 || 0
  },
  {
    name: "Glacite Collection",
    category: "Collections",
    tags: ["glacite", "tunnels", "minesense", "mining", "collection"],
    getValue: (player: any) => player?.collection?.GLACITE || 0
  },
  {
    name: "Tungsten Collection",
    category: "Collections",
    tags: ["tungsten", "tunnels", "minesense", "mining", "collection"],
    getValue: (player: any) => player?.collection?.TUNGSTEN || 0
  },
  {
    name: "Umber Collection",
    category: "Collections",
    tags: ["umber", "tunnels", "minesense", "mining", "collection"],
    getValue: (player: any) => player?.collection?.UMBER || 0
  },
  {
    name: "Half-Eaten Carrot Collection",
    category: "Collections",
    tags: ["half-eaten carrot", "carrot", "rift", "farming", "collection"],
    getValue: (player: any) => player?.collection?.HALF_EATEN_CARROT || 0
  },
  {
    name: "Wilted Berberis Collection",
    category: "Collections",
    tags: ["wilted berberis", "berberis", "rift", "foraging", "collection"],
    getValue: (player: any) => player?.collection?.WILTED_BERBERIS || 0
  },
  {
    name: "Agaricus Cap Collection",
    category: "Collections",
    tags: ["agaricus cap", "agaricus", "mushroom", "rift", "farming", "collection"],
    getValue: (player: any) => player?.collection?.AGARICUS_CAP || 0
  },
  {
    name: "Caducous Stem Collection",
    category: "Collections",
    tags: ["caducous stem", "caducous", "rift", "foraging", "collection"],
    getValue: (player: any) => player?.collection?.CADUCOUS_STEM || 0
  },
  {
    name: "Hemovibe Collection",
    category: "Collections",
    tags: ["hemovibe", "blood", "vampire", "rift", "combat", "collection"],
    getValue: (player: any) => player?.collection?.HEMOVIBE || 0
  },
  {
    name: "Living Metal Heart Collection",
    category: "Collections",
    tags: ["living metal heart", "living metal", "rift", "mining", "collection"],
    getValue: (player: any) => player?.collection?.LIVING_METAL_HEART || player?.collection?.LIVING_METAL || 0
  },
  {
    name: "Timite Collection",
    category: "Collections",
    tags: ["timite", "rift", "collection"],
    getValue: (player: any) => player?.collection?.TIMITE || 0
  },
  {
    name: "Bonzo Boss Collection (F1)",
    category: "Collections",
    tags: ["bonzo", "boss", "dungeon", "f1", "m1", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["1"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["1"] || 0;
      return normal + (master * 2);
    }
  },
  {
    name: "Scarf Boss Collection (F2)",
    category: "Collections",
    tags: ["scarf", "boss", "dungeon", "f2", "m2", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["2"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["2"] || 0;
      return normal + (master * 2);
    }
  },
  {
    name: "The Professor Boss Collection (F3)",
    category: "Collections",
    tags: ["professor", "boss", "dungeon", "f3", "m3", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["3"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["3"] || 0;
      return normal + (master * 2);
    }
  },
  {
    name: "Thorn Boss Collection (F4)",
    category: "Collections",
    tags: ["thorn", "boss", "dungeon", "f4", "m4", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["4"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["4"] || 0;
      return normal + (master * 2);
    }
  },
  {
    name: "Livid Boss Collection (F5)",
    category: "Collections",
    tags: ["livid", "boss", "dungeon", "f5", "m5", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["5"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["5"] || 0;
      return normal + (master * 2);
    }
  },
  {
    name: "Sadan Boss Collection (F6)",
    category: "Collections",
    tags: ["sadan", "boss", "dungeon", "f6", "m6", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["6"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["6"] || 0;
      return normal + (master * 2);
    }
  },
  {
    name: "Necron Boss Collection (F7)",
    category: "Collections",
    tags: ["necron", "wither lord", "boss", "dungeon", "f7", "m7", "collection"],
    getValue: (player: any) => {
      const normal = player?.dungeons?.dungeon_types?.catacombs?.tier_completions?.["7"] || 0;
      const master = player?.dungeons?.dungeon_types?.master_catacombs?.tier_completions?.["7"] || 0;
      return normal + (master * 2);
    }
  },
  {
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
  {
    name: "Fairy Souls Collected",
    category: "General",
    tags: ["fairy", "souls", "collected", "tia", "exploration", "health"],
    getValue: (player: any) => {
      return player?.fairy_soul?.total_collected || player?.fairy_souls_collected || 0;
    }
  },
  {
    name: "Fairy Souls Exchanged",
    category: "General",
    tags: ["fairy", "souls", "exchanged", "tia", "exploration"],
    getValue: (player: any) => {
      return player?.fairy_soul?.fairy_exchanges || player?.fairy_exchanges || 0;
    }
  }
];