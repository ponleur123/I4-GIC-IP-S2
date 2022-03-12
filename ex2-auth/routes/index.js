const express = require('express')
var router = express.Router();
const {login}= require('../services/login')
const {register}=require('../services/register')
const {readUsers,writeUsers}=require('../db/db')

router.post('/login', (req,res)=>{
    const {email,password}=req.body;

    const result = login(email,password)
    res.json(result)
    // console.log(result.email)
})

router.post('/register', (req,res)=>{
    const {email,password,rpassword}=req.body
    const result = register(email,password,rpassword)
    res.json(result)
})
router.get('/user',(req,res)=>{
    const data=readUsers()

    console.log(data.email,data.pwd)
})

module.exports = router