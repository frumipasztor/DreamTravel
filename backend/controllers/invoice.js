const invoice  = async (req, res) => {
    const Invoice = require("../models/invoice.model");

    let invoice = await Invoice.findOne();
   
}

module.exports = invoice;