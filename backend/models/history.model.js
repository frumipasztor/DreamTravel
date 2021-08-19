const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
title: { type: String },
img: { type: String },
firstp: { type: String },
secondp: { type: String },
thirdp: { type: String },
fourthp: { type: String }  
});

module.exports = mongoose.model("History", historySchema, "history");