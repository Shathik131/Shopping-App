const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
    Number: String,
  },
  { timestamps: true }
);

const contactDataModel = mongoose.model("contact_data", contactSchema);

module.exports = contactDataModel;
