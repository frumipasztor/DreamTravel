import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import "./BookComponent.scss";
import "./BookResponsitivity.scss";

const BookComponent = () => {
  // eslint-disable-next-line
  const [avaliableData, setAvaliableData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await avaliableDataFetch();
    };
    dataFetch();
  }, []);

  const avaliableDataFetch = async () => {
    const result = await fetch(
      "https://dreamtravelserver.herokuapp.com/api/travellimit"
    );
    const jsonData = await result.json();
    setAvaliableData(jsonData);
  };

  return (
    <div className="Booking">
      <div className="booking-content">
        <h1>Foglalás</h1>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookComponent;
