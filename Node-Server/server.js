const http = require("node:http");
const fs = require("node:fs");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");
const router = require("./routes/router");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
