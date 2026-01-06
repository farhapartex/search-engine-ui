import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import SearchResults from '../components/SearchResults';
import searchService from '../services/searchService';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [maxResults, setMaxResults] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const platforms = [
    { value: 'all', label: 'All Platforms', icon: '🌐' },
    { value: 'github', label: 'GitHub', icon: '💻' },
    { value: 'stackoverflow', label: 'Stack Overflow', icon: '📚' },
    { value: 'reddit', label: 'Reddit', icon: '🔴' },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError(null);
    setCurrentPage(1);

    try {
      const platformsToSearch = selectedPlatform === 'all'
        ? ['github', 'stackoverflow', 'reddit']
        : [selectedPlatform];

      const response = await searchService.search({
        query: searchQuery,
        platforms: platformsToSearch,
        maxResults: maxResults
      });

      if (response && response.data && response.data.results) {
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error('Search Error:', err);
      setError(err.response?.data?.message || 'An error occurred while searching. Please try again.');
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResults = searchResults.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasSearchData = searchResults.length > 0 || isSearching || error;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <Header />

      <main className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${hasSearchData ? 'py-10' : 'flex-1 flex items-center justify-center'}`}>
        <div className={hasSearchData ? '' : 'w-full'}>
          <form onSubmit={handleSearch} className={hasSearchData ? 'mb-12' : 'mb-0'}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              isSearching={isSearching}
              onSubmit={handleSearch}
            />

            <FilterControls
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
              maxResults={maxResults}
              setMaxResults={setMaxResults}
              platforms={platforms}
            />
          </form>

          {error && (
            <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-red-800 font-semibold">Search Failed</h4>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {isSearching && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
                <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
              </div>
              <p className="mt-6 text-gray-600 text-lg font-medium">Searching across platforms...</p>
              <p className="mt-2 text-gray-500 text-sm">This may take a few moments</p>
            </div>
          )}

          {!isSearching && (
            <SearchResults
              searchResults={paginatedResults}
              searchQuery={searchQuery}
              totalResults={searchResults.length}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
