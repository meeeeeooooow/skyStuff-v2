export default function DungeonsTopBar() {
  return (
    <div className="flex items-center justify-between px-4 h-16 bg-gray-900 border-b border-gray-700 sticky top-14 z-20 shrink-0">
      <div className="font-semibold text-lg">Global Settings</div>
      <div className="flex items-center space-x-4">
        <select className="bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Global Dropdown A</option>
        </select>
        <button className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-1.5 hover:bg-gray-600 transition-colors duration-200">
          Global Toggle B
        </button>
        <input
          type="text"
          placeholder="Global Input C"
          className="bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}