import React from "react";
import emailjs from "emailjs-com";
import './EmailForm.css';


function EmailForm() {
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
      <div>
        <form className='contact-form' onSubmit={sendEmail}>
          <label>
            Name:
            <input type='text' name='user_name' placeholder='Name' required />
          </label>
          <label>
            Email:
            <input type='email' name='user_email' placeholder='Email' required />
          </label>
          <label>
            Phoner Number:
            <input type='text' name='contact_number' placeholder='(Optional)'/>
          </label>
          <label>
            Best way to reach you: 
            <select name='contact_preference' placeholder='select one'>
              <option value='email'>Email</option>
              <option value='phone'>Phone</option>
              <option value='text'>Text</option>
            </select>
          </label>
          <label>
            Message:
            <textarea className='form-text-area' name='message' placeholder="Let's connect" required />
          </label>
          <button className='send-email-button' type='submit'>Send</button>
        </form>
      </div>
      );

}

export default EmailForm;