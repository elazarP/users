const mongoose = require("mongoose")


const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    color: { type: String },
    Engine: { type: Number },
    isActive: { type: Boolean, default: true }
})


const CarsModel = mongoose.model("cars", carSchema)

module.exports = CarsModel