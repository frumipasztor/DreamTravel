const history  = async (req, res) => {
    const History = require("../models/history.model");

    let history = await History.findOne();
    res.json(history)
}

module.exports = history;