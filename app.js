const http = require("http");

const express = require("express");

const app = express();
// Creating middlewares
console.log("Outside the middleware!");

app.use((req, res, next) => {
  console.log("In the first middleware!");
  // next() is required for the execution to move forward into the next middleware
  next();
});
app.use((req, res, next) => {
  console.log("In the second middleware!");
});
// Passing app to create the server as it is a valid handler.
const server = http.createServer(app);

server.listen(3000);
