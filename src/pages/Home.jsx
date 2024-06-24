// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Services from './Services';
import TestimonialsCarousel from '../components/TestimonialsCarousel';



function Home() {
  return (
<>
  <header className='hero'>
    <div className='container'>
      <h1>In-Person & Online <br /> Personal Training</h1>
      <h2>Top-tier coaches using the power of consistency to help you reach your fitness goals</h2>
        <Link to="/about">
          <button className="lrn-more-btn">Learn More</button>
        </Link>
        <Link to="/services">
          <button className="get-started-btn">Get Started</button>
        </Link>
    </div>
  </header>

  <main>
    <section className='intro-text-wrapper'>
      <img className='intro-image' alt='gym equipment' src='https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='intro-text-box'>
        <h2>Steady State Fitness</h2>
        <p>Here we believe in the power of consistency. Whether you want to compete in marathons or keep up with your grandkids, we'll get you there through steady and reliable fitness programming.</p>
      </div>
    </section>

    <section className='services-wrapper'>
      <h2 className='services-wrapper-header'>Our Services</h2>
      <Services />
    </section>

    <section className='support-wrapper'>
      <div className='support-text-box'>
        <h2>Feeling Stuck?</h2>
        <p>Let us help guide you in the right direction by contacting us or filling out our free consultation.</p>
        <Link to="/contact">
          <button className="contact-us">Contact Us</button>
        </Link>
      </div>
      <img className='support-image' alt='hand reaching out in the ocean' src='https://images.unsplash.com/photo-1495427513693-3f40da04b3fd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </section>

    <section>
      <TestimonialsCarousel />
    </section>

    <section className='cta-wrapper'>
      {/* Content for Call to Action */}
    </section>
  </main>
</>

  )
};

export default Home;

