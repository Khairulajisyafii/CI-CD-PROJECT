const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("vercel teset succeed");
});

module.exports = app;
