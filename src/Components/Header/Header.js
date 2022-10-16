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
        <FaFacebook size="25px" />
        <FaGithub size="25px" />
        <FaReddit size="25px" />
      </div>
    </div>
  );
}

export default Header;
