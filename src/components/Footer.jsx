import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer header">STEADY STATE FITNESS</h1>
            <p className="copyright"> © Copyright 2024</p>
            <Link to='/contact'>Contact Us</Link>
        </footer>
    )
}

export default Footer;