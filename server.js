const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./DataModel")
const connectDB = require("./Database");
connectDB();

const app = express();

app.get("/readfromserver", (req, res) => {
  res.json({message: "Hey man from server"});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
})

/*

//we need cors middleware here because frontend and backend run on different ports.
const cors = require("cors");
app.use(cors());


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Middleware to parse POST body data. This is needed for "post" requests below
app.use(express.json({ extended: false }));

// Handle any requests that don't match the above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post("/writetodatabase", async (req, res) => {
  try {
    const {content} = req.body;
    const newData = new DataModel({ content });
    await newData.save();
    res.json({message: "Data saved successfully / Данные сохранены"})
  } catch (error) {
    console.log("Ошибка сервера при сохранении данных", error.message);
    res.status(500).send("Server error while saving data/Ошибка сервера при сохранении данных")
  }
})
*/