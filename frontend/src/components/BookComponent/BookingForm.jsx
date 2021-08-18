import React,  { useState } from 'react';
import axios from "axios";

const BookingForm = () => {

    const [inputs, setInputs] = useState({ name: '', phone: '', email: '', country: '', postCode: '', city: '', address: '' });

    const {name, phone, email, country, postCode, city, address} = inputs;

    const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
      e.preventDefault();

      let formData = {
        name: name,
        phone: phone,
        email: email,
        country: country,
        postCode: postCode,
        city: city,
        address: address,
      };

      await axios({
        method: "POST",
        url: "/api/invoicedata",
        data: formData,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => console.log(response.data))
    } 

    return (
        <>
                <form onSubmit={e => onSubmit(e)}>
                  <input type="text" placeholder="Name" id="name" name="name" value={name} onChange={e => onChange(e)} />
                  <input type="text" placeholder="Phone number" id="phone" name="phone" value={phone} onChange={e => onChange(e)} />
                  <input type="email" placeholder="Email" id="email" name="email" value={email} onChange={e => onChange(e)}/>
                  <input type="text" placeholder="Country" id="country" name="country" value={country} onChange={e => onChange(e)} />
                  <input type="text" placeholder="Post Code" id="post_code" name="postCode" value={postCode} onChange={e => onChange(e)} />
                  <input type="text" placeholder="City" id="city" name="city" value={city} onChange={e => onChange(e)}/>
                  <input type="text" placeholder="Address" id="address" name="address" value={address} onChange={e => onChange(e)}/>
                  <input type="submit" id="submit" value="Submit" />
                </form>
        </>
    )
}

export default BookingForm
