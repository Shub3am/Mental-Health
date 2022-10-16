import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaGrinBeam,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-Section">
      <div className="Footer">
        <div className="Footer-Section-1">
          <h1>About Us</h1>
          <p>
            We are passionate developers
            <br />
            helping the world grow!
          </p>
          <div className="Header-Social">
            <a href="https://instagram.com/shubham_codez">
              <FaInstagram size="20px" />
            </a>
            <FaFacebook size="20px" />
            <a href="https://twitter.com/Shubh3m">
              <FaTwitterSquare size="20px" />
            </a>
            <a href="https://wa.me/917007937707">
              <FaWhatsappSquare size="20px" />
            </a>
          </div>
        </div>
        <div className="Footer-Section-2">
          <div className="Footer-Menu">
            <h2>Quick Navigation</h2>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/help">How We Can Help</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-Section3">
          <h2 className="newsletter">Newsletter</h2>
          <input type="email" placeholder="Email" />
          <br />
          <input type="text" placeholder="Your Name" />
          <br />
          <input className="submit" id="submit" type="submit"></input>
        </div>
      </div>

      <hr />
      <h2 className="footer-copyright">
        Made With Love By Shubham. Copyright Reserved!
      </h2>
    </div>
  );
};

export default Footer;
