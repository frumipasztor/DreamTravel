const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  from: { type: String },
  to: { type: String },
  duration_from: { type: String },
  duration_to: { type: String },
  summary: { type: String },
  price: {type: String },
  limit: { type: Number },
  current: { type: Number },
});

module.exports = mongoose.model("Travel", travelSchema, "travel");
