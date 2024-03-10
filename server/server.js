const express = require("express");
const app = express();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const imageRoute = require("./routes/images.js");
const productsRoute = require("./routes/products.js");
const authRoute = require("./routes/auth.js");
require("dotenv").config();

const port = process.env.PORT || 4000;
app.use(express.json());

app.use(cors());

//Create API
app.get("/", (req, res) => {
  res.send("Express App is running");
});
app.use("/upload", imageRoute);
app.use("/products", productsRoute);
app.use("/auth", authRoute);
app.use("/images", express.static("upload/images"));
//Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDb was connected"));

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}`);
  } else {
    console.log(error);
  }
});
