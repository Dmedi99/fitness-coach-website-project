import React, { useState } from "react";
import emailjs from "emailjs-com";
import './ConsultationForm.css';

function ConsultationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function sendConsultation(e) {
        e.preventDefault();

        emailjs.sendForm('service_wyyxdil', 'template_569kxyl', e.target, 'vQjeiBpAw9fEbSx_k')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    if (isSubmitted) {
        return (
            <div className="thank-you-message">
                <h2>Thank you for submitting your consultation form!</h2>
                <p>We will review your information and get back to you shortly.</p>
                <a href="/" className="return-button">Return to Homepage</a>
            </div>
        );
    }

    return (
        <div className="consultation-form-container">
            <form className="consultation-form" onSubmit={sendConsultation}>
                <label>
                    Full Name:
                    <input type="text" name="user_name" placeholder="Full Name" required />
                </label>
                <label>
                    Date of Birth ('MM/DD/YYYY' format):
                    <input type="text" name="dob" placeholder="Date of Birth" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="user_email" placeholder="Email" required />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="contact_number" placeholder="Phone Number" required />
                </label>
                <label>
                    Preferred method of contact:
                    <select name="contact_preference" placeholder="select one">
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text</option>
                    </select>
                </label>
                <label>
                    Which plan are you interested in?
                    <select name="plan" placeholder="select one">
                        <option value="in-person-training">Basic</option>
                        <option value="online-programming">Online Programming</option>
                        <option value="hybrid-coaching">Hybrid Coaching</option>
                        <option value='undecided'>Not sure - help me decide!</option>
                    </select>
                </label>
                <label>
                    Do you have access to a gym or basic fitness equipment?
                    <select name="equipment" placeholder="select all that apply" multiple>
                        <option value="gym membership">I have a gym membership</option>
                        <option value='home gym'>I have a home gym</option>
                        <option value='some equipment'>I have some home equipment</option>
                        <option value='no equipment'>I have no equipment</option>
                    </select>
                </label>
                <label>
                    How often do you exercise:
                    <select name='workout_frequency' placeholder='select one'>
                        <option value='once a week'>Once a Week</option>
                        <option value='2 or 3 times a week'>Two to three times a week</option>
                        <option value='4 or more times a week'>Four or more times a week</option>
                        <option value='Once a month or less'>Once a month or less</option>
                    </select>
                </label>
                <label>
                    How often do you want to exercise?
                    <select name='desired_workout_frequency' placeholder='select one'>
                        <option value='once a week'>Once a Week</option>
                        <option value='2 or 3 times a week'>Two to three times a week</option>
                        <option value='4 or more times a week'>Four or more times a week</option>
                    </select>
                </label>
                <label>
                    Do you have any past or present injuries?
                    <input type='text' name='injuries' placeholder='Injuries' required />
                </label>
                <label>
                    What are your current health and fitness goals?
                    <input type='text' name='goals' placeholder='Goals' required />
                </label>
                <label>
                    In your experience, what is the most challenging part of following a steady health and fitness routine?
                    <input type='text' name='challenges' placeholder='Challenges' required />
                </label>
                <label>
                    What aspects do you want to improve on? Check all that apply.
                    <select name='improvements' placeholder='select all that apply' multiple>
                        <option value='General Fitness'>General Fitness</option>
                        <option value='Accountability'>Accountability</option>
                        <option value='Strength'>Strength</option>
                        <option value='Endurance'>Endurance</option>
                        <option value='Sport Specific Fitness'>Sport Specific Fitness</option>
                        <option value='Weight Gain'>Weight Gain</option>
                        <option value='Weight Loss'>Weight Loss</option>
                        <option value='Mental Performance'>Mental Performance</option>
                        <option value='Other'>Other:
                            <input type='text' name='other' />
                        </option>
                    </select>
                </label>
                <label>
                    Any additional comments or questions?
                    <input type='text' name='comments' placeholder='Your answer' />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ConsultationForm;
