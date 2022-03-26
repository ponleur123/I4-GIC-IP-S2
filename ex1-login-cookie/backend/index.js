const express = require('express')
const app = express()
const bodyParse = require('body-parser')

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))

app.use(require('./router'))

app.listen(3001,()=>{
    console.log("Server is running on http://localhost:3001")
})