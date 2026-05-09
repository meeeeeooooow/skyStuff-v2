"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

export type VisualMode = 'pretty' | 'potato' | 'potato-plus';

interface VisualModeContextType {
  mode: VisualMode;
  setMode: (mode: VisualMode) => void;
}

export const VisualModeContext = createContext<VisualModeContextType | undefined>(undefined);

export const VisualModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<VisualMode>('pretty');

  useEffect(() => {
    const savedMode = localStorage.getItem('visualMode') as VisualMode | null;
    if (savedMode && ['pretty', 'potato', 'potato-plus'].includes(savedMode)) {
      setMode(savedMode);
      document.documentElement.setAttribute('data-mode', savedMode);
    } else {
      document.documentElement.setAttribute('data-mode', 'pretty');
    }
  }, []);

  const updateMode = (newMode: VisualMode) => {
    setMode(newMode);
    document.documentElement.setAttribute('data-mode', newMode);
    localStorage.setItem('visualMode', newMode);
  };

  return (
    <VisualModeContext.Provider value={{ mode, setMode: updateMode }}>
      {children}
    </VisualModeContext.Provider>
  );
};

export const useVisualMode = () => {
  const context = useContext(VisualModeContext);
  if (context === undefined) {
    throw new Error('useVisualMode must be used within a VisualModeProvider');
  }
  return context;
};