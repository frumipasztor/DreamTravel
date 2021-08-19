const about  = async (req, res) => {
    const About = require("../models/about.model");

    let about = await About.findOne();
    
    res.json(about)
}

module.exports = about;