const http = require("http");

const express = require("express");

const app = express();

// Passing app to create the server as it is a valid handler.
const server = http.createServer(app);

server.listen(3000);
