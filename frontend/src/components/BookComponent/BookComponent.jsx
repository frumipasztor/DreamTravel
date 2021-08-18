import React, { useState, useEffect } from 'react';
import './BookComponent.scss';
import BookingForm from './BookingForm';
import { useHistory } from "react-router-dom";
// import axios from 'axios';

const BookComponent = () => {
/*
useEffect(() => {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  const fetchData = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:5000/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
    .then((response) => response.json())
    .then((data) => {
       console.log("data:" + data);
      localStorage.setItem("myToken", data.myToken);
    });
  }
  fetchData();
}, []);
*/

let history = useHistory();

/* useEffect(() => {
  const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  const token = { code: code };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token),
  };

  fetch("/api/login", requestOptions)
    .then((response) => response.text())
    .then((data) => {
   //   console.log(data);
      localStorage.setItem("myToken", data);
      history.push("/booking");
    });
}, [history]); */

useEffect(() => {
  if (!localStorage.getItem('myToken')){
    const code = new URL(window.location.href).searchParams.get("code");
  // console.log(code);
  const token = { code: code };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token),
  };

  fetch("/api/login", requestOptions)
    .then((response) => response.text())
    .then((data) => {
   //   console.log(data);
      localStorage.setItem("myToken", data);

    });
  }
}, []);

const [avaliableData, setAvaliableData] = useState([]);

useEffect(() => {
  const dataFetch = async () => {
    await avaliableDataFetch();
  };
  dataFetch();
}, []);

const avaliableDataFetch = async () => {
  const result = await fetch("/api/travellimit");
  const jsonData = await result.json();
 // console.log(jsonData);
  setAvaliableData(jsonData);
};

const logout = () => {
  localStorage.removeItem("myToken");
  history.push("/");
};


    return (
        <div className="Booking">
            <div className="booking-content">
                <h1>Booking</h1>
                <h3> Currently avaliable space {avaliableData.avaliable} !</h3>
                <button onClick={logout}>LOG OUT</button>
               <BookingForm/>
            </div>
        </div>
    )
}

export default BookComponent
