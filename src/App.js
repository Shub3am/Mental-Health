import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Help from "./Help";
import Contact from "./Contactus";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <div className="Hero-Section">
        <Header />
        <Hero />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
