const path = require("path");
const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  // __dirname sets the root directory to be the root of the project
  // path.join() builds a path that runs on both Windows and Linux file systems
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));

  // Sending the response
  // res.send() is exclusive to ExpressJS
  //* res.send() = res.write() + res.end()
  //res.send("<h1>Hello, from Express JS!</h1>");
});
module.exports = router;
