import React, { useState, useEffect } from "react";
import "./Contact.scss";
import "./ContactResponsitivity.scss";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as RiIcons from "react-icons/ri";
import { Loader } from "../Loader/Loader";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  useEffect(() => {
    console.log("effect", data);
  }, [data]);

  const fetchData = async () => {
    const result = await fetch(
      "https://dreamtravelserver.herokuapp.com/api/contact"
    );
    const jsonData = await result.json();
    setData(jsonData);
    setLoading(false);
  };

  const Contact = () => (
    <div className="contact-content">
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
  );

  return (
    <div className="Contact">
      <h1>Elérhetőségünk</h1>
      {loading ? <Loader /> : <Contact />}
    </div>
  );
};

export default Contact;
