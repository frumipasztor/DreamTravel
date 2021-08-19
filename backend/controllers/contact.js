const contact  = async (req, res) => {
    const Contact = require("../models/contact.model");

    let contact = await Contact.findOne();
    res.json(contact)
}

module.exports = contact;