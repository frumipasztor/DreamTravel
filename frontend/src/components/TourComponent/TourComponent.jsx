import React, { useState, useEffect } from "react";
import "./TourComponent.scss";
import "./TourResponsivity.scss";
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const TourComponent = () => {
  const [data, setData] = useState([]);
  const [avaliableData, setAvaliableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
      await avaliableDataFetch();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://dreamtravelserver.herokuapp.com/api/traveldetails"
    );
    const jsonData = await result.json();
    //   console.log(jsonData);
    setData(jsonData);
    setLoading(false);
  };

  const avaliableDataFetch = async () => {
    const result = await fetch(
      "https://dreamtravelserver.herokuapp.com/api/travellimit"
    );
    const jsonData = await result.json();
    // console.log(jsonData);
    setAvaliableData(jsonData);
    setLoading(false);
  };

  const Tour = () => (
    <>
      <div className="tour-content">
        <div className="tour-flex">
          <div className="tour-left">
            <p>{data.summary}</p>
          </div>
          <div className="tour-right">
            <h2>Következő</h2>
            <p>
              <GiIcons.GiCommercialAirplane /> {data.to}
            </p>
            <p>
              <FiIcons.FiCalendar /> {data.duration_from} - {data.duration_to}{" "}
            </p>
            <p>
              <BiIcons.BiMapPin /> {data.from}
            </p>
            <p>
              <MdIcons.MdAttachMoney /> {data.price} /fő
            </p>
            <p>
              <BsIcons.BsPersonFill /> {data.limit} fő
            </p>
            <p className="avaliable">
              <BsIcons.BsPersonCheckFill /> {avaliableData.avaliable} szabad
              hely
            </p>
          </div>
        </div>
      </div>
      <div className="bookNow">
        <Link to="/booking">Foglalj most!</Link>
      </div>
    </>
  );

  return (
    <div className="Tour">
      <h1>Utazás</h1>
      {loading ? <Loader /> : <Tour />}
    </div>
  );
};

export default TourComponent;
