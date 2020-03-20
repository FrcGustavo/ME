import React from 'react';

import githubIcon from '../assets/img/github.svg';
import twitterIcon from '../assets/img/twitter.svg';
import linkedinIcon from '../assets/img/linkedin.svg';

import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="main">
      <div className="footer-contact">
        <h3>Contacto</h3>
        <p>hidalgofco520@gmail.com</p>
      </div>
      <div className="footer-socialmedia">
        <h3>Redes Sociales</h3>
        <a href="https://github.com/FranciscoGustavo" target="_blanck">
          <img src={githubIcon} alt="Github" />
        </a>
        <a href="https://twitter.com/FrcGustavo" target="_blanck">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/frcgustavo/" target="_blanck">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
      </div>
      <div className="footer-blog">
        <h3>Blog</h3>
      </div>
    </div>
  </footer>
);

export default Footer;
