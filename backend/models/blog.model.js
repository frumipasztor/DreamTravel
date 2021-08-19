const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String },
  summary: { type: String },
  path: {type: String },
});

module.exports = mongoose.model("Blog", blogSchema, "blog");