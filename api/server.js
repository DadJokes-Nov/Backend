const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");
const authJokesRouter = require("../jokes/auth-jokes-router.js");

const server = express();

server.use(helmet());
server.use(logger);
server.use(cors());
server.use(express.json());

server.use("/api/auth/jokes", authJokesRouter);
server.use("/api/auth", authRouter);
server.use("/api/jokes", jokesRouter);

server.get("/", (req, res) => {
  res.send("Server sanity check");
});

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

module.exports = server;
