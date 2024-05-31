// src/components/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className={`logo-container ${isOpen ? 'active' : ''}`}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li className='navbar-item'>
          <Link to="/" className='navbar-link' onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/about" className='navbar-link' onClick={() => setIsOpen(false)}>Coaches</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/services' className='navbar-link' onClick={() => setIsOpen(false)}>Services</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/contact" className='navbar-link' onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        {isMobile && (
          <li className='navbar-item'>
            <Link to="/consultation" className="consultation-button mobile" onClick={() => setIsOpen(false)}>Free Consultation</Link>
          </li>
        )}
      </ul>
      {!isMobile && (
        <Link to="/consultation" className="consultation-button">Free Consultation</Link>
      )}
      <div className={`close-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        &times;
      </div>
    </nav>
  );
}

export default NavBar;
