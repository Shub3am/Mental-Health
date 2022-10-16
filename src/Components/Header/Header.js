import React from "react";
import Navigation from "./Navigation";
import Logo from "../Hero/Assets/logos.png";
import "./Header.css";
import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

function Header({ logo }) {
  return (
    <div className="Header">
      <img src={Logo} width="75px" />
      <Navigation />
      <div className="Social-Media">
        <a href="https://www.facebook.com/Shubh3m/">
          <FaFacebook size="25px" />
        </a>
        <a href="https://github.com/Shub3am">
          <FaGithub size="25px" />
        </a>
        <a href="https://www.reddit.com/user/Shub3am">
          <FaReddit size="25px" />
        </a>
      </div>
    </div>
  );
}

export default Header;
