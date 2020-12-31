
const express = require ('express');
const app = express ()

const dotenv = require ('dotenv').config()
let port = process.env.PORT


app.listen(port,(req,res) =>{
    console.log(`Server listening at http://localhost:${port}`)
})