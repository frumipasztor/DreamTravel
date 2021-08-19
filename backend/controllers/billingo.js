const billingo = async (customer, travel) => {
  const createBillingoClient =
    require("@codingsans/billingo-client").createBillingoClient;

  const Invoice = require("../models/invoice.model");

  const client = createBillingoClient({
    apiKey: process.env.BILLINGO_API,
  });

  // console.log(travelFrom);

  let date = new Date(travel.duration_from);
  let dueDate = new Date(date.setDate(date.getDate() - 10));

  let productId = 7988743;

  let userObject = {
    partner_id: 1737572859,
    block_id: 0,
    type: "invoice",
    fulfillment_date: date.toISOString().slice(0, 10),
    due_date: dueDate.toISOString().slice(0, 10),
    payment_method: "aruhitel",
    language: "hu",
    currency: "HUF",
    paid: false,
    items: [
      {
        product_id: productId,
        quantity: customer.seat,
      },
    ],
  };

  let document = await client.documents.create({ ...userObject });
  await client.documents.send(document.id, { emails: [customer.email] });
  let invoice = await client.documents.get(document.id);

  await Invoice.insertMany(invoice);
};

module.exports = billingo;
