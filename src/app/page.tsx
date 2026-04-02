import EventTile from "@/components/EventTile";
import MayorTile from "@/components/MayorTile";
import Searchbar from "@/components/Searchbar";
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
        <div className="border-2 border-dashed border-gray-700 rounded-xl py-24 text-gray-500 text-center">
          Feature Grid Coming Soon...
        </div>
      </div>
    </div>
  );
}
