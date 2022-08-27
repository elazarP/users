const UserModel = require("../models/usersmodel")


async function create(data) {
    const newUser = await UserModel.create(data)
    return newUser
}


async function find(filter = {}) {
    const foundArr = await UserModel.find({...filter, isActive: true})
    console.log(foundArr)
    return foundArr
}

async function read(){
    let users=await UserModel.find({isActive:true})
    return users
}


// find({ email: "elazar@glc" })

async function findBiid(id) {
    const founduser = await UserModel.findById(id, "+password")
    console.log(founduser)
    return founduser
}

// findBiid("627cc780799e1e94e854ae76")



async function findByIdAndUppdata(id, neuData) {
    const UpdateUser = await UserModel.findByIdAndUpdate(id, neuData, { new: true })
    console.log(UpdateUser)
    return UpdateUser
}

// findByIdAndUppdata("627cc780799e1e94e854ae76", { name: 'moshe' })


async function deleteOne(id) {
    const UpdateUser = await UserModel.findByIdAndUpdate(id,{isActive:false}, { nwe: true })
    console.log(UpdateUser)
    return UpdateUser
}






const userData = {
    name: "elazar",
    email: "elazarp@com",
    address: "haoman 250",
    password: "12345",
    age: 18,
    id: "12345"
}

// create(userData)


module.exports={create,find,findBiid,findByIdAndUppdata,deleteOne,read}