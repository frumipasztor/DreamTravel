import React, { useState, useEffect } from "react";
//import axios from "axios";
import "./BookingForm.scss";

const BookingForm = () => {
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
    //  console.log(jsonData);
    setAvaliableData(jsonData);
  };

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    postCode: "",
    city: "",
    address: "",
    seat: "",
  });

  const { name, phone, email, country, postCode, city, address, seat } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    /*   let formData = {
      name: name,
      phone: phone,
      email: email,
      country: country,
      postCode: postCode,
      city: city,
      address: address,
      seat: seat,
    };*/

    if (seat <= avaliableData.avaliable) {
      /* await axios({
        method: "POST",
        url: "https://dreamtravelserver.herokuapp.com/api/invoicedata",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => console.log(response.data));*/
      return alert("Foglalás elküldve!");
    } else {
      return alert("Elnézést, nincs elegendő hely!");
    }
  };

  return (
    <div className="BookingForm">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Név"
          name="name"
          value={name}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Telefonszám"
          name="phone"
          value={phone}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={email}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Ország"
          name="country"
          value={country}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Irányítószám"
          name="postCode"
          value={postCode}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Város"
          name="city"
          value={city}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Cím"
          name="address"
          value={address}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          placeholder="Helyek száma"
          min="1"
          max={avaliableData.avaliable}
          name="seat"
          value={seat}
          required
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="tos">
          <input type="checkbox" required name="tos" /> Elolvastam és elfogadom
          a
          <a
            href="https://dreamtravelserver.herokuapp.com/pdf/TermsOfServices.pdf"
            className="tos"
          >
            szerződési feltételeket.
          </a>
        </label>
        <input type="submit" id="submit" value="Foglalás elküldése" />
      </form>
    </div>
  );
};

export default BookingForm;
