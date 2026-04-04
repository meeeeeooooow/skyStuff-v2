"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { getPlayerProfile } from "@/lib/hypixel";

export default function Searchbar() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    if (!username.trim()) return;
    
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await getPlayerProfile(username);
      
      if ("error" in response) {
        setErrorMessage(response.error);
      } else {
        router.push(`/profile/${username}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h1 className="text-4xl font-bold">Profile Viewer</h1>
      <div className="relative w-full max-w-2xl">
        {isLoading ? (
          <Loader2
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 animate-spin"
            size={20}
          />
        ) : (
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        )}
        <input
          type="text"
          placeholder="Enter Minecraft Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          className="bg-gray-800 border border-gray-700 rounded-full pl-12 pr-6 py-4 w-full"
        />
      </div>
      {errorMessage && (
        <p className="text-red-400">{errorMessage}</p>
      )}
      <div className="flex gap-3 mt-2">
        <span className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
          name1
        </span>
        <span className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
          name2
        </span>
        <span className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
          name3
        </span>
      </div>
    </div>
  );
}