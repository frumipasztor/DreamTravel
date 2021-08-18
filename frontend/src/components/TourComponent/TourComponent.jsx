import React from "react";
import "./TourComponent.scss";
import * as GiIcons from "react-icons/gi";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

const TourComponent = () => {

  const loginAuth = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=535725902429-v432uifnke70d514elsmph89hf9bf8j2.apps.googleusercontent.com&scope=openid%20email&%20profile&redirect_uri=http%3A//localhost:3000/booking&prompt=select_account`;
  };

  return (
    <div className="Tour">
      <div className="tour-content">
        <h1>Tour info</h1>
        <div className="tour-flex">
          <div className="tour-left">
            <p>
              Integer finibus nisi erat. Sed tempus dui non nunc molestie, eu
              aliquam enim ornare. In vel viverra eros, sit amet rutrum tellus.
              Fusce molestie, diam quis facilisis sollicitudin, velit massa
              bibendum erat, in venenatis quam urna nec risus. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Cras condimentum
              viverra interdum. In lectus ipsum, accumsan sed urna quis, iaculis
              bibendum ante. Pellentesque efficitur luctus dui, cursus vulputate
              nulla.
            </p>
          </div>
          <div className="tour-right">
            <h2>Next tour</h2>
            <p>
              <GiIcons.GiCommercialAirplane /> Hawaii
            </p>
            <p>
              <FiIcons.FiCalendar /> 08.09.2021 - 22.09.2021{" "}
            </p>
            <p>
              <BiIcons.BiMapPin />
              From Budapest
            </p>
          </div>
        </div>
      </div>
      <div className="login">
     <button onClick={loginAuth}>Booking</button>
      </div>
    </div>
  );
};

export default TourComponent;
