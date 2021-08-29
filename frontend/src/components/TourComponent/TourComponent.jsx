import React, { useState, useEffect } from "react";
import "./TourComponent.scss";
import "./TourResponsivity.scss";
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";

const TourComponent = () => {
  const loginAuth = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=535725902429-9naeaikllsb929cbp28tnm9tjj7vs9e0.apps.googleusercontent.com&scope=openid%20email&%20profile&redirect_uri=https%3A//frumipasztor.github.io/DreamTravel/booking&prompt=select_account`;
  };

  const [data, setData] = useState([]);
  const [avaliableData, setAvaliableData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
      await avaliableDataFetch();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch("/api/traveldetails");
    const jsonData = await result.json();
    //   console.log(jsonData);
    setData(jsonData);
  };

  const avaliableDataFetch = async () => {
    const result = await fetch("/api/travellimit");
    const jsonData = await result.json();
    // console.log(jsonData);
    setAvaliableData(jsonData);
  };

  return (
    <div className="Tour">
      <div className="tour-content">
        <h1>Utazás</h1>
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
              <MdIcons.MdAttachMoney/> {data.price} /fő
            </p>
            <p>
              <BsIcons.BsPersonFill /> {data.limit} fő
            </p>
            <p className="avaliable">
              <BsIcons.BsPersonCheckFill /> {avaliableData.avaliable} szabad hely
            </p>
          </div>
        </div>
      </div>
      {!localStorage.getItem("myToken") ? (
        <div className="login">
          <div className="button">
            <button onClick={loginAuth}>Foglalás</button>
          </div>
        </div>
      ) : (
        <div className="bookNow">
          <Link to="/DreamTravel/booking">Foglalj most!</Link>
        </div>
      )}
    </div>
  );
};

export default TourComponent;
