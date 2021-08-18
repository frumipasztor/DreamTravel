const router = require("express").Router();
const invoiceData = require("../controllers/invoiceData");
const login = require("../controllers/login");

router.post("/login", login);

router.post('/invoicedata', invoiceData);

module.exports = router;
