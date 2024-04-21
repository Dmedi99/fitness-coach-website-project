// src/pages/Contact.js
import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_rh8yjq1', 'template_15d1zlt', e.target, 'vQjeiBpAw9fEbSx_k')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
  }
  return (
<div className='page'>
  <div>
    <h2 className='title'>Contact Page</h2>
    <p className='paragraph'>Let's connect to get your journey started.</p>
    <h3 className='form-title'>Message:</h3>
    <form className='contact-form' onSubmit={sendEmail}>
      <textarea className='form-text-area' name="message" />
      <button className='send-email-button' type="submit">Send</button>
    </form>
  </div>
</div>
  );
};

export default Contact;
