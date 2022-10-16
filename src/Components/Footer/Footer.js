import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaGrinBeam,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer-Section">
      <div className="Footer">
        <div className="Footer-Section-1">
          <h1>About Us</h1>
          <p>
            We are are group of passionate readers
            <br />
            helping the world learn!
          </p>
          <div className="Header-Social">
            <FaInstagram size="20px" />
            <FaFacebook size="20px" />
            <FaTwitterSquare size="20px" />
            <FaWhatsappSquare size="20px" />
          </div>
        </div>
        <div className="Footer-Section-2">
          {" "}
          <div className="Footer-Menu">
            <h2>Quick Navigation</h2>
            <ul>
              <li> Home</li>
              <li> Events</li>
              <li> Registration</li>
              <li> Contact Us</li>
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
