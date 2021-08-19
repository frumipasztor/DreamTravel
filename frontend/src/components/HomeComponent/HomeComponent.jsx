import React from "react";
import "./HomeComponent.scss";
import "./HomeResponsivity.scss";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="coreE">
      <header>
        <Link to="#">Dreamtravel.</Link>
      </header>
      <div className="glassHome"></div>
      <div className="content">
        <h2>
          Dream...<br></br>
          <span>Work, Travel, Save, Repeat</span>
        </h2>
      </div>
      <video src="./water.mov" autoPlay muted loop></video>
    </div>
  );
};

export default HomeComponent;
