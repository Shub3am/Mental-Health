import React from "react";
import logo from "./favicon.ico";
import "./Assets/Contact/Contact.css";
const contact = () => {
  return (
    <div className="contact-us">
      <div className="contact-h1">
        <p id="contact">Need Help? We are there for you!</p>
      </div>
      <div>
        <div className="Info">
          <div className="school-text">
            <h2>Helpdesk Info:</h2>
            <div className="school-logo">
              <img src={logo} width="100px" alt="schoologo" id="logo" />
            </div>
          </div>
        </div>
        <div className="Details">
          <h2 id="email">Email:</h2>
          <a href="sbslflahartara.sunbeamschools.com" id="ID">
            shubham@vshubham.com
          </a>
          <br />
          <h2 id="number">Mobile No. : 7007937707</h2>
          <h2 id="number">Address: Sunbeam Schools, Lahartara</h2>
        </div>
      </div>
      <div class="form">
        <div class="title">Consult Us</div>
        <div class="subtitle">Sunbeam Mental Health Club</div>
        <div class="input-container ic1">
          <input id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            First name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Last name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>
        <button type="text" class="submit">
          submit
        </button>
      </div>
    </div>
  );
};

export default contact;
