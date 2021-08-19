import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const BookComponent = () => {

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
  setAvaliableData(jsonData);
};

    return (
        <div className="Booking">
            <div className="booking-content">
               <BookingForm/>
            </div>
        </div>
    )
}

export default BookComponent
