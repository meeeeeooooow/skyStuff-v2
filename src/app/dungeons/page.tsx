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
    <div className="flex flex-col flex-1">
      <DungeonsTopBar />

      <div className="flex flex-1">
        <DungeonsSidebar
          activeView={activeView}
          setActiveView={setActiveView}
          navItems={navItems}
        />

        <div className="flex-1 w-full bg-gray-900">
          <div className="w-full p-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 min-h-[400px]">
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                {activeItem?.label || activeView}
              </h2>
              
              <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-700 rounded-lg max-w-sm">
                <span className="text-gray-400">Sample Metric</span>
                <span className="text-2xl font-bold text-white">42,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}