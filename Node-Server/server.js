const http = require("node:http");
const fs = require("node:fs");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");
const router = require("./routes/router");

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
