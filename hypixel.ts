import { promises as fs } from 'fs';
import path from 'path';

export async function getMayorData() {
  // For now, read the local mock data file.
  // Later, this will be replaced with a live fetch() to the Hypixel API.
  const filePath = path.join(process.cwd(), 'src', 'data', 'mayor-data.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileData);
}