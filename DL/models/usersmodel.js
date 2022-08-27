const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    age: { type: Number },
    address: { type: String },
    password: { type: String, required: true, select: false },
    isActive:{type:Boolean,default:true}
})


const UsersModel = mongoose.model("users", userSchema)


module.exports = UsersModel