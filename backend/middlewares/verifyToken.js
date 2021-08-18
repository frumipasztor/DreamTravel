const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  console.log(req.header);
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    // console.log(req);
    const verified = jwt.verify(token, "Signed in");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};
