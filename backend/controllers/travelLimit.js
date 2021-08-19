const travelLimit = async (req, res) => {
  const Travel = require("../models/travel.model");

  let travel = await Travel.findOne();

  let limit = travel.limit;
  let current = travel.current;

  let avaliable = travel.limit - travel.current;

  res.json({ avaliable: avaliable });
};

module.exports = travelLimit;
