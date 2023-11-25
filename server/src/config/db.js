const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "food",
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("database conntected successFully", error);
});

db.once("open", () => {
  console.log("database connected SuccessFully");
});

module.exports = db;
