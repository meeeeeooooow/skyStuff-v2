import React from 'react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
        <p>
          &copy; 2026 SkyStuff 
          <span className="mx-2">&bull;</span> 
          Not affiliated with or endorsed by Hypixel Inc. 
          <span className="mx-2">&bull;</span> 
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </p>
      </div>
    </footer>
  );
}