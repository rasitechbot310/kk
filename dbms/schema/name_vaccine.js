const mongoose = require("mongoose");


module.exports = mongoose.model("username", {
    nama: { type: String, require: true, default: "" },
});