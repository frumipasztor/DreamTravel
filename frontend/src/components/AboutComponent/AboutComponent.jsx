import React, { useState, useEffect } from "react";
import "./AboutComponent.scss";
import "./AboutResponsitivity.scss";

const AboutComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch("https://dreamtravelserver.herokuapp.com/api/about");
    const jsonData = await result.json();
    // console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div className="About">
      <div className="about-content">
        <h1>Rólunk</h1>
        <div className="about-content-text">
          <p>{data.pharagraph1}</p>
          <p>{data.pharagraph2}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
