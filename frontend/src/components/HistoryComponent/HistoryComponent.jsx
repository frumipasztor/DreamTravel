import React, { useState, useEffect } from "react";
import "./HistoryComponent.scss";
import "./HistoryResponsitivity.scss";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const HistoryComponent = () => {
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
      "https://dreamtravelserver.herokuapp.com/api//history"
    );
    const jsonData = await result.json();
    //   console.log(jsonData);
    setData(jsonData);
    setLoading(false);
  };

  const History = () => (
    <div className="history-content">
      <h1>{data.title}</h1>
      <Link to="/blog" className="return">
        Vissza
      </Link>
      <div className="history-content-text">
        <p>{data.firstp}</p>
        <p>{data.secondp}</p>
        <p>{data.thirstp}</p>
        <p>{data.fourthp}</p>
      </div>
    </div>
  );

  return <div className="History">{loading ? <Loader /> : <History />}</div>;
};

export default HistoryComponent;
