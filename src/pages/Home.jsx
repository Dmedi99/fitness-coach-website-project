// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Services from './Services';



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
      <div className='intro-text-wrapper'>
        <img className='intro-image' alt='gym equipment' src='https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className='intro-text-box'>
        <h2>Steady State Fitness</h2>
        <p>Here we beleive in the power of consistency. Whether you want to compete in marathons or keep up with your grandkids, we'll get you there through steady and reliable fitness programming</p>
        </div>
      </div>
      <div className='services-wrapper'>
        <Services />
      </div>
      <div className='support-wrapper'>
        <img alt='' src=''></img>
        <div className='support-text-box'>
          <h2>Feeling Stuck?</h2>
          <p>Let us help guide you in the right direction by contacting us or filling out our free consultation</p>
          </div>
      </div>

    </>
  )
};

export default Home;

