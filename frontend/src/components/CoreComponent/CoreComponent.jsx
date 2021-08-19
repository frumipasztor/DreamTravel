import React from "react";
//import './CoreComponent.scss';
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";

const CoreComponent = () => {
  return (
    <div className="coreE">
      <header>
        <Link to="/">Dreamtravel.</Link>
      </header>
      <div className="glass"></div>
      <video src="./water.mov" autoPlay muted loop></video>
      <Socials />
    </div>
  );
};

export default CoreComponent;
