const mongoose = require("mongoose");

const MySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("DataModel", MySchema);