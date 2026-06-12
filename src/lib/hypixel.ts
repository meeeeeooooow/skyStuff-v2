"use server";

import { decodeNBT } from './nbtDecoder';

interface MojangResponse {
  id: string;
  name: string;
}

interface HypixelProfileResponse {
  success: boolean;
  profiles: Record<string, any>[];
  cause?: string;
}

interface HypixelMayorResponse {
  success: boolean;
  mayor: Record<string, any>;
  current_election?: Record<string, any>;
}

export async function getMayorData(): Promise<HypixelMayorResponse | { success: false, error: string }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch('https://api.hypixel.net/v2/resources/skyblock/election', {
      next: { revalidate: 3600 },
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return { success: false, error: 'Failed to fetch Mayor data' };
    }
    const data = (await response.json()) as HypixelMayorResponse;
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, error: 'Request timed out while fetching Mayor data.' };
    }
    return { success: false, error: 'Failed to fetch Mayor data' };
  }
}

export async function getPlayerProfile(username: string): Promise<(HypixelProfileResponse & { uuid: string }) | { error: string }> {
  const apiKey = process.env.HYPIXEL_API_KEY;
  if (!apiKey) {
    return { error: 'Server configuration error: Hypixel API key is missing.' };
  }

  let mojangUuid: string;
  const mojangController = new AbortController();
  const mojangTimeout = setTimeout(() => mojangController.abort(), 8000);

  try {
    const mojangResponse = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`, {
      next: { revalidate: 86400 },
      signal: mojangController.signal
    });
    clearTimeout(mojangTimeout);

    if (!mojangResponse.ok) {
      return { error: 'Minecraft account does not exist.' };
    }
    const mojangData = (await mojangResponse.json()) as MojangResponse;
    mojangUuid = mojangData.id;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { error: 'Request timed out while verifying Minecraft account.' };
    }
    return { error: 'Minecraft account does not exist.' };
  }

  const hypixelController = new AbortController();
  const hypixelTimeout = setTimeout(() => hypixelController.abort(), 8000);

  try {
    const hypixelResponse = await fetch(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${mojangUuid}`, {
      headers: {
        'API-Key': apiKey,
      },
      next: { revalidate: 60 },
      signal: hypixelController.signal
    });
    clearTimeout(hypixelTimeout);

    if (hypixelResponse.status === 403) {
      return { error: 'Invalid Hypixel API key.' };
    }
    if (hypixelResponse.status === 429) {
      return { error: 'Hypixel API rate limit reached. Please try again later.' };
    }
    if (!hypixelResponse.ok) {
      return { error: 'Failed to fetch profile data from Hypixel.' };
    }

    const hypixelData = (await hypixelResponse.json()) as HypixelProfileResponse;

    if (!hypixelData.success) {
      return { error: hypixelData.cause || 'Hypixel API request failed.' };
    }
    if (!hypixelData.profiles || hypixelData.profiles.length === 0) {
      return { error: 'No SkyBlock profiles found for this player.' };
    }

    // Removed wardrobe_contents from coreInventories
    const coreInventories = ['inv_contents', 'inv_armor', 'equipment_contents', 'ender_chest_contents', 'personal_vault_contents'];
    const bagInventories = ['talisman_bag', 'potion_bag', 'fishing_bag'];

    for (const profile of hypixelData.profiles) {
      const player = profile.members?.[mojangUuid];
      
      // 1. Decode standard inventories
      for (const key of coreInventories) {
        if (player?.inventory?.[key]?.data) {
          player.inventory[key].data = await decodeNBT(player.inventory[key].data);
        }
      }

      // 2. Decode bags
      for (const key of bagInventories) {
        if (player?.inventory?.bag_contents?.[key]?.data) {
          player.inventory.bag_contents[key].data = await decodeNBT(player.inventory.bag_contents[key].data);
        }
      }

      // 3. Decode the new Wardrobe (Loadout)
      const loadoutArmor = player?.inventory?.loadout?.armor || player?.loadout?.armor;
      if (loadoutArmor) {
        const armorPieces = ['HELMET', 'CHESTPLATE', 'LEGGINGS', 'BOOTS'];
        
        for (const slotId in loadoutArmor) {
          for (const piece of armorPieces) {
            if (loadoutArmor[slotId]?.[piece]?.data) {
              loadoutArmor[slotId][piece].data = await decodeNBT(loadoutArmor[slotId][piece].data);
            }
          }
        }
      }
    }

    return { ...hypixelData, uuid: mojangUuid };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { error: 'Request timed out while fetching Hypixel profile data.' };
    }
    return { error: 'An error occurred while communicating with Hypixel.' };
  }
}