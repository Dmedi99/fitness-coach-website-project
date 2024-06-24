// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavBar.css';

function NavBar() {
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setNavActive(!navActive);
  }

  return (
    <nav>
      <div className='logo-container'>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
          <li key={index} style={{ animation: navActive ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` : '' }}>
            <Link to={`/${text.toLowerCase()}`}>{text}</Link>
          </li>
        ))}
      </ul>
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={handleClick}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default NavBar;
