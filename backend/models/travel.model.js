const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
  from: { type: String },
  to: { type: String },
  duration: {
    from: { type: String },
    to: { type: String },
  },
  summary: { type: String },
  limit: { type: Number },
  current: { type: Number },
});

module.exports = mongoose.model("Travel", travelSchema, "travel");
