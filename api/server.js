const express = require("express");

const users = require("../users/userModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("good to go");
});

module.exports = server;
