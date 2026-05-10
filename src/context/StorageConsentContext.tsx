"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. A state for the Active Prompt
export interface PromptState {
  isOpen: boolean;
  title?: string;
  message?: string;
  storageKey?: string;
}

// 2. A state for Granular Consents
export type GranularConsents = Record<string, boolean>;

// 3. The full Context Type defining our strict structure
export interface StorageConsentContextType {
  globalConsent: boolean | null; // null means the user hasn't decided yet
  setGlobalConsent: (consent: boolean) => void;
  granularConsents: GranularConsents;
  setGranularConsent: (key: string, consent: boolean) => void;
  activePrompt: PromptState;
  setActivePrompt: (prompt: PromptState) => void;
  requestConsent: (storageKey: string, description: string) => boolean;
  updateConsent: (storageKey: string, isGranted: boolean) => void;
}

export const StorageConsentContext = createContext<StorageConsentContextType | undefined>(undefined);

export const StorageConsentProvider = ({ children }: { children: ReactNode }) => {
  const [globalConsent, setGlobalConsentState] = useState<boolean | null>(null);
  const [granularConsents, setGranularConsents] = useState<GranularConsents>({});
  const [activePrompt, setActivePrompt] = useState<PromptState>({ isOpen: false });
  const [isInitialized, setIsInitialized] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const savedPrefs = localStorage.getItem('privacy_preferences');
    if (savedPrefs) {
      try {
        const parsedPrefs = JSON.parse(savedPrefs);
        
        if (typeof parsedPrefs.globalConsent === 'boolean') {
          setGlobalConsentState(parsedPrefs.globalConsent);
        }
        
        if (parsedPrefs.granularConsents && typeof parsedPrefs.granularConsents === 'object') {
          setGranularConsents(parsedPrefs.granularConsents);
        }
      } catch (error) {
        console.error("Failed to parse privacy preferences", error);
      }
    }
    setIsInitialized(true);
  }, []);

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;
    if (globalConsent === null && Object.keys(granularConsents).length === 0) return;
    localStorage.setItem('privacy_preferences', JSON.stringify({
      globalConsent,
      granularConsents
    }));
  }, [globalConsent, granularConsents, isInitialized]);

  const setGlobalConsent = (isGranted: boolean) => {
    setGlobalConsentState(isGranted);
  };

  const updateConsent = (storageKey: string, isGranted: boolean) => {
    setGranularConsents((prev) => {
      const updated = { ...prev, [storageKey]: isGranted };
      return updated;
    });
    setActivePrompt({ isOpen: false });
  };

  const requestConsent = (storageKey: string, description: string) => {
    if (globalConsent === true) return true;
    if (granularConsents[storageKey] !== undefined) {
      return granularConsents[storageKey];
    }
    setActivePrompt({ isOpen: true, title: 'Permission Required', message: description, storageKey });
    return false;
  };

  // Wrapper function to easily update a single granular consent key
  const setGranularConsent = (key: string, consent: boolean) => {
    setGranularConsents((prev) => ({
      ...prev,
      [key]: consent
    }));
  };


  return (
    <StorageConsentContext.Provider
      value={{
        globalConsent,
        setGlobalConsent,
        granularConsents,
        setGranularConsent,
        activePrompt,
        setActivePrompt,
        requestConsent,
        updateConsent
      }}
    >
      {children}
    </StorageConsentContext.Provider>
  );
};

export const useStorageConsent = () => {
  const context = useContext(StorageConsentContext);
  if (context === undefined) {
    throw new Error('useStorageConsent must be used within a StorageConsentProvider');
  }
  return context;
};