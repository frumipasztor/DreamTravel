import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const result = await fetch("/api/travellimit");
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
    //  e.preventDefault();

    let formData = {
      name: name,
      phone: phone,
      email: email,
      country: country,
      postCode: postCode,
      city: city,
      address: address,
      seat: seat,
    };

    if (seat <= avaliableData.avaliable) {
      await axios({
        method: "POST",
        url: "/api/invoicedata",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => console.log(response.data));
    } else {
      return alert("Sorry, not enough avaliable seat!");
    }
  };

  return (
    <div className="BookingForm">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Phone number"
          name="phone"
          value={phone}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={country}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Post Code"
          name="postCode"
          value={postCode}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={address}
          required
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          placeholder="Seat"
          min="1"
          max={avaliableData.avaliable}
          name="seat"
          value={seat}
          required
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="tos">
          <input type="checkbox" required name="tos" />I have read and agree to
          the{" "}
          <a
            href="http://localhost:5000/pdf/TermsOfServices.pdf"
            className="tos"
          >
            Terms of Service.
          </a>
        </label>
        <input type="submit" id="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookingForm;
