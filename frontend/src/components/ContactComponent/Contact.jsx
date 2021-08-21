import React, { useState, useEffect } from "react";
import "./Contact.scss";
import "./ContactResponsitivity.scss";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";

const Contact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch("/api/contact");
    const jsonData = await result.json();
    //   console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div className="Contact">
      <div className="contact-content">
        <h1>Elérhetőségünk</h1>
        <div className="contact-text">
          <h2>Segítségre van szükséged?</h2>
          <h3>Vedd fel a kapcsolatot az ügyfélszolgálatunkkal</h3>
          <div className="contact-cons">
            <p>
              <AiIcons.AiFillPhone /> {data.tel}{" "}
            </p>
            <p>
              <RiIcons.RiTimeFill /> {data.open}{" "}
            </p>
            <p>
              <GrIcons.GrMail /> {data.email}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
