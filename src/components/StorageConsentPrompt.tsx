"use client";

import { useStorageConsent } from '@/context/StorageConsentContext';

export default function StorageConsentPrompt() {
  const { activePrompt, setActivePrompt, updateConsent, setGlobalConsent } = useStorageConsent();

  if (!activePrompt.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 shadow-2xl flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">{activePrompt.title}</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {activePrompt.message}
          </p>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <button
            onClick={() => { setGlobalConsent(true); setActivePrompt({ isOpen: false }); }}
            className="w-full px-4 py-3 rounded-lg text-sm font-bold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            Always remember my choices
          </button>
          <button
            onClick={() => updateConsent(activePrompt.storageKey!, true)}
            className="w-full px-4 py-3 rounded-lg text-sm font-medium bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
          >
            Yes, remember this
          </button>
          <button
            onClick={() => updateConsent(activePrompt.storageKey!, false)}
            className="w-full px-4 py-3 rounded-lg text-sm font-medium bg-transparent text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            No, this session only
          </button>
        </div>
      </div>
    </div>
  );
}