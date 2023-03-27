import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Currency from './components/Currency.js';
import HomePage from './components/HomePage/HomePage.js';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Currency />
      <HomePage />
      <Calculator />
      <Footer />
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
    </>
  );
}

export default App;
