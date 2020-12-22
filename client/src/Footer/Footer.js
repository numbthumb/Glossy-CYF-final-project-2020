import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
          <div id="communityLinks">
            <span>Our community</span>
          <ul>
              <li><a href="#">Website</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
          
          <div id="socialLinks">
            <span>Socials</span>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          
        <div className="registration">
          © All rigths reserved | Registered charity 1174929 |{' '}
          <a
            href="https://codeyourfuture.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeYourFuture
          </a>{' '}
          | 2020 Copyright{' '}
        </div>
      </footer>
    );
};

export default Footer;