const travelDetails  = async (req, res) => {
    const Travel = require("../models/travel.model");

    let travel = await Travel.findOne();

    res.json(travel)
}

module.exports = travelDetails;