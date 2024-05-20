// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='page'>
      <div className='hero'>
        <h2 className='title'>In-Person & Online <br></br> Personal Training</h2>
        <p className='paragraph'>With the power of consistency we will help you reach your fitness goals</p>
        <div className='button-container'>
          <Link to='/about' className='button'>Learn More</Link>
          <Link to='/services' className='button'>Get Started</Link>
        </div>
      </div>
    </div>
  )
};

export default Home;
