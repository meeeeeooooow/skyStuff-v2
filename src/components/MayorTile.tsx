import Link from "next/link";
import { getMayorData } from "@/lib/hypixel";

export default async function MayorTile() {
  const data = await getMayorData();

  return (
    <Link href="/mayor">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-colors cursor-pointer">
        <div className="flex items-center gap-4 mb-4">
          <img src={`https://mc-heads.net/avatar/${data.mayor.name}/64`} className="rounded-md" alt={data.mayor.name} />
          <h3 className="text-xl font-semibold">Current Mayor: {data.mayor.name}</h3>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {data.mayor.perks.map((perk: any) => (
            <li key={perk.name}>
              <strong>{perk.name}</strong>: {perk.description}
            </li>
          ))}
        </ul>
        <p className="text-orange-400 mt-4">Election booth closes in: 2d 4h</p>
      </div>
    </Link>
  );
}