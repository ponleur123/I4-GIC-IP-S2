const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(require('./routes') )

app.listen(3001,()=>{
    console.log('Server is running on http://localhost:3001')
})