// src/pages/Contact.js
import React from 'react';
import EmailForm from '../components/EmailForm';

const Contact = () => {
  return (

    <div className='page'>
      <div className='sub-header'>
        <h2 className='title'>Let's Connect</h2>
        <p className='paragraph'>Let's connect to get your journey started.</p>
        <h3 className='form-title'>Message:</h3>
      </div>
      <EmailForm />
    </div>

  )
};

export default Contact;
