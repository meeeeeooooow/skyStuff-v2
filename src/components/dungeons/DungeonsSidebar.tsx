"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

interface DungeonsSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  navItems: NavItem[];
}

export default function DungeonsSidebar({ activeView, setActiveView, navItems }: DungeonsSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? "w-20" : "w-64"} transition-all duration-300 ease-in-out bg-transparent border-r border-gray-700 flex flex-col p-4 space-y-2 shrink-0 overflow-y-auto overflow-x-hidden`}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-start h-12 px-3 mb-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
      >
        <ChevronLeft className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`} />
      </button>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveView(item.id)}
          className={`flex items-center justify-start h-12 px-3 gap-3 rounded-lg transition-colors duration-200 whitespace-nowrap overflow-hidden ${
            activeView === item.id
              ? "ring-1 ring-inset ring-blue-500 text-blue-400 font-medium bg-blue-500/10"
              : "text-gray-300 hover:bg-gray-800 hover:text-white"
          }`}
        >
          <div className="w-6 h-6 shrink-0 border-2 border-gray-500 rounded-md" />
          {!isCollapsed && <span>{item.label}</span>}
        </button>
      ))}
    </div>
  );
}