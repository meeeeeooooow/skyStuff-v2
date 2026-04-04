import Link from 'next/link';
import { Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 fixed top-0 w-full z-50 h-14">
      <div className="w-full px-4 flex justify-between items-center h-full">
        <Link href="/" className="text-2xl font-bold text-white">
          SkyStuff
        </Link>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Settings size={28} />
        </button>
      </div>
    </nav>
  );
}