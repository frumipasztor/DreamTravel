const invoiceData = (req, res) => {
  const Customer = require("../models/customer.model");

  let customer = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address:{
    country: req.body.country,
    post_code: req.body.postCode,
    city: req.body.city,
    address: req.body.address,
  }
  }; 

  console.log(customer)

 Customer.insertMany(customer);

}

module.exports = invoiceData;