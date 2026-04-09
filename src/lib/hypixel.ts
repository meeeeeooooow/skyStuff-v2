"use server";

export async function getMayorData() {
  try {
    const response = await fetch('https://api.hypixel.net/v2/resources/skyblock/election', {
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      return { success: false, error: 'Failed to fetch Mayor data' };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { success: false, error: 'Failed to fetch Mayor data' };
  }
}

export async function getPlayerProfile(username: string) {
  const apiKey = process.env.HYPIXEL_API_KEY;
  if (!apiKey) {
    return { error: 'Server configuration error: Hypixel API key is missing.' };
  }

  let mojangUuid: string;
  try {
    const mojangResponse = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
    if (!mojangResponse.ok) {
      return { error: 'Minecraft account does not exist.' };
    }
    const mojangData = await mojangResponse.json();
    mojangUuid = mojangData.id;
  } catch (error) {
    return { error: 'Minecraft account does not exist.' };
  }

  try {
    const hypixelResponse = await fetch(`https://api.hypixel.net/v2/skyblock/profiles?uuid=${mojangUuid}`, {
      headers: {
        'API-Key': apiKey,
      },
      next: { revalidate: 60 }
    });

    if (hypixelResponse.status === 403) {
      return { error: 'Invalid Hypixel API key.' };
    }
    if (hypixelResponse.status === 429) {
      return { error: 'Hypixel API rate limit reached. Please try again later.' };
    }
    if (!hypixelResponse.ok) {
      return { error: 'Failed to fetch profile data from Hypixel.' };
    }

    const hypixelData = await hypixelResponse.json();

    if (!hypixelData.success) {
      return { error: 'Hypixel API request failed.' };
    }
    if (!hypixelData.profiles || hypixelData.profiles.length === 0) {
      return { error: 'No SkyBlock profiles found for this player.' };
    }

    return { ...hypixelData, uuid: mojangUuid };
  } catch (error) {
    return { error: 'An error occurred while communicating with Hypixel.' };
  }
}