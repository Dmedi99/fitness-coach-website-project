import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure you have the CSS in the same directory or update the path accordingly
import logo from '../assets/logo.png'

const NavBar = () => {
    const [navActive, setNavActive] = useState(false);

    const handleBurgerClick = () => {
        setNavActive(!navActive);
    };

    return (
        <nav>
            <div className="logo-container">
              <Link to='/'>
                <img src={logo} alt='logo' className='logo'></img>
              </Link>
            </div>
            <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
                {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
                    <li key={index} style={{ animation: navActive ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s` : '' }}>
                        <Link to={`/${text.toLowerCase()}`}>{text}</Link>
                    </li>
                ))}
                <li className="button" style={{ animation: navActive ? `navLinkFade 0.5s ease forwards ${4 / 7 + 0.5}s` : '' }}>
                    <Link to="/consultation">Free Consultation</Link>
                </li>
            </ul>
            <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default NavBar;
