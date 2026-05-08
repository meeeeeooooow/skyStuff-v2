"use client";

import { useState, useEffect } from 'react';
import { Power, Globe, Sliders } from 'lucide-react';

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const [potatoScope, setPotatoScope] = useState('off');
  const [potatoPages, setPotatoPages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('performance');
  const [rawCookies, setRawCookies] = useState('');
  const [rawLocalStorage, setRawLocalStorage] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const cookieRow = document.cookie.split('; ').find(row => row.startsWith('pv_potato_settings='));
    if (cookieRow) {
      try {
        const cookieValue = cookieRow.split('=')[1];
        const parsedSettings = JSON.parse(decodeURIComponent(cookieValue));
        if (parsedSettings && typeof parsedSettings === 'object') {
          if (parsedSettings.scope) setPotatoScope(parsedSettings.scope);
          if (parsedSettings.pages) setPotatoPages(parsedSettings.pages);
        }
      } catch (error) {
        console.error('Failed to parse potato settings cookie', error);
      }
    }
  }, []);

  useEffect(() => {
    setRawCookies(document.cookie);
    try {
      setRawLocalStorage(JSON.stringify(localStorage, null, 2));
    } catch (error) {
      setRawLocalStorage('Failed to read local storage data.');
    }
  }, []);

  const togglePage = (pageId: string) => {
    setPotatoPages((prev) =>
      prev.includes(pageId) ? prev.filter((p) => p !== pageId) : [...prev, pageId]
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-60 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-gray-900 border rounded-lg max-w-md w-full p-6" 
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-white">Settings</h2>
        
        <div className="flex border-b border-gray-700 mt-4">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'performance'
                ? 'border-b-2 border-blue-500 text-white'
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            Performance
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'storage'
                ? 'border-b-2 border-blue-500 text-white'
                : 'text-gray-400 hover:text-white border-b-2 border-transparent'
            }`}
          >
            Storage
          </button>
        </div>

        {activeTab === 'performance' && (
          <>
            <div className="bg-gray-800 p-4 mt-4 rounded-lg text-sm text-gray-300">
              <strong>Cookie Disclaimer:</strong> A single Cookie is used to save your Potato Mode settings between different pages and sessions. No personal data is collected or shared.
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => setPotatoScope('off')}
                className={`flex items-start text-left p-3 border rounded-lg transition-colors ${
                  potatoScope === 'off' 
                    ? 'bg-blue-600/20 border-blue-500' 
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }`}
              >
                <Power className="mt-0.5 mr-3 text-gray-400" size={20} />
                <div>
                  <div className="font-bold text-white">Off</div>
                  <div className="text-sm text-gray-400">Disable Potato Mode entirely.</div>
                </div>
              </button>

              <button
                onClick={() => setPotatoScope('global')}
                className={`flex items-start text-left p-3 border rounded-lg transition-colors ${
                  potatoScope === 'global' 
                    ? 'bg-blue-600/20 border-blue-500' 
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }`}
              >
                <Globe className="mt-0.5 mr-3 text-gray-400" size={20} />
                <div>
                  <div className="font-bold text-white">Global</div>
                  <div className="text-sm text-gray-400">Enable Potato Mode on all pages.</div>
                </div>
              </button>

              <button
                onClick={() => setPotatoScope('custom')}
                className={`flex items-start text-left p-3 border rounded-lg transition-colors ${
                  potatoScope === 'custom' 
                    ? 'bg-blue-600/20 border-blue-500' 
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }`}
              >
                <Sliders className="mt-0.5 mr-3 text-gray-400" size={20} />
                <div>
                  <div className="font-bold text-white">Custom</div>
                  <div className="text-sm text-gray-400">Choose specific pages for Potato Mode.</div>
                </div>
              </button>
            </div>

            {potatoScope === 'custom' && (
              <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded-lg flex flex-col gap-3">
                <h3 className="font-bold text-white text-sm">Select Pages for Potato Mode:</h3>
                <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={potatoPages.includes('profile')}
                    onChange={() => togglePage('profile')}
                    className="rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                  />
                  Profile Viewer
                </label>
              </div>
            )}
          </>
        )}

        {activeTab === 'storage' && (
          <div className="mt-4">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-white text-sm mb-2">Cookies Data</h3>
                <div className="bg-black text-green-400 font-mono text-xs p-4 rounded overflow-auto whitespace-pre">
                  {rawCookies || 'No cookies found.'}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm mb-2">Local Storage Data</h3>
                <div className="bg-black text-green-400 font-mono text-xs p-4 rounded overflow-auto max-h-40 whitespace-pre">
                  {rawLocalStorage || '{}'}
                </div>
              </div>
              <button
                onClick={() => {
                  document.cookie = "pv_potato_settings=; max-age=0; path=/";
                  localStorage.clear();
                  window.location.reload();
                }}
                className="w-full px-4 py-2 mt-2 rounded-lg text-sm font-bold bg-red-600 text-white hover:bg-red-500 transition-colors"
              >
                Purge All Local Data
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
            if (potatoScope === 'off') {
              document.cookie = "pv_potato_settings=; max-age=0; path=/";
            } else {
              const settings = { scope: potatoScope, pages: potatoPages };
              const encodedSettings = encodeURIComponent(JSON.stringify(settings));
              document.cookie = `pv_potato_settings=${encodedSettings}; max-age=31536000; path=/`;
            }
            window.location.reload();
            }}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors"
          >
            Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
}