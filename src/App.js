import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Currency from './components/Currency.jsx';
import HomePage from './components/HomePage/HomePage.js';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Products from './components/Products/Products';
import About from './components/About/About';
import Trust from './components/Trust/Trust';
import Accordion from './components/Accordion.jsx';

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
      <Trust />
      <Accordion />
      <Footer />
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
    </>
  );
}

export default App;
