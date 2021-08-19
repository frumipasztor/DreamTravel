import React, { useState, useEffect } from "react";
import "./SightsComponent.scss";
import "./SightsResponsitivity.scss";
import { Link } from "react-router-dom";

const SightsComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch("/api/sights");
    const jsonData = await result.json();
    //    console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div className="Sights">
      <div className="sights-content">
        <h1>{data.title}</h1>
        <Link to="/blog" className="return">
          Return
        </Link>

        <div className="sights-content-text">
          {/* <img src={`/img/${data.img}.jpg`} alt="hawaii"></img> */}
          <div className="flexleft">
            <h3>{data.firstptitle}</h3>
            <p>{data.firstp}</p>
            <h3>{data.secondptitle}</h3>
            <p>{data.secondp}</p>
          </div>
          <div className="flexright">
            <h3>{data.thirdptitle}</h3>
            <p>{data.thirdp}</p>
            <h3>{data.fourthptitle}</h3>
            <p>{data.fourthp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightsComponent;
