export default function SearchBar() {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <h1 className="text-4xl font-bold">SkyStuff Profile Viewer</h1>
      <input
        type="text"
        placeholder="Enter Minecraft Username..."
        className="bg-gray-800 border border-gray-700 rounded-full px-6 py-4 w-full max-w-2xl"
      />
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