"use client";

import { useEffect } from 'react';

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/60 z-60 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-gray-900 border rounded-lg max-w-md w-full p-6" 
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-white">Settings</h2>
      </div>
    </div>
  );
}