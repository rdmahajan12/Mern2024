require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection done");
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

module.exports = connectDB;
