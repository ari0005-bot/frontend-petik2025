import React from 'react';
import './Footer.css';

const Footer = ({ nama }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h5 className="footer-title">NongkiBroo</h5>
            <p className="footer-description">
              Coffee shop terbaik untuk nongkrong santai bersama teman-teman.
            </p>
          </div>
          
          <div className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h5 className="footer-title">Contact</h5>
            <p className="footer-contact">
              Email: info@nongkibroo.com<br />
              Phone: 0831-7499-7982
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} NongkiBroo. Developed with <span className="heart">&#10084;</span> by {nama}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;