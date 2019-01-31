const express = require("express");

const users = require("../users/userModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json("good to go");
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  res.status(201).json({ hello: `${name}` });
});

module.exports = server;
