import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, isSearching, onSubmit }) => {
  return (
    <div className="mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          id="search-query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-16 pr-32 py-6 text-xl border-2 border-gray-300 rounded-2xl focus:border-blue-600 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all shadow-lg bg-white"
          placeholder="Search across platforms..."
          required
        />
        <button
          type="submit"
          disabled={isSearching}
          className="absolute inset-y-0 right-0 mr-2 my-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isSearching ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Searching...</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
