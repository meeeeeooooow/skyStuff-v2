"use client";

import { useState, useRef } from "react";
import { pvLibrary } from "@/config/pvLibrary";

interface LayoutEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (layoutName: string, selectedKeys: string[]) => void;
  isStorageEnabled: boolean;
  onToggleStorage: (enabled: boolean) => void;
}

export default function LayoutEditor({ isOpen, onClose, onSave, isStorageEnabled, onToggleStorage }: LayoutEditorProps) {
  const [layoutName, setLayoutName] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const categories = Array.from(new Set(Object.values(pvLibrary).map(item => item.category)));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 w-full max-w-6xl max-h-[90vh] flex flex-col">
        
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-bold text-white whitespace-nowrap">Create Custom Layout</h2>
          <div className="flex flex-col w-full md:w-auto flex-1 md:max-w-md">
            <input 
              type="text" 
              value={layoutName}
              onChange={(e) => setLayoutName(e.target.value)}
              placeholder="Layout Name (e.g., Dungeons Focus)"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
            />
            <div className="mt-2 px-1">
              <label className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-300 cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={isStorageEnabled}
                  onChange={(e) => onToggleStorage(e.target.checked)}
                  className="rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-500"
                />
                Save custom layouts to browser
              </label>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto justify-end">
            <button onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">Cancel</button>
            <button 
              onClick={() => {
                if (selectedKeys.length > 0) {
                  const exportObj = { [layoutName || "export"]: selectedKeys };
                  const jsonString = JSON.stringify(exportObj, null, 2);
                  const blob = new Blob([jsonString], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `${layoutName || "layout"}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                }
              }}
              disabled={selectedKeys.length === 0}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Export to File
            </button>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
            >
              Import File
            </button>
            <input 
              type="file" 
              accept=".json" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                  try {
                    const parsed = JSON.parse(reader.result as string);
                    const importedName = Object.keys(parsed)[0];
                    const importedKeys = parsed[importedName];
                    if (Array.isArray(importedKeys)) {
                      setLayoutName(importedName);
                      setSelectedKeys(importedKeys);
                    }
                  } catch (error) {
                    alert("Invalid layout file");
                  }
                };
                reader.readAsText(file);
                e.target.value = "";
              }}
            />
            <button onClick={() => onSave(layoutName || "Unnamed Layout", selectedKeys)} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">Save Layout</button>
          </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row gap-6 min-h-125">
          
          {/* Left Column: The Library */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-gray-900 rounded-lg border border-gray-700 p-4">
            <h3 className="text-xl font-bold mb-4 text-white sticky top-0 bg-gray-900 pb-2 border-b border-gray-800 z-10">Available Stats</h3>
            <div className="flex flex-col gap-6">
              {categories.map(category => (
                <div key={category}>
                  <h4 className="text-md font-semibold text-gray-400 mb-2 uppercase tracking-wider text-sm">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(pvLibrary)
                      .filter(([_, item]) => item.category === category)
                      .map(([key, item]) => (
                        <button
                          key={key}
                          onClick={() => {
                            if (!selectedKeys.includes(key)) {
                              setSelectedKeys([...selectedKeys, key]);
                            }
                          }}
                          className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-sm text-gray-300 rounded hover:bg-gray-700 hover:text-white transition-colors text-left"
                        >
                          {item.name}
                        </button>
                      ))
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Editor */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-gray-900 rounded-lg border border-gray-700 p-4">
            <h3 className="text-xl font-bold mb-4 text-white sticky top-0 bg-gray-900 pb-2 border-b border-gray-800 z-10">Selected Stats</h3>
            <div className="flex flex-col gap-2">
              {selectedKeys.length === 0 ? (
                <p className="text-gray-500 italic text-center mt-8">No stats selected yet. Click stats on the left to add them.</p>
              ) : (
                selectedKeys.map((key, index) => (
                  <div key={key} className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 flex justify-between items-center">
                    <span>{pvLibrary[key]?.name || key}</span>
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => {
                          const newKeys = [...selectedKeys];
                          [newKeys[index - 1], newKeys[index]] = [newKeys[index], newKeys[index - 1]];
                          setSelectedKeys(newKeys);
                        }}
                        disabled={index === 0}
                        className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title="Move Up"
                      >
                        ↑
                      </button>
                      <button 
                        onClick={() => {
                          const newKeys = [...selectedKeys];
                          [newKeys[index + 1], newKeys[index]] = [newKeys[index], newKeys[index + 1]];
                          setSelectedKeys(newKeys);
                        }}
                        disabled={index === selectedKeys.length - 1}
                        className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title="Move Down"
                      >
                        ↓
                      </button>
                      <button 
                        onClick={() => setSelectedKeys(selectedKeys.filter(k => k !== key))}
                        className="px-3 py-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 rounded ml-2 transition-colors text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}