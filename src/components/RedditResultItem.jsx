import React from 'react';

const RedditResultItem = ({ result }) => {
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

  const score = result.metadata?.score || '0';
  const numComments = result.metadata?.num_comments || '0';
  const subreddit = result.metadata?.subreddit || '';
  const author = result.metadata?.author || '';
  const upvoteRatio = result.metadata?.upvote_ratio ? parseFloat(result.metadata.upvote_ratio) : 0;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-600 hover:shadow-lg transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
          </div>
          <span className="text-sm font-semibold text-orange-600">Reddit</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="font-semibold">{score}</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
            <span>{numComments}</span>
          </div>
        </div>
      </div>

      {subreddit && (
        <div className="mb-2">
          <a
            href={`https://reddit.com/r/${subreddit}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition"
          >
            r/{subreddit}
          </a>
        </div>
      )}

      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-600 hover:text-blue-800 mb-3 block"
      >
        {result.title}
      </a>

      {result.snippet && (
        <p className="text-gray-700 mb-4 line-clamp-3">
          {result.snippet}
        </p>
      )}

      <div className="flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center space-x-4">
          {author && (
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <span>u/{author}</span>
            </span>
          )}
        </div>
        {result.timestamp && (
          <span>Posted {formatDate(result.timestamp)}</span>
        )}
      </div>

      {upvoteRatio > 0 && (
        <div className="mt-3 flex items-center space-x-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-orange-600 h-full rounded-full"
              style={{ width: `${upvoteRatio * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-600 font-semibold">
            {Math.round(upvoteRatio * 100)}% upvoted
          </span>
        </div>
      )}
    </div>
  );
};

export default RedditResultItem;
