import React from 'react';

const FilterControls = ({
  selectedPlatform,
  setSelectedPlatform,
  maxResults,
  setMaxResults,
  platforms
}) => {
  return (
    <div className="flex justify-end mb-8">
      <div className="flex items-center gap-4">
        {/* Platform Dropdown */}
        <div className="relative">
          <select
            id="platform"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            className="px-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all appearance-none bg-white cursor-pointer pr-10"
          >
            {platforms.map((platform) => (
              <option key={platform.value} value={platform.value}>
                {platform.icon} {platform.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Max Results Input */}
        <div className="relative">
          <input
            type="number"
            id="max-results"
            value={maxResults}
            onChange={(e) => setMaxResults(Math.max(1, Math.min(100, parseInt(e.target.value) || 10)))}
            min="1"
            max="100"
            className="w-24 px-4 py-3 text-sm border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
            placeholder="10"
          />
          <div className="absolute -bottom-6 right-0 text-xs text-gray-500">
            Max: 100
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
