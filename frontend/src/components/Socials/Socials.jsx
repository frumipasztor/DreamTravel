import React from "react";
import { Link } from "react-router-dom";
import "./Socials.scss";
import "./SocialsResponsitivity.scss";

const Socials = () => {
  return (
    <>
      <ul className="sci">
        <li>
          <Link to="#">Facebook</Link>
        </li>
        <li>
          <Link to="#">Twitter</Link>
        </li>
        <li>
          <Link to="#">Instagram</Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
