"use client";

import { createContext, useContext, ReactNode } from "react";
import { SkyblockProfile } from "@/lib/hypixel";

interface ProfileContextType {
  username: string;
  profiles: SkyblockProfile[];
  activeProfile: string;
  setActiveProfile: (profile: string) => void;
  activeLayout: string;
  setActiveLayout: (layout: string) => void;
  allLayouts: Record<string, string[]>;
  isEditorOpen: boolean;
  setIsEditorOpen: (isOpen: boolean) => void;
  currentProfile?: SkyblockProfile;
  playerData: Record<string, any>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ 
  children, 
  value 
}: { 
  children: ReactNode; 
  value: ProfileContextType; 
}) {
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}