import React, { useState, useEffect } from "react";
import "./HistoryComponent.scss";
import "./HistoryResponsitivity.scss";
import { Link } from "react-router-dom";

const HistoryComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch("/api/history");
    const jsonData = await result.json();
    //   console.log(jsonData);
    setData(jsonData);
  };

  return (
    <div className="History">
      <div className="history-content">
        <h1>{data.title}</h1>
        <Link to="/DreamTravel/blog" className="return">
          Vissza
        </Link>
        <div className="history-content-text">
          <p>{data.firstp}</p>
          <p>{data.secondp}</p>
          <p>{data.thirstp}</p>
          <p>{data.fourthp}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
