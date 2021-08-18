const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  id: { type: Number},
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  address: {
    country: { type: String },
    post_code: { type: String },
    city: { type: String },
    address: { type: String },
  },
});

module.exports = mongoose.model("Customer", customerSchema);
