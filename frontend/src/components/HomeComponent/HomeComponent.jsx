import React from "react";
import "./HomeComponent.scss";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="coreE">
      <header>
        <Link to="#">Dreamtravel.</Link>
      </header>
      <div className="glassHome"></div>
      <div className="content"><h2>Happiness...<br></br><span>Crystal clear water</span></h2></div>
      <video src="./water.mp4" autoPlay muted loop></video>
    </div>
  );
}

export default HomeComponent;
