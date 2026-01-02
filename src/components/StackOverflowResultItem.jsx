import React from 'react';

const StackOverflowResultItem = ({ result }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };

  const isAnswered = result.metadata?.is_answered === 'true';
  const answerCount = result.metadata?.answer_count || '0';
  const score = result.metadata?.score || '0';
  const viewCount = result.metadata?.view_count || '0';
  const tags = result.metadata?.tags ? result.metadata.tags.split(',') : [];

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.093-10.473-2.201zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.155z"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-orange-600">Stack Overflow</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div className={`flex items-center space-x-1 ${isAnswered ? 'text-green-600' : 'text-gray-600'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span className="font-semibold">{answerCount} answers</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <span>{score}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            <span>{viewCount}</span>
          </div>
        </div>
      </div>

      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-600 hover:text-blue-800 mb-3 block"
      >
        {result.title}
      </a>

      <p className="text-gray-700 mb-4 line-clamp-2">
        {result.snippet}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
            >
              {tag}
            </span>
          ))}
        </div>

        {result.timestamp && (
          <div className="text-xs text-gray-500">
            Asked {formatDate(result.timestamp)}
          </div>
        )}
      </div>
    </div>
  );
};

export default StackOverflowResultItem;
