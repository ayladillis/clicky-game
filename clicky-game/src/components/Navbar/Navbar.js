import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
  <nav className="navbar fixed-top">
        <h2>Geckos Memory Game</h2>
        <h2 className="begin">Click an Image to Begin!</h2>
        <h2>Score</h2>
  </nav>
  );
}

export default Navbar;
