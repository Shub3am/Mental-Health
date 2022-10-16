import "./Hero.css";
import React from "react";
import Vector from "./Assets/mental-health-vector.png";

import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Content">
        <h1>Mental health is just as important as physical health</h1>

        <p>
          "There is hope, even when your brain tells you there isn’t." - John
          Green
        </p>
      </div>

      <div className="Hero-Image floating">
        <img src={Vector} width="700px" />
      </div>
      <div className="Hero-Icon">
        <FiArrowDown size="50px" />
      </div>
    </div>
  );
};

export default Hero;
