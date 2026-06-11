"use client";

import { useState } from "react";
import DungeonsTopBar from "@/components/dungeons/DungeonsTopBar";
import DungeonsSidebar from "@/components/dungeons/DungeonsSidebar";

export default function DungeonsPage() {
  const navItems = [
    { id: "tool-1", label: "Tool 1" },
    { id: "tool-2", label: "Tool 2" },
    { id: "tool-3", label: "Tool 3" },
  ];

  const [activeView, setActiveView] = useState(navItems[0].id);

  const activeItem = navItems.find(item => item.id === activeView);

  return (
    <div className="flex flex-col h-[calc(100dvh-3.5rem)] overflow-hidden">
      {/* Global Top Bar (Sticky) */}
      <DungeonsTopBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Vertical Navigation) */}
        <DungeonsSidebar
          activeView={activeView}
          setActiveView={setActiveView}
          navItems={navItems}
        />

        {/* Main Content Stage */}
        <div className="flex-1 overflow-y-auto bg-gray-900">
          <div className="w-full p-8">
            {/* Empty Content Container */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 min-h-[400px]">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                {activeItem?.label || activeView}
              </h2>
              
              {/* Stat Readout Template */}
              <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-700 rounded-lg max-w-sm">
                <span className="text-gray-400 font-medium">Test Text for Text Testing</span>
                <span className="font-mono text-blue-400 text-lg">816 80,085</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}