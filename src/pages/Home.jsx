// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



function Home() {
  return (
    <>
      <div className='hero-image'>
        <div className='hero-text'>
          <h1>In-Person & Online <br></br> Personal Training</h1>
          <h2>Top-tier coaches using the power of consistency to help you reach your fitness goals</h2>
          <div className='hero-buttons'>
            <Link to="/about">
              <button className="learn-more">Learn More</button>
            </Link>
            <Link to="/services">
              <button className="get-started">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='intro-div'>
        <h1>Steady State Fitness</h1>
        <h2> Here we beleive in the power of consistency. Wehter you want to compete in marathons or keep up with your grandkids, we'll get you there through steady and reliable fitness programming</h2> 
        <Link to='/about'>
          <button className='learn-more'>Learn More</button>
        </Link> 
        

      </div>
    </>
  )
};

export default Home;