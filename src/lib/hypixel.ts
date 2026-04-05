"use server";

import { promises as fs } from 'fs';
import path from 'path';
import profileData from '../data/profile-data.json';

export async function getMayorData() {
  // For now, read the local mock data file.
  // Later, this will be replaced with a live fetch() to the Hypixel API.
  const filePath = path.join(process.cwd(), 'src', 'data', 'mayor-data.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileData);
}

export async function getPlayerProfile(username: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const lowerName = username.toLowerCase();
  
  if (lowerName === 'error' || lowerName === 'notch') {
    return { error: 'Minecraft account does not exist.' };
  }
  if (lowerName === 'nohypixel') {
    return { error: 'No Hypixel data found for this player.' };
  }

  // Extracting the UUID from our mock data to simulate a Mojang API fetch.
  // This guarantees the UUID matches the members object in your mock JSON!
  const mojangUuid = Object.keys(profileData.profiles[0].members)[0];

  const data = profileData as any;
  return { ...data, uuid: mojangUuid };
}