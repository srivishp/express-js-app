const express = require("express");
const router = express.Router();

//* Adding a route in app.use()
router.get("/add-product", (req, res, next) => {
  console.log("In the first middleware");
  res.send(
    "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );

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
