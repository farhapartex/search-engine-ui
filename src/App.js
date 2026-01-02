import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Search from './pages/Search';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
