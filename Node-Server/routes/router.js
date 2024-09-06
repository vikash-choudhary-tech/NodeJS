const express = require("express");
const path = require("path");
const router = express.Router();
const { dbConnection, model } = require("../database/mongo");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../test.html"));
});

router.get("/handlebars", (req, res) => {
  res.render("home");
});

router.get("/mongodb", (req, res) => {
  dbConnection();
  model.find().then((response) => res.json(response));
  const newUser = new model({
    ages: 25,
  });
  newUser.save().then((response) => console.log("Data saved", response));
});

module.exports = router;
