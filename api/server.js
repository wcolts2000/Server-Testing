const express = require("express");
const db = require("../data/dbConfig");

const users = require("../users/userModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json("good to go");
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  users
    .insert(name)
    .then(res.status(201).json({ hello: `${name}` }))
    .catch(err => res.status(500));
});

server.get("/users", (req, res) => {
  return db("users").then(users => res.status(200).json(users));
});

module.exports = server;
