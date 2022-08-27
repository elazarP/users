const express = require('express')
const app = express.Router()
const BL =  require('../BL/carsFu')



app.post('/regidister',async (req,res)=>{
    try {
        let user = await BL.regidister(req.body)
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/read',async(req,res)=>{
    try {
        let list = await BL.read(req.query.model) 
        res.send(list)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})

app.delete('/delete', async (req,res)=>{
    try {
        let use = await BL.delete1(req.body)
        res.send(use)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})

app.put('/create', async (req,res)=>{
    try {
        let use = await BL.Uppdata(req.query,req.body)
        res.send(use)
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})


module.exports=app