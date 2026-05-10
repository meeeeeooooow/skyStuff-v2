"use client";

import { useVisualMode } from "@/context/VisualModeContext";

export default function AlchemyCalculatorPage() {
  const { mode } = useVisualMode();

  if (mode === 'potato-plus') {
    return (
      <main>
        <h1>Alchemy XP Calculator</h1>
        <p>Calculator Interface Building in Progress...</p>
        <fieldset>
          <legend>Test Input</legend>
          <input type="text" placeholder="Type here..." style={{ color: 'black' }} />
        </fieldset>
      </main>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Alchemy XP Calculator</h1>
      
      <div className="border-2 border-dashed border-gray-700 rounded-xl py-24 text-gray-500 text-center">
        Calculator Interface Building in Progress...
      </div>
    </div>
  );
}