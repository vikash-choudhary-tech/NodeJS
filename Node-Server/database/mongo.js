const mongoose = require("mongoose");

const dbConnection = () =>
  mongoose
    .connect("mongodb://localhost:27017/demo")
    .then(() => console.log("Connected With DB"))
    .catch(() => console.log("Error connecting with db"));

const schema = new mongoose.Schema({
  ages: Number,
});

const model = new mongoose.model("ages", schema);

module.exports = { dbConnection, model };
