const DL = require("../DL/user")
const conroler = require("../DL/controls/usersControles")


async function read(id) {
    if (!id) {
        return await conroler.read()
    }
    else {
        const list = await DL.getAll()
        const user = list.find(u => u.id == id)
        if (user) {
            return user
        }
        else {
            throw ` no user with id '${id}'`
        }
    }
}


async function login({ email, password }) {
    if (!email || !password) {
        throw `missing data`
    }
    else {
        const user = await conroler.find({email})
        const user1 = await conroler.findBiid(user[0]._id)
        if(!user) throw 'user is nit definded'


        if (!user1) throw `login faild (0)`
        if (user1.password != password)
            throw `login faild (1)`
        return user
    }
}



async function filter(f) {
    const list = await DL.getAll()
    return list.filter(item => {
        for (const key in f) {
            if (f[key] != item[key])
                return false
        }
        return true
    })
}

async function regidister(body) {
    const user = (await conroler.find({ email: body.email,id:body.id }))[0]
    if (!user) {
        return await conroler.create(body)
    }
    else {
        throw "The user is already registered"
    }

}


async function delete1(data){
const user=( await conroler.find({email:data.email,password: data.password}))[0]
    if (user) {
        return await conroler.deleteOne(user._id)
    }
    else {
        throw ` no user with id '${data.email}'`
    }
}


async function Uppdata(user,data){
    const user0 = await conroler.find({email:user.email})
    const user1 = await conroler.findBiid(user0[0]._id)
    if(!user0) throw 'user is nit definded'
    if (!user1) throw `login faild (0)`
    if (user1.password != user.password)
        throw `login faild (1)`
    else{
       return conroler.findByIdAndUppdata(user0[0]._id, data)
    }


}


module.exports = { login, regidister,read ,delete1,Uppdata}
