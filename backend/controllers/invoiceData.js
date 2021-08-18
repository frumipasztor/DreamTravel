const invoiceData = (req, res) => {
    console.log("kiscica")
    
    let costumer = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.county,
        postCode: req.body.postCode,
        city: req.body.city,
        address: req.body.address,
      };

      console.log(req.body)
}

module.exports = invoiceData;