const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  pharagraph1: { type: String },
  pharagraph2: { type: String },  
});

module.exports = mongoose.model("About", aboutSchema, "about");