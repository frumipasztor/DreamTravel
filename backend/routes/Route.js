const router = require("express").Router();
const invoiceData = require("../controllers/invoiceData");
const login = require("../controllers/login");
const travelDetails = require("../controllers/travelDetails");
const travelLimit = require("../controllers/travelLimit");

router.post("/login", login);

router.post('/invoicedata', invoiceData);

router.get('/traveldetails', travelDetails);

router.get('/travellimit', travelLimit);

module.exports = router;
