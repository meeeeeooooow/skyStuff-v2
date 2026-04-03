import React from 'react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        
        <div className="w-full md:w-1/3 text-center md:text-left">
          &copy; 2026 SkyStuff
        </div>

        <div className="w-full md:w-1/3 flex justify-center gap-6">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>

        <div className="w-full md:w-1/3 text-center md:text-right">
          Not affiliated with Hypixel or Mojang
        </div>

      </div>
    </footer>
  );
}