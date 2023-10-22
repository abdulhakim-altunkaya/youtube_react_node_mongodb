require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.SERVER_MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("good man, you connected to mongodb");
  } catch (error) {
    console.log("error while connecting to mongodb dude: ", error.message);
  }
}

module.exports = connectDB;