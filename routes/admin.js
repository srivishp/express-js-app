const path = require("path");
const express = require("express");
const router = express.Router();

//* Adding a route in app.use()
router.get("/add-product", (req, res, next) => {
  console.log("In the first middleware");
  // __dirname sets the root directory to be the root of the project
  // path.join() builds a path that runs on both Windows and Linux file systems
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));

  // next() is required for the execution to move forward into the next middleware
  //next();
});

// router.use is executed for all requests
// router.get is executed only for GET requests
// router.post is executed only for POST requests
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
