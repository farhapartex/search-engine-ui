import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <h1 className="text-2xl font-bold text-gray-900">SearchEngine</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition">
              History
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
