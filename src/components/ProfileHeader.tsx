"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { getPlayerProfile } from "@/lib/hypixel";
import { useProfile } from "@/context/ProfileContext";

export default function ProfileHeader() {
  const { username, profiles, activeProfile, setActiveProfile, activeLayout, allLayouts, setActiveLayout, setIsEditorOpen } = useProfile();

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
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
          router.push(`/profile/${encodeURIComponent(searchQuery)}`);
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
      
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
        <div className="relative w-full md:w-auto" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-center gap-2 w-full md:w-auto bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            Layout: <span className="font-semibold text-white">{activeLayout.charAt(0).toUpperCase() + activeLayout.slice(1)}</span>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 md:right-0 left-0 md:left-auto top-full mt-2 w-full md:w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 flex flex-col py-1 overflow-hidden">
              {Object.keys(allLayouts).map((layoutKey) => (
                <button
                  key={layoutKey}
                  onClick={() => {
                    setActiveLayout(layoutKey);
                    setIsDropdownOpen(false);
                  }}
                  className={`px-4 py-2 text-left text-sm transition-colors ${
                    activeLayout === layoutKey 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {layoutKey.charAt(0).toUpperCase() + layoutKey.slice(1)}
                </button>
              ))}
              <hr className="border-gray-700 my-1" />
              <button
                onClick={() => {
                  setIsEditorOpen(true);
                  setIsDropdownOpen(false);
                }}
              className="px-4 py-2 text-left text-sm text-gray-300 font-medium hover:text-white hover:bg-gray-700 transition-colors"
              >
                Create Custom Layout
              </button>
            </div>
          )}
        </div>

        <form onSubmit={handleSearch} className="relative w-full md:w-64">
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
    </div>
  );
}