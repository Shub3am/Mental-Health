import React from "react";
import Symptom_Image from "./assets/symp.png";
import "./Symptoms.css";
const Symptoms = () => {
  return (
    <div className="Symptoms">
      <h1 className="Symptoms-Heading"></h1>
      <div className="Symptoms-Main">
        <div className="Symptoms-1">
          <h1>Common Symptoms Include:</h1>
          <p>
            <ul>
              <li>Confused thinking or reduced ability to concentrate</li>
              <li>Excessive fears or worries, or extreme feelings of guilt</li>
              <li>
                Detachment from reality (delusions), paranoia or hallucinations
              </li>
              <li>Excessive anger, hostility or violence</li>
            </ul>
          </p>
        </div>
        <div>
          <img src={Symptom_Image} width="300px" />
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
