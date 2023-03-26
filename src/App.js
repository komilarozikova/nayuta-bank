import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Currency from './components/Currency.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Currency />
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
    </>
  );
}

export default App;
