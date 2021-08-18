const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sub: { type: String },
  given_name: { type: String },
  email: { type: String },
  name: { type: String },
  picture: { type: String },
});

module.exports = mongoose.model("User", userSchema);
