const invoiceData = async (req, res) => {
  const Customer = require("../models/customer.model");
  const Travel = require("../models/travel.model");
  const billingo = require("./billingo.js");

  let travel = await Travel.findOne();

  let limit = travel.limit;
  let current = travel.current;

  let avaliable = limit - current;

  let customer = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    seat: req.body.seat,
    address: {
      country: req.body.country,
      post_code: req.body.postCode,
      city: req.body.city,
      address: req.body.address,
    },
  };
 // console.log(avaliable);

  if (customer.seat <= avaliable) {
    await Customer.insertMany(customer);
    let newCurrent = parseInt(travel.current) + parseInt(customer.seat);
    travel.current = newCurrent;
    await billingo(customer, travel);
    await travel.save();
  } else {
    res.status(400).json("Sorry not enough avaliable space")
  }
};

module.exports = invoiceData;
