"use client";

import { useState } from "react";

export interface Profile {
  cute_name: string;
  selected: boolean;
  game_mode?: string;
}

export default function ProfileHeader({ username, profiles }: { username: string; profiles: Profile[] }) {
  const [activeProfile, setActiveProfile] = useState(
    profiles.find((profile) => profile.selected)?.cute_name || ""
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
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
  );
}