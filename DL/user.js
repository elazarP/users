const fs=require("fs")


function getAll(){
    return require('./user.json')
}

function regidister(data,body){
   fs.writeFileSync('./DL/user.json',JSON.stringify(data))
   return body
}

module.exports={getAll ,  regidister}