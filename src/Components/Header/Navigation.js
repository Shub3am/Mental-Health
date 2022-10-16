import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="Navigation">
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
  );
};

export default Navigation;
