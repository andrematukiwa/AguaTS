const mongoose = require("mongoose");
const AguaModelSchema = new mongoose.Schema({
    Marca: String,
    ml: Number,
    validade: String,
});

module.exports = mongoose.model("Agua", AguaModelSchema);