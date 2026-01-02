import React from 'react';

const StackOverflowResultItem = ({ result }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all">
      {/* Platform Badge */}
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
          <div className={`flex items-center space-x-1 ${result.isAnswered ? 'text-green-600' : 'text-gray-600'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span className="font-semibold">{result.answerCount} answers</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span>{result.score}</span>
          </div>
        </div>
      </div>

      {/* Question Title */}
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-600 hover:text-blue-800 mb-3 block"
      >
        {result.title}
      </a>

      {/* Question Excerpt */}
      <p className="text-gray-700 mb-4 line-clamp-2">
        {result.excerpt}
      </p>

      {/* Tags */}
      <div className="flex items-center flex-wrap gap-2 mb-4">
        {result.tags && result.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>{result.author}</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-semibold text-orange-600">{result.reputation}</span>
            <span>reputation</span>
          </span>
        </div>
        <span>Asked {result.createdAt}</span>
      </div>
    </div>
  );
};

export default StackOverflowResultItem;
