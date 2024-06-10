// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header /> {/* Render Header outside of Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
