//const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

// Importing routes via Express Router
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
// Creating middlewares
//*Middleware functions intercept incoming requests and outgoing responses.
// Used to breakdown code into smaller chunks(functions) for easier management

//?   The order of middlewares & usage of next() is very important,
//?   as it directs the flow of the processing of the requests.
//#   The requests flow top-down like a funnel so we have to add new middlewares at the top (generally)

// Adding the body-parser middleware to parse incoming requests
app.use(bodyParser.urlencoded());

// Using the Express Router routes
// Filtering the paths
//* Only the paths starting with /admin will enter the adminRoutes
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// // Passing app to create the server as it is a valid handler.
// const server = http.createServer(app);
// server.listen(3000);

//# Express JS already creates the server so we don't have to.
//# So we simply write app.listen(<port-numbe>)
app.listen(3000);
