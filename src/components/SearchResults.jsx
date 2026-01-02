import React from 'react';
import GitHubResultItem from './GitHubResultItem';
import StackOverflowResultItem from './StackOverflowResultItem';
import RedditResultItem from './RedditResultItem';
import Pagination from './Pagination';

const SearchResults = ({ searchResults, searchQuery, totalResults, currentPage, totalPages, onPageChange }) => {
  if (searchResults.length === 0) {
    return null;
  }

  const renderResultItem = (result, index) => {
    switch (result.platform) {
      case 'github':
        return <GitHubResultItem key={index} result={result} />;
      case 'stackoverflow':
        return <StackOverflowResultItem key={index} result={result} />;
      case 'reddit':
        return <RedditResultItem key={index} result={result} />;
      default:
        return null;
    }
  };

  const startResult = (currentPage - 1) * 10 + 1;
  const endResult = Math.min(currentPage * 10, totalResults);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">
          Search Results ({totalResults})
        </h3>
        <div className="text-sm text-gray-600">
          Showing {startResult}-{endResult} of {totalResults} results for "{searchQuery}"
        </div>
      </div>
      <div className="space-y-4">
        {searchResults.map((result, index) => renderResultItem(result, index))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default SearchResults;
