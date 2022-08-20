const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
});

module.exports = mongoose.model("invoice", invoiceSchema);
