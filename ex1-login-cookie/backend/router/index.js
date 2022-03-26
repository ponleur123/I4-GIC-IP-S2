const express = require('express')
const router = express.Router()
const {login} = require('../services/login')
const {register} = require('../services/register')
require('../db/db')()

router.post("/login",async(req,res,next)=>{
    const {email,password} = req.body;
    
    const result = await login(email,password)
    res.json(result)
})

router.post('/register',async (req,res,next)=>{
    const result = await register(req.body)

    res.json(result)
})
module.exports=router