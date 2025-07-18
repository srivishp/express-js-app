const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  console.log("In the second middleware!");
  // Sending the response
  // res.send() is exclusive to ExpressJS
  //* res.send() = res.write() + res.end()
  res.send("<h1>Hello, from Express JS!</h1>");
});
module.exports = router;
