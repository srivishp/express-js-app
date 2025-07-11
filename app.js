const http = require("http");

const express = require("express");

const app = express();
// Creating middlewares
//*Middleware functions intercept incoming requests and outgoing responses.
// Used to breakdown code into smaller chunks(functions) for easier management
console.log("Outside the middleware!");
app.use((req, res, next) => {
  console.log("In the first middleware!");
  // next() is required for the execution to move forward into the next middleware
  next();
});
app.use((req, res, next) => {
  console.log("In the second middleware!");
  // Sending the response
  // res.send() is exclusive to ExpressJS
  //* res.send() = res.write() + res.end()
  res.send("<h1>Hello, from Express JS!</h1>");
});
// Passing app to create the server as it is a valid handler.
const server = http.createServer(app);

server.listen(3000);
