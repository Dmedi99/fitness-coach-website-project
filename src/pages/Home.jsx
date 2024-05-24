// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



function Home () {
  return (
    <>
      <div className='hero'>
        <h2 className='hero-title'>In-Person & Online <br></br> Personal Training</h2>
        <p className='hero-paragraph'>With the power of consistency we will help you reach your fitness goals</p>
        <Link to="/about">
          <button className="learn-more">Learn More</button>
        </Link>
        <Link to="/services">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </>
  )
};

export default Home;