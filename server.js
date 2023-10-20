const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/connectserver", async (req, res) => {
  res.json({message: "Hello from the server"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})