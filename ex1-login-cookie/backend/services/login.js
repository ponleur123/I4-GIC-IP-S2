const Users = require("../models/user")

const login = async(email,password)=>{
    try{
        const findEmail = await Users.find({
            email,
        },{
            "_id":0,
            "email":1
        })
        const findPwd = await Users.find({
            password
        },{
            "_id":0,
            "password":1
        })

        if(findEmail[0].email == email){
            if(findPwd[0].password == password){
                return{
                    success:true,
                    data:findEmail
                }
            }
            else{
                return{
                    success:false,
                    msg:"Your password is wrong"
                }
            }
        }
        else{
            return{
                success:false,
                msg:"Your email not found"
            }
        }
    }
    catch(err){
        return{
            success:false,
            error:err || "error"
        }
    }
}

module.exports = {
    login
}