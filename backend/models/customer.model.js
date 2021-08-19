const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  seat: { type: Number },
  address: {
    country: { type: String },
    post_code: { type: String },
    city: { type: String },
    address: { type: String },
  }  
});

module.exports = mongoose.model("Customer", customerSchema);
