const router = require("express").Router();
const invoiceData = require("../controllers/invoiceData");
const login = require("../controllers/login");
const travelDetails = require("../controllers/travelDetails");
const travelLimit = require("../controllers/travelLimit");
const contact = require("../controllers/contact");
const about = require("../controllers/about");
const blog = require("../controllers/blog");
const history = require("../controllers/history");
const sights = require("../controllers/sights");


router.post("/login", login);

router.post('/invoicedata', invoiceData);

router.get('/traveldetails', travelDetails);

router.get('/travellimit', travelLimit);

router.get('/contact', contact);

router.get('/about', about);

router.get('/blog', blog);

router.get('/history', history);

router.get('/sights', sights);



module.exports = router;
