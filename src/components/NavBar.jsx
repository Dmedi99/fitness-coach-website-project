// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to="/" className='navbar-link'>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/about" className='navbar-link'>About</Link>
        </li>
        <li className='navbar-item'>
          <Link to='/services' className='navbar-link'>Services</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/contact" className='navbar-link'>Contact</Link>
        </li>
      </ul>
      <Link to="/consultation" className="consultation-button">Free Consultation</Link>
    </nav>
  );
}
export default NavBar;
