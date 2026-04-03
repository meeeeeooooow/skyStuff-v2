import Link from "next/link";
import Image from "next/image";
import { getMayorData } from "@/lib/hypixel";
import { cleanText } from "@/lib/formatting";
import ElectionTimer from "@/components/ElectionTimer";
interface Perk {
  name: string;
  description: string;
}

export default async function MayorTile() {
  const data = await getMayorData();

  return (
    <Link href="/mayor">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-colors cursor-pointer flex flex-row gap-6">
        <div className="flex flex-col items-center justify-center w-1/3 border-r border-gray-700 pr-4">
          <Image src={`/mayors/${data?.mayor?.name?.toLowerCase()}.webp`} width={80} height={80} className="w-20 h-20 rounded-md" alt={data?.mayor?.name} />
          <h3 className="text-xl font-semibold">Current Mayor: {data?.mayor?.name}</h3>
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {data?.mayor?.perks?.map((perk: Perk) => (
              <li key={perk.name}>
                <strong>{cleanText(perk.name)}</strong>
              </li>
            ))}
          </ul>
          {data?.mayor?.election?.year && <ElectionTimer targetYear={data.mayor.election.year} />}
        </div>
      </div>
    </Link>
  );
}