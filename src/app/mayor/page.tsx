export default async function MayorPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
      {/* Section 1: Current Mayor Details */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Current Mayor Details</h1>
        <div className="h-40 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-500">
          Hero Box Placeholder
        </div>
      </div>

      {/* Section 2: Current Candidates */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Current Candidates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* 5 empty candidate cards */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-32"></div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-32"></div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-32"></div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-32"></div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-32"></div>
        </div>
      </div>
    </div>
  );
}