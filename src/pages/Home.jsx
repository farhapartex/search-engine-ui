import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search');
    }
  };

  const handleLuckySearch = () => {
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">SearchEngine</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/signin"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl w-full">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-20 h-20 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-3">
              Find Anything, Fast
            </h2>
            <p className="text-xl text-gray-600">
              Your intelligent search companion
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-blue-600 focus:outline-none shadow-lg hover:shadow-xl transition-all"
                placeholder="Search for anything..."
              />
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleLuckySearch}
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition shadow-md border border-gray-300"
              >
                I'm Feeling Lucky
              </button>
            </div>
          </form>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get results in milliseconds with our optimized search algorithms</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">Your data is secure and searches remain completely private</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Powered</h3>
              <p className="text-gray-600">Smart search understands context and delivers relevant results</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
