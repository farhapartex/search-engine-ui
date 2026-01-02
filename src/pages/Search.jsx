import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import SearchResults from '../components/SearchResults';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [maxResults, setMaxResults] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const platforms = [
    { value: 'all', label: 'All Platforms', icon: '🌐' },
    { value: 'github', label: 'GitHub', icon: '💻' },
    { value: 'stackoverflow', label: 'Stack Overflow', icon: '📚' },
    { value: 'reddit', label: 'Reddit', icon: '🔴' },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);

    console.log('Searching:', {
      query: searchQuery,
      platform: selectedPlatform,
      maxResults: maxResults
    });

    // Mock results for demonstration
    setTimeout(() => {
      const mockResults = [
        {
          type: 'github',
          data: {
            fullName: 'facebook/react',
            description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
            url: 'https://github.com/facebook/react',
            stars: '228k',
            forks: '46.8k',
            language: 'JavaScript',
            topics: ['react', 'frontend', 'ui', 'declarative'],
            updatedAt: '2 hours ago'
          }
        },
        {
          type: 'stackoverflow',
          data: {
            title: 'How to use React hooks effectively?',
            excerpt: 'I am trying to understand the best practices for using React hooks in my application. What are the common patterns and anti-patterns I should be aware of?',
            url: 'https://stackoverflow.com/questions/12345678',
            score: 245,
            answerCount: 12,
            isAnswered: true,
            tags: ['reactjs', 'javascript', 'hooks', 'react-hooks'],
            author: 'john_doe',
            reputation: '15.2k',
            createdAt: '3 days ago'
          }
        },
        {
          type: 'reddit',
          data: {
            title: 'Just launched my first React app after 6 months of learning!',
            subreddit: 'reactjs',
            selfText: 'After months of learning and building small projects, I finally deployed my first production React application. It\'s a task management app with real-time updates. Thank you to this amazing community for all the help!',
            url: 'https://reddit.com/r/reactjs/comments/abc123',
            score: 1247,
            commentCount: 89,
            author: 'developer123',
            awards: 5,
            flair: 'Project',
            upvoteRatio: 0.95,
            createdAt: '5 hours ago'
          }
        },
        {
          type: 'github',
          data: {
            fullName: 'vercel/next.js',
            description: 'The React Framework for Production - with server-side rendering and static site generation.',
            url: 'https://github.com/vercel/next.js',
            stars: '125k',
            forks: '26.8k',
            language: 'TypeScript',
            topics: ['nextjs', 'react', 'ssr', 'framework'],
            updatedAt: '1 hour ago'
          }
        },
        {
          type: 'stackoverflow',
          data: {
            title: 'Difference between useMemo and useCallback?',
            excerpt: 'Can someone explain the practical difference between useMemo and useCallback hooks in React? When should I use one over the other?',
            url: 'https://stackoverflow.com/questions/98765432',
            score: 567,
            answerCount: 8,
            isAnswered: true,
            tags: ['reactjs', 'performance', 'hooks', 'memoization'],
            author: 'react_learner',
            reputation: '8.9k',
            createdAt: '1 week ago'
          }
        },
        {
          type: 'reddit',
          data: {
            title: 'React 19 Beta is out! Major changes coming',
            subreddit: 'programming',
            selfText: 'React team just announced React 19 beta with some game-changing features including the new Compiler and improved Server Components support.',
            url: 'https://reddit.com/r/programming/comments/xyz789',
            score: 2891,
            commentCount: 234,
            author: 'tech_news',
            awards: 12,
            flair: 'News',
            upvoteRatio: 0.92,
            createdAt: '1 day ago'
          }
        }
      ];

      setSearchResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSearch} className="mb-12">
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

        <SearchResults
          searchResults={searchResults}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
};

export default Search;
