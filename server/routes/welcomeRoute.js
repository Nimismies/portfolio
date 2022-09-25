const express = require("express");
const welcomeRoute = express.Router();
const auth = require("../modules/auth");



welcomeRoute.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });


module.exports = welcomeRoute