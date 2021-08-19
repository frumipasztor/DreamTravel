import React, { useState, useEffect } from "react";
import "./TourComponent.scss";
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import { useHistory } from "react-router-dom";
import BookComponent from "../BookComponent/BookComponent";

const TourComponent = () => {
  const loginAuth = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=535725902429-v432uifnke70d514elsmph89hf9bf8j2.apps.googleusercontent.com&scope=openid%20email&%20profile&redirect_uri=http%3A//localhost:3000/tour&prompt=select_account`;
  };

  const [data, setData] = useState([]);
  const [avaliableData, setAvaliableData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
      await avaliableDataFetch();
    };
    dataFetch();
    if (!localStorage.getItem('myToken')){
      const code = new URL(window.location.href).searchParams.get("code");
    const token = { code: code };
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    };
  
    fetch("/api/login", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        localStorage.setItem("myToken", data);
      });
    }
  }, []);
  

  //! ----------------------------------------------------------------
/*
  let history = useHistory(); */

useEffect(() => {
  if (!localStorage.getItem('myToken')){
    const code = new URL(window.location.href).searchParams.get("code");
  const token = { code: code };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token),
  };

  fetch("/api/login", requestOptions)
    .then((response) => response.text())
    .then((data) => {
      localStorage.setItem("myToken", data);
    });
  }
}, []);
/*
const logout = () => {
  localStorage.removeItem("myToken");
  history.push("/");} */

//! -------------------------------------------------------------------------

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
        <h1>Tour info</h1>
        <div className="tour-flex">
          <div className="tour-left">
            <p>{data.summary}</p>
          </div>
          <div className="tour-right">
            <h2>Next tour</h2>
            <p>
              <GiIcons.GiCommercialAirplane /> {data.to}
            </p>
            <p>
              <FiIcons.FiCalendar /> {data.duration_from} - {data.duration_to}{" "}
            </p>
            <p>
              <BiIcons.BiMapPin /> From {data.from}
            </p>
            <p><BsIcons.BsPersonFill/> {data.limit} Capacity</p>
            <p><BsIcons.BsPersonCheckFill/> {avaliableData.avaliable} Avaliable </p>
          </div>
        </div>
      </div>
      {!localStorage.getItem('myToken') ? ( <div className="login">
        <button onClick={loginAuth}>Booking</button>
      </div>) : (<BookComponent/>)}
     
    </div>
  );
};

export default TourComponent;
