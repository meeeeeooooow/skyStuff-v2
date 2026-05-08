import EventTile from "@/components/EventTile";
import MayorTile from "@/components/MayorTile";
import Searchbar from "@/components/ProfileSearchTile";
import ToolTile from "@/components/ToolTile";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 flex flex-col gap-12">
      <Searchbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MayorTile />
        <EventTile />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tools & Calculators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolTile 
            title="Alchemy" 
            description="Alchemy stuff" 
            href="/alchemy" 
          />
        </div>
      </div>
    </div>
  );
}
