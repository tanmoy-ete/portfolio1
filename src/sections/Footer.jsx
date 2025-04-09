import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-text">
            Do you want to know more about me? Contact me anytime. I will try my best to provide you with valid informations<br /><br />
            Address: Rajshahi, Bangladesh.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Any queries?</h3>
          <p className="footer-text">Ask me any questions</p>
          <div className="newsletter-form">
            <input 
              type="text" 
              placeholder="Enter your question here" 
              className="text-input"
            />
            <button className="subscribe-btn" onclick="window.location.href='mailto:sabbirahmed@gmail.com'" >Send</button>
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Me</h3>
          <p className="footer-text">Let us be social</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/15zA7Q7sT2/" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="https://www.instagram.com/against_all_odds_333?igsh=MWxhNW84dG15anBjcg==" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/sabbir-ahamed-860653275/" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright ©2025 All rights reserved 
        </p>
      </div>
    </footer>
  );
};

export default Footer;