import React from "react";
import "./Jumbotron.css"

function Jumbotron() {
  return (

<div className="header">
  <img className="card-img" src="https://www.mobius.photography/wp-content/uploads/2018/06/DSC6113-Edit-Orange-layers-of-light-san-rafael-swell-Utah-sunrise.jpg" alt="Card image" />
  <div className="card-img-overlay">
    <h1 className="card-title">Clicky Game</h1>
    <p className="card-text">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
</div>
  );
}

export default Jumbotron;