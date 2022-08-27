const conroler = require("../DL/controls/carsControlers")

async function read(model) {
    if (!model) {
        return await conroler.read()
    }
    else {
        const list = (await conroler.find({model}))[0]
        if (!list){
            throw `the id '${id}' car is not definded`
        }
        else return list
    }
}

async function delete1(data){
    const car=( await conroler.find({name:data.name,model: data.model}))[0]
        if (car) {
            return await conroler.deleteOne(car._id)
        }
        else {
            throw ` no car with id '${data.model}'`
        }
    }

    async function regidister(body) {
        const car = (await conroler.find({ model: body.model }))[0]
        if (!car) {
            return await conroler.create(body)
        }
        else {
            throw "The car is already registered"
        }
    
    }

    async function Uppdata({model},data){
        const car = (await conroler.find({model}))[0]
        if(!car ) throw `car model '${model}' is not definded`
        else{
           return conroler.findByIdAndUppdata(car._id, data)
        }
    
    
        
    }



module.exports = { read ,delete1,regidister,Uppdata}
