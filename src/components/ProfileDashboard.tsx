"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import PlayerModel from "./PlayerModel";
import { pvConfig } from "@/config/pvConfig";

export default function ProfileDashboard({ 
  username, 
  profileData,
  uuid
}: { 
  username: string; 
  profileData: any; 
  uuid: string;
}) {
  const [activeProfile, setActiveProfile] = useState<string>(
    profileData.profiles.find((profile: any) => profile.selected)?.cute_name || ""
  );

  const currentProfile = profileData.profiles.find(
    (profile: any) => profile.cute_name === activeProfile
  );

  const playerData = currentProfile?.members?.[uuid] || {};

  const categories = Array.from(new Set(pvConfig.map(item => item.category)));

  return (
    <>
      <ProfileHeader 
        username={username} 
        profiles={profileData.profiles} 
        activeProfile={activeProfile} 
        onProfileSelect={setActiveProfile} 
      />
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 flex flex-col gap-2">
          {categories.map((category) => (
            <div key={category} className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
              {pvConfig.filter(item => item.category === category).map((item) => {
                const rawValue = item.getValue(playerData, currentProfile);
                const displayValue = typeof rawValue === "number" 
                  ? new Intl.NumberFormat('en-US').format(rawValue) 
                  : (typeof rawValue === "object" && rawValue !== null ? JSON.stringify(rawValue) : rawValue);
                return (
                  <p key={item.name} className="text-gray-300">
                    {item.name}: {displayValue}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex justify-center w-full lg:w-auto">
          <PlayerModel username={username} level={Math.floor((playerData?.leveling?.experience || 0) / 100) || 0} />
        </div>
      </div>
      <pre className="bg-gray-900 p-6 rounded-xl overflow-x-auto text-sm text-gray-300 border border-gray-800 mt-8">
        {JSON.stringify(currentProfile, null, 2)}
      </pre>
    </>
  );
}