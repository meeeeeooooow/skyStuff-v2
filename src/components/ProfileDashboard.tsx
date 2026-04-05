"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import PlayerModel from "./PlayerModel";

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
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex justify-center w-full lg:w-auto mt-4">
          <PlayerModel username={username} level={Math.floor((playerData?.leveling?.experience || 0) / 100) || 0} />
        </div>
      </div>
      <pre className="bg-gray-900 p-6 rounded-xl overflow-x-auto text-sm text-gray-300 border border-gray-800 mt-8">
        {JSON.stringify(currentProfile, null, 2)}
      </pre>
    </>
  );
}