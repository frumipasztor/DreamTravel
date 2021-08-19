const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  tel: { type: String },
  open: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Contact", contactSchema, "contact");