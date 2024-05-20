// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Consultation from './pages/Consultation';



const App = () => {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/consultation' element={<Consultation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
