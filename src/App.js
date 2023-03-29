import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.js';
import Currency from './components/Currency.js';
import HomePage from './components/HomePage/HomePage.js';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Products from './components/Products/Products';
import About from './components/About/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Currency />
      <HomePage />
      <Calculator />
      <Products />
      <About />
      <Footer />
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
    </>
  );
}

export default App;
