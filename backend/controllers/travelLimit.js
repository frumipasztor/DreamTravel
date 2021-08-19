const travelLimit = async (req, res) => {
  const Travel = require("../models/travel.model");

  let travel = await Travel.findOne();

  let limit = travel.limit;
  let current = travel.current;

  let avaliable = travel.limit - travel.current;

  if(avaliable > 0) {
    return res.json({ avaliable: avaliable })
  } else {
    return res.status(400).json("Sorry not enough avaliable space")
  }

};

module.exports = travelLimit;
