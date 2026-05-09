"use client";

import { useState, useEffect } from 'react';
import { Icon } from 'lucide-react';
import { unicornHead } from '@lucide/lab';
import { Globe, Sliders } from 'lucide-react';
import { useVisualMode } from "@/context/VisualModeContext";

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('performance');
  const [rawLocalStorage, setRawLocalStorage] = useState('');

  const { mode, setMode } = useVisualMode();

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
    try {
      setRawLocalStorage(JSON.stringify(localStorage, null, 2));
    } catch (error) {
      setRawLocalStorage('Failed to read local storage data.');
    }
  }, []);

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
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => setMode('pretty')}
                className={`flex items-start text-left p-3 border rounded-lg transition-colors ${
                  mode === 'pretty' 
                    ? 'bg-blue-600/20 border-blue-500' 
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }`}
              >
                <Icon iconNode={unicornHead} className="mt-0.5 mr-3 text-gray-400" size={20} />
                <div>
                  <div className="font-bold text-white">Pretty Mode</div>
                  <div className="text-sm text-gray-400">Full graphics and animations.</div>
                </div>
              </button>

              <button
                onClick={() => setMode('potato')}
                className={`flex items-start text-left p-3 border rounded-lg transition-colors ${
                  mode === 'potato' 
                    ? 'bg-blue-600/20 border-blue-500' 
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }`}
              >
                <Globe className="mt-0.5 mr-3 text-gray-400" size={20} />
                <div>
                  <div className="font-bold text-white">Potato Mode</div>
                  <div className="text-sm text-gray-400">Simplified UI for better performance.</div>
                </div>
              </button>

              <button
                onClick={() => setMode('potato-plus')}
                className={`flex items-start text-left p-3 border rounded-lg transition-colors ${
                  mode === 'potato-plus' 
                    ? 'bg-blue-600/20 border-blue-500' 
                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                }`}
              >
                <Sliders className="mt-0.5 mr-3 text-gray-400" size={20} />
                <div>
                  <div className="font-bold text-white">Potato+ Mode</div>
                  <div className="text-sm text-gray-400">Maximum performance.</div>
                </div>
              </button>
            </div>
          </>
        )}

        {activeTab === 'storage' && (
          <div className="mt-4">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-white text-sm mb-2">Local Storage Data</h3>
                <div className="bg-black text-green-400 font-mono text-xs p-4 rounded overflow-auto max-h-40 whitespace-pre">
                  {rawLocalStorage || '{}'}
                </div>
              </div>
              <button
                onClick={() => {
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
      </div>
    </div>
  );
}