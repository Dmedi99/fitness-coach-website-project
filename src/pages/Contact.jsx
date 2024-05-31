// src/pages/Contact.js
import React from 'react';
import EmailForm from '../components/EmailForm';

const Contact = () => {
  return (
    <>
      <div className='sub-header'>
        <h2>Let's Connect</h2>
        <p>Let's connect to get your journey started.</p>
      </div>
      <EmailForm />
    </>
  )
};

export default Contact;
