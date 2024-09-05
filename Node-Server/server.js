const http = require("node:http");
const fs = require("node:fs");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");

const app = express();

app.use(bodyParser.json());
console.log("Re rendered");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "test.html")));
// app.get("/", (req, res) => res.send("Welcome to Node Server"));

app.get("/welcome", (req, res) => res.send("test" + req.url));

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Inside Post", data);
  fs.appendFile(
    "./person.json",
    `${JSON.stringify(data)}`,
    (err, responseData) => {
      res.json({ message: "Got it!" });
    }
  );
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const html = fs.readFileSync("./test.html", "utf-8");
//   res.end(html);
// });

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

// const server = http.createServer(app);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
