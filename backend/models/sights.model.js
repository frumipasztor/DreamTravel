const mongoose = require("mongoose");

const sightsSchema = new mongoose.Schema({
title: { type: String },
img: { type: String },
firstptitle: { type: String },
firstp: { type: String },
secondptitle: { type: String },
secondp: { type: String },
thirdptitle: { type: String },
thirdp: { type: String },
fourthptitle: { type: String },
fourthp: { type: String }  
});

module.exports = mongoose.model("Sights", sightsSchema, "sights");