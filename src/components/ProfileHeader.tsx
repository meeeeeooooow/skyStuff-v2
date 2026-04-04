"use client";

import { useState, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { getPlayerProfile } from "@/lib/hypixel";

export interface Profile {
  cute_name: string;
  selected: boolean;
  game_mode?: string;
}

export default function ProfileHeader({ username, profiles }: { username: string; profiles: Profile[] }) {
  const [activeProfile, setActiveProfile] = useState(
    profiles.find((profile) => profile.selected)?.cute_name || ""
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchError("");

    try {
      const response = await getPlayerProfile(searchQuery);
      
      if ("error" in response) {
        setSearchError(response.error);
        setTimeout(() => {
          inputRef.current?.focus();
          inputRef.current?.select();
        }, 0);
      } else {
        router.push(`/profile/${searchQuery}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <h1 className="text-3xl font-bold">{username}</h1>
        <div className="flex gap-2 overflow-x-auto">
          {profiles.map((profile) => (
            <button
              key={profile.cute_name}
              onClick={() => setActiveProfile(profile.cute_name)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeProfile === profile.cute_name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {profile.cute_name}
              {profile.game_mode && (
                <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full ml-2 uppercase">
                  {profile.game_mode}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <form onSubmit={handleSearch} className="relative w-full md:w-64 mt-4 md:mt-0">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search player..."
          className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-3 pr-10 text-sm text-white focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          {isSearching ? <Loader2 className="animate-spin" size={16} /> : <Search size={16} />}
        </button>
        {searchError && (
          <p className="mt-2 text-center md:mt-0 md:absolute md:-bottom-6 md:right-0 text-xs text-red-400 whitespace-nowrap">
            {searchError}
          </p>
        )}
      </form>
    </div>
  );
}