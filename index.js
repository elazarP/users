require('dotenv').config()
const express = require('express'),
    app = express(),
    PORT = process.env.PORT,
    cors = require('cors')

require('./db.js')
require('./DL/controls/usersControles')
require('./DL/controls/carsControlers')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use('/users',require("./rauter/usersRouter"))
app.use('/cars',require("./rauter/carsRouter"))


app.listen(PORT,()=>{console.log(`server is runing :${PORT}`)})

