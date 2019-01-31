const express = require("express");

const users = require("../users/userModel");

const server = express();

server.use(express.json());

module.exports = server;
