const sights  = async (req, res) => {
    const Sights = require("../models/sights.model");

    let sights = await Sights.findOne();
    res.json(sights)
}

module.exports = sights;