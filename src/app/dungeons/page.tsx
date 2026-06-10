// this is a placeholder page, just to test the layout.
// layout is okay, just needs to be more pretty.

"use client";

import { useState } from "react";

export default function DungeonsPage() {
  const [activeView, setActiveView] = useState("Category 1");

  const navItems = ["Category 1", "Tool Alpha", "Tool Beta"];

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Global Top Bar (Sticky) */}
      <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700 sticky top-0 z-10 shrink-0">
        <div className="font-semibold text-lg">Global Settings</div>
        <div className="flex items-center space-x-4">
          <select className="bg-gray-700 border border-gray-600 text-white rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Global Dropdown A</option>
          </select>
          <button className="bg-gray-700 border border-gray-600 text-white rounded px-4 py-1.5 hover:bg-gray-600 transition-colors">
            Global Toggle B
          </button>
          <input
            type="text"
            placeholder="Global Input C"
            className="bg-gray-700 border border-gray-600 text-white rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Vertical Navigation) */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col p-4 space-y-2 shrink-0 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveView(item)}
              className={`text-left px-4 py-2.5 rounded transition-colors ${
                activeView === item
                  ? "bg-blue-600 text-white font-medium"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main Content Stage */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-900">
          <h1 className="text-2xl font-bold mb-6">Active Tool View</h1>
          
          {/* Empty Content Container */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 min-h-[400px]">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">{activeView}</h2>
            <p className="text-gray-400">
              Empty container ready for {activeView} content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}