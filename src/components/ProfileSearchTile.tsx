import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h1 className="text-4xl font-bold">Profile Viewer</h1>
      <div className="relative w-full max-w-2xl">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Enter Minecraft Username..."
          className="bg-gray-800 border border-gray-700 rounded-full pl-12 pr-6 py-4 w-full"
        />
      </div>
      <div className="flex gap-3 mt-2">
        <span className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
          name1
        </span>
        <span className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
          name2
        </span>
        <span className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
          name3
        </span>
      </div>
    </div>
  );
}