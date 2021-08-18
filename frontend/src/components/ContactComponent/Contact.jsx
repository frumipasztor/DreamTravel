import React from "react";
import "./Contact.scss";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-content">
      <h1>Contact us</h1>
      <div className="contact-text">
        <h2>Need help?</h2>
        <h3>Contact our dedicated Support Team</h3>
        <div className="contact-cons">
          <p>
            <AiIcons.AiFillPhone /> +36 70 / 523 - 8742{" "}
          </p>
          <p>
            <RiIcons.RiTimeFill /> Monday to Friday, 8:00am – 6:00pm
          </p>
          <p>
            <GrIcons.GrMail /> dreamtravel@creatememories.com
          </p>
        </div>
      </div></div>
    </div>
  );
};

export default Contact;
