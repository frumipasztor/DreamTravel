import React, { useState, useEffect } from "react";
import "./AboutComponent.scss";
import "./AboutResponsitivity.scss";
import { Loader } from "../Loader/Loader";

const AboutComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://dreamtravelserver.herokuapp.com/api/about"
    );
    const jsonData = await result.json();
    // console.log(jsonData);
    setData(jsonData);
    setLoading(false);
  };

  const About = () => (
    <div className="about-content">
      <div className="about-content-text">
        <p>{data.pharagraph1}</p>
        <p>{data.pharagraph2}</p>
      </div>
    </div>
  );

  return (
    <div className="About">
      <h1>Rólunk</h1>
      {loading ? <Loader /> : <About />}
    </div>
  );
};

export default AboutComponent;
