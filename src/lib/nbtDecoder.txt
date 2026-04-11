import { parse } from 'prismarine-nbt';

export async function decodeNBT(base64Data: string): Promise<Record<string, any> | Record<string, any>[] | null> {
  if (!base64Data) return null;

  try {
    const buffer = Buffer.from(base64Data, 'base64');
    
    const parsedData = await parse(buffer);

    const raw = (parsedData as any).parsed;

    if (raw?.value?.i?.value?.value) {
      return raw.value.i.value.value;
    }

    return raw ?? null;

  } catch (error) {
    console.error('Failed to decode NBT data:', error);
    return null;
  }
}