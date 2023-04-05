import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import Consultaion from './components/Consultation/Consultaion';
import Physical from './components/Physical/Physical';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/consultation' element={<Consultaion />} />
        <Route path='/physical' element={<Physical />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
