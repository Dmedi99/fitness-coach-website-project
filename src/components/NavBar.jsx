// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className='navbar'>
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
    </nav>
  );
}
export default NavBar;
