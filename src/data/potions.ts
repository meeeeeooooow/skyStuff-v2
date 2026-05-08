export interface BrewingRecipe {
  potionName: string;
  ingredient: string;
  basePotion: string;
  alchemyXpYield: number; // Explicitly Alchemy Skill XP
}

export const POTION_RECIPES: BrewingRecipe[] = [
  // Speed Potions
  { potionName: "Speed", ingredient: "Sugar", basePotion: "Awkward Potion", alchemyXpYield: 5 },
  { potionName: "Speed", ingredient: "Enchanted Sugar", basePotion: "Awkward Potion", alchemyXpYield: 300 },
  { potionName: "Speed", ingredient: "Enchanted Sugar Cane", basePotion: "Awkward Potion", alchemyXpYield: 15000 },

  // Jump Boost Potions
  { potionName: "Jump Boost", ingredient: "Rabbit's Foot", basePotion: "Awkward Potion", alchemyXpYield: 12 },
  { potionName: "Jump Boost", ingredient: "Enchanted Rabbit Foot", basePotion: "Awkward Potion", alchemyXpYield: 600 },

  // Experience Potion
  { potionName: "Experience", ingredient: "Lapis Lazuli", basePotion: "Awkward Potion", alchemyXpYield: 5 },

  // Wounded Potion
  { potionName: "Wounded", ingredient: "Netherrack", basePotion: "Awkward Potion", alchemyXpYield: 5 },

  // Night Vision Potion
  { potionName: "Night Vision", ingredient: "Golden Carrot", basePotion: "Awkward Potion", alchemyXpYield: 10 },

  // Invisibility Potion
  { potionName: "Invisibility", ingredient: "Fermented Spider Eye", basePotion: "Awkward Potion", alchemyXpYield: 10 },

  // Poison Potion
  { potionName: "Poison", ingredient: "Spider Eye", basePotion: "Awkward Potion", alchemyXpYield: 10 },

  // Healing Potions
  { potionName: "Healing", ingredient: "Glistering Melon Slice", basePotion: "Awkward Potion", alchemyXpYield: 10 },
  { potionName: "Healing", ingredient: "Enchanted Melon Slice", basePotion: "Awkward Potion", alchemyXpYield: 250 },
  { potionName: "Healing", ingredient: "Enchanted Glistering Melon Slice", basePotion: "Awkward Potion", alchemyXpYield: 500 },

  // Fire Resistance Potion
  { potionName: "Fire Resistance", ingredient: "Magma Cream", basePotion: "Awkward Potion", alchemyXpYield: 10 },

  // Water Breathing Potions
  { potionName: "Water Breathing", ingredient: "Pufferfish", basePotion: "Awkward Potion", alchemyXpYield: 12 },
  { potionName: "Water Breathing", ingredient: "Enchanted Pufferfish", basePotion: "Awkward Potion", alchemyXpYield: 600 },

  // Regeneration Potions
  { potionName: "Regeneration", ingredient: "Ghast Tear", basePotion: "Awkward Potion", alchemyXpYield: 30 },
  { potionName: "Regeneration", ingredient: "Enchanted Ghast Tear", basePotion: "Awkward Potion", alchemyXpYield: 120 },

  // Strength Potions
  { potionName: "Strength", ingredient: "Blaze Powder", basePotion: "Awkward Potion", alchemyXpYield: 10 },
  { potionName: "Strength", ingredient: "Enchanted Blaze Powder", basePotion: "Awkward Potion", alchemyXpYield: 500 },
  { potionName: "Strength", ingredient: "Enchanted Blaze Rod", basePotion: "Awkward Potion", alchemyXpYield: 23000 },

  // Weakness Potions
  { potionName: "Weakness", ingredient: "Fermented Spider Eye", basePotion: "Water Bottle", alchemyXpYield: 10 },
  { potionName: "Weakness", ingredient: "Enchanted Spider Eye", basePotion: "Water Bottle", alchemyXpYield: 0 },
  { potionName: "Weakness", ingredient: "Enchanted Fermented Spider Eye", basePotion: "Water Bottle", alchemyXpYield: 15000 },

  // Blindness Potions
  { potionName: "Blindness", ingredient: "Ink Sac", basePotion: "Awkward Potion", alchemyXpYield: 0 },
  { potionName: "Blindness", ingredient: "Enchanted Ink Sac", basePotion: "Awkward Potion", alchemyXpYield: 0 },

  // Modifier Potions (Slowness & Damage - Yield unknown/0 from Wiki)
  { potionName: "Slowness", ingredient: "Fermented Spider Eye", basePotion: "Speed Potions (I-VIII)", alchemyXpYield: 0 },
  { potionName: "Damage", ingredient: "Fermented Spider Eye", basePotion: "Healing Potions (I-VIII)", alchemyXpYield: 0 },

  // Miscellaneous Potions
  { potionName: "Haste", ingredient: "Coal", basePotion: "Awkward Potion", alchemyXpYield: 5 },
  { potionName: "Burning", ingredient: "Red Sand", basePotion: "Awkward Potion", alchemyXpYield: 5 },
  { potionName: "Knockback", ingredient: "Slimeball", basePotion: "Awkward Potion", alchemyXpYield: 10 },
  { potionName: "Venomous", ingredient: "Poisonous Potato", basePotion: "Awkward Potion", alchemyXpYield: 20 },
  { potionName: "Stun", ingredient: "Obsidian", basePotion: "Awkward Potion", alchemyXpYield: 15 },
  { potionName: "Archery", ingredient: "Feather", basePotion: "Awkward Potion", alchemyXpYield: 10 },

  // Absorption Potions
  { potionName: "Absorption", ingredient: "Gold Ingot", basePotion: "Awkward Potion", alchemyXpYield: 5 },
  { potionName: "Absorption", ingredient: "Enchanted Gold Ingot", basePotion: "Awkward Potion", alchemyXpYield: 300 },
  { potionName: "Absorption", ingredient: "Enchanted Gold Block", basePotion: "Awkward Potion", alchemyXpYield: 15000 },

  // Dodge Potion
  { potionName: "Dodge", ingredient: "Raw Salmon", basePotion: "Awkward Potion", alchemyXpYield: 5 },

  // Resistance Potions
  { potionName: "Resistance", ingredient: "Cactus", basePotion: "Awkward Potion", alchemyXpYield: 10 },
  { potionName: "Resistance", ingredient: "Enchanted Cactus Green", basePotion: "Awkward Potion", alchemyXpYield: 250 },
  { potionName: "Resistance", ingredient: "Enchanted Cactus", basePotion: "Awkward Potion", alchemyXpYield: 500 },

  // Mana Potions
  { potionName: "Mana", ingredient: "Raw Mutton", basePotion: "Awkward Potion", alchemyXpYield: 0 },
  { potionName: "Mana", ingredient: "Enchanted Raw Mutton", basePotion: "Awkward Potion", alchemyXpYield: 0 },
  { potionName: "Mana", ingredient: "Enchanted Cooked Mutton", basePotion: "Awkward Potion", alchemyXpYield: 0 },

  // Agility Potion
  { potionName: "Agility", ingredient: "Enchanted Cake", basePotion: "Awkward Potion", alchemyXpYield: 400 }
];