import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer
      className='footer'
      style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        alignContent: 'center',
      }}
    >
      <div className='footer-logo'>
        <h1>KESQU'ONREGARDE </h1>
      </div>
      <nav>
        <ul className='footer-nav'>
          <li>contact</li>
          <li>A propos</li>
          <li>CG</li>
        </ul>
        <div className='social-media-icons'>
          <a href='https://www.facebook.com/'>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href='https://twitter.com/'>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
