import React from "react";
import "./Navbar.css"

function Navbar(prop) {
  return (
  <nav className="navbar fixed-top">
        <h2>Gecko Memory Game</h2>
        <h2 className="begin">Click an Image to Begin!</h2>
        <h2>Score:{prop.count}| Top Score:</h2>
  </nav>
  );
}

export default Navbar;
