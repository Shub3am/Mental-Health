import "./App.css";
import React, { Component } from "react";
import Symptoms from "./Components/Symptoms/Symptoms";
import Faq from "./Components/Faq/Faq";
import Self_Awareness from "./Components/Self-Awareness/self-awareness";

import Stats from "./Components/Stats/Stats";
class Home extends Component {
  constructor() {
    super();
    this.state = { CurrentPath: "" };
  }
  render() {
    return (
      <div>
        <Stats />
        <Symptoms />
        <Faq />
        <Self_Awareness />
      </div>
    );
  }
}
export default Home;
