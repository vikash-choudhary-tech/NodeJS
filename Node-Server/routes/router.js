const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../test.html"));
});

router.get("/handlebars", (req, res) => {
  res.render("home");
});

module.exports = router;
