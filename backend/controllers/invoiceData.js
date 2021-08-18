const invoiceData = async (req, res) => {
  const Customer = require("../models/customer.model");
  const Travel = require("../models/travel.model");

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

  console.log(avaliable);

  if (customer.seat <= avaliable) {
    Customer.insertMany(customer);
    let newCurrent = parseInt(travel.current) + parseInt(customer.seat);
    travel.current = newCurrent;
    travel.save();
  }
};

module.exports = invoiceData;
