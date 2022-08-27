const CarsModel = require("../models/carsModel")
const uniqid = require('uniqid')


async function create(data) {
    data.id = uniqid(data.name,data.model)
    const newCar = await CarsModel.create(data)
    return newCar
}


async function find(filter = {}) {
    const foundArr = await CarsModel.find({ ...filter, isActive: true })
    console.log(foundArr)
    return foundArr
}

async function read() {
    let users = await CarsModel.find({isActive:true})
    return users
}


// find({ email: "elazar@glc" })

async function findBiid(id) {
    const founduser = await CarsModel.findById(id)
    console.log(founduser)
    return founduser
}

// findBiid("627cc780799e1e94e854ae76")



async function findByIdAndUppdata(id, neuData) {
    const UpdateUser = await CarsModel.findByIdAndUpdate(id, neuData, { new: true })
    console.log(UpdateUser)
    return UpdateUser
}

// findByIdAndUppdata("627cc780799e1e94e854ae76", { name: 'moshe' })


async function deleteOne(id) {
    const UpdateUser = await CarsModel.findByIdAndUpdate(id, { isActive: false }, { nwe: true })
    console.log(UpdateUser)
    return UpdateUser
}






const carData = {
    name: "mazda",
    model: "cx5",
    color: "blue",
    Engine: 1800
}

// create(carData)


module.exports = { create, find, findBiid, findByIdAndUppdata, deleteOne, read }