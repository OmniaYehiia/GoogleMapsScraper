import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://www.facebook.com/pixelssummit/" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/pixelssummit" target="_blank" rel="noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()}, Pixels Summit LLC · 
                <a href="https://pixelssummit.com/policies/privacy-policy" target="_blank" rel="noreferrer">Privacy policy</a> · 
                <a href="https://pixelssummit.com/policies/contact-information" target="_blank" rel="noreferrer">Contact information</a> · 
                <a href="https://pixelssummit.com/policies/terms-of-service" target="_blank" rel="noreferrer">Terms of service</a> · 
                <a href="https://pixelssummit.com/policies/refund-policy" target="_blank" rel="noreferrer">Refund policy</a>
            </div>
        </footer>
    );
};

export default Footer;