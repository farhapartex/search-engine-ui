import React from 'react';
import GitHubResultItem from './GitHubResultItem';
import StackOverflowResultItem from './StackOverflowResultItem';
import RedditResultItem from './RedditResultItem';

const SearchResults = ({ searchResults, searchQuery }) => {
  if (searchResults.length === 0) {
    return null;
  }

  const renderResultItem = (result, index) => {
    switch (result.type) {
      case 'github':
        return <GitHubResultItem key={index} result={result.data} />;
      case 'stackoverflow':
        return <StackOverflowResultItem key={index} result={result.data} />;
      case 'reddit':
        return <RedditResultItem key={index} result={result.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">
          Search Results ({searchResults.length})
        </h3>
        <div className="text-sm text-gray-600">
          Showing results for "{searchQuery}"
        </div>
      </div>
      <div className="space-y-4">
        {searchResults.map((result, index) => renderResultItem(result, index))}
      </div>
    </div>
  );
};

export default SearchResults;
