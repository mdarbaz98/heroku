// require("./db/connection");
require("dotenv").config();
const express = require("express");
const app = express({path: '.env'});
const port = process.env.PORT || 4000;
const cors = require("cors");
const connectDB = require("./db/connection");

//route imports
const invoice = require("./routes/invoiceRoute.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cors());

//routes
app.use("/api/invoice", invoice);

const start = async () => {
  try {
    await connectDB(process.env.connectionString);
    app.listen(port, () => {
      console.log(`Server started on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
// mongo password: J0Q91BgLcFBkvFlw
//heruko username and password
// mohdarbaazshaikh