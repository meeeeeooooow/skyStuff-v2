import Link from "next/link";

interface LinkTileProps {
  title: string;
  description: string;
  href: string;
}

export default function LinkTile({ title, description, href }: LinkTileProps) {
  return (
    <Link href={href}>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-colors">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}