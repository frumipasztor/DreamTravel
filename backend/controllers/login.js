const login = (req, res) => {
  const fetch = require("node-fetch");
  const jwt_decode = require("jwt-decode");
  const User = require("../models/user.model");
  const jwt = require("jsonwebtoken");

  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  const tokentoken = {};
  const code = req.body.code;
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: "http://localhost:3000/booking",
    grant_type: "authorization_code",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.id_token;
      const decoded = jwt_decode(token);
      console.log(decoded);

      if (!decoded) {
        return res.status(400).json("token faliure");
      }

      const user = new User({
        email: decoded.email,
        given_name: decoded.given_name,
        sub: decoded.sub,
        name: decoded.name,
        picture: decoded.picture,
      });

      if (data.access_token) {
        tokentoken[decoded.sub] = data.access_token;
      }

      User.findOne({ sub: decoded.sub }).then((person) => {
        if (!person) user.save();
      });

      const myToken = jwt.sign(
        {
          sub: decoded.sub,
          email: decoded.email,
          user_pic: decoded.picture,
          given_name: decoded.given_name,
        },
        "MySecret"
      );
      console.log("vodka: " + decoded);

      res.header("auth-token", token).json( myToken);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = login;
