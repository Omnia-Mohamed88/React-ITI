
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
        <span className="email-text">Omnia.Mohammad.Ahmedd@gmailcom</span>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
