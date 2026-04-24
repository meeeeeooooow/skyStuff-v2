"use client";

import { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import PlayerModel from "./PlayerModel";
import { pvLayouts } from "@/config/pvConfig";
import { pvLibrary } from "@/config/pvLibrary";
import LayoutEditor from "./LayoutEditor";

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

  const [activeLayout, setActiveLayout] = useState<string>("default");
  const [customLayouts, setCustomLayouts] = useState<Record<string, string[]>>({});
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [isStorageEnabled, setIsStorageEnabled] = useState<boolean>(false);
  
  useEffect(() => {
    const allowStorage = localStorage.getItem("pv_allow_storage");
    if (allowStorage === "true") {
      setIsStorageEnabled(true);
      try {
        const savedLayouts = localStorage.getItem("pv_custom_layouts");
        if (savedLayouts) {
          setCustomLayouts(JSON.parse(savedLayouts));
        }
      } catch (error) {
        console.error("Failed to parse custom layouts from localStorage", error);
      }
    }
  }, []);

  const handleToggleStorage = (enabled: boolean) => {
    setIsStorageEnabled(enabled);
    localStorage.setItem("pv_allow_storage", enabled.toString());
    if (!enabled) {
      localStorage.removeItem("pv_custom_layouts");
    } else {
      if (Object.keys(customLayouts).length > 0) {
        localStorage.setItem("pv_custom_layouts", JSON.stringify(customLayouts));
      }
    }
  };

  const allLayouts = { ...pvLayouts, ...customLayouts };
  const layoutKeys = allLayouts[activeLayout] || allLayouts["default"];
  
  const categories = Array.from(new Set(layoutKeys.map(key => pvLibrary[key].category)));

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
        activeLayout={activeLayout}
        allLayouts={allLayouts}
        onLayoutSelect={setActiveLayout}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 flex flex-col gap-2">
          {categories.map((category) => (
            <div key={category} className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
              {layoutKeys.filter(key => pvLibrary[key].category === category).map((key) => {
                const item = pvLibrary[key];
                const rawValue = item.getValue(playerData, currentProfile);
                
                return Array.isArray(rawValue) ? (
                  <div key={key} className="text-gray-300">
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
                  <div key={key} className="text-gray-300">
                    <span className="font-semibold">{item.name}:</span> {typeof rawValue === "string" 
                      ? <div className="inventory-list mt-1" dangerouslySetInnerHTML={{ __html: rawValue }} />
                      : typeof rawValue === "number" 
                      ? new Intl.NumberFormat('en-US').format(rawValue) 
                      : (typeof rawValue === "object" && rawValue !== null ? JSON.stringify(rawValue) : rawValue)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex justify-center w-full lg:w-auto">
          <PlayerModel username={username} level={pvLibrary["skyblock_level"]?.getValue(playerData, currentProfile) || 0} />
        </div>
      </div>

      <LayoutEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={(name, keys) => {
          const layoutId = name.toLowerCase();
          const updatedLayouts = { ...customLayouts, [layoutId]: keys };
          
          setCustomLayouts(updatedLayouts);
          setActiveLayout(layoutId);
          setIsEditorOpen(false);
          if (isStorageEnabled) {
            localStorage.setItem("pv_custom_layouts", JSON.stringify(updatedLayouts));
          }
        }}
        isStorageEnabled={isStorageEnabled}
        onToggleStorage={handleToggleStorage}
      />
    </>
  );
}