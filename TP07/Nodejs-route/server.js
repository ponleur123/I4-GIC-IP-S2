const express = require('express');
const fs = require('fs');

const app = express()

app.get('/', function(req,res){
    fs.readFile('./home.html','utf-8',(err,data)=>{
        if(err){
            console.error(err)
            return
        }
        res.send(data);
    })
})

app.get('/detail', function(req,res){
    fs.readFile('./index.html','utf-8',(err,data)=>{
        if(err){
            console.error(err)
            return
        }
        res.send(data)
    })
})

app.listen(5500,()=>{
    console.log('Server is running on http://localhost:5500')
})