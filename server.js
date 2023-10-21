const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const MyModel = require("./DataModel");
const connectDB = require("./Database");
connectDB();

const app = express();

// Middleware to parse POST body data. This is needed for "post" requests below
app.use(express.json({ extended: false }));

app.get("/connectserver", async (req, res) => {
  res.json({message: "Hello from the server"});
});

app.post("/connectdatabase", async (req, res) => {
  try {
    const {myContent} = req.body;
    const newData = new MyModel({myContent});
    await newData.save();
    res.json({message: "Data saved successfully / Данные сохранены"})
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error while saving data/Ошибка сервера при сохранении данных");
  }
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})