"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import PlayerModel from "./PlayerModel";
import { pvConfig } from "@/config/pvConfig";

const categories = Array.from(new Set(pvConfig.map(item => item.category)));

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
                
                return Array.isArray(rawValue) ? (
                  <div key={item.name} className="text-gray-300">
                    <span className="font-semibold">{item.name}:</span>
                    {rawValue.length === 0 ? (
                      <p className="ml-4 text-gray-500">None</p>
                    ) : (
                      rawValue.map((val, idx) => (
                        <p key={idx} className="ml-4">
                          {typeof val === "object" && val !== null ? JSON.stringify(val) : String(val)}
                        </p>
                      ))
                    )}
                  </div>
                ) : (
                  <p key={item.name} className="text-gray-300">
                    <span className="font-semibold">{item.name}:</span> {typeof rawValue === "number" 
                      ? new Intl.NumberFormat('en-US').format(rawValue) 
                      : (typeof rawValue === "object" && rawValue !== null ? JSON.stringify(rawValue) : rawValue)}
                  </p>
                );
              })}
            </div>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex justify-center w-full lg:w-auto">
          <PlayerModel username={username} level={pvConfig.find(item => item.name === "Skyblock Level")?.getValue(playerData, currentProfile) || 0} />
        </div>
      </div>
      <pre className="bg-gray-900 p-6 rounded-xl overflow-x-auto text-sm text-gray-300 border border-gray-800 mt-8">
        {JSON.stringify(currentProfile, null, 2)}
      </pre>
    </>
  );
}