const Users = require('../models/user')

const login =async (email,password)=>{
    try{
       const findEmail= await Users.find({
           email
       },{
           "_id":0,
           
           "email":1,
           
       })
       const findPwd = await Users.find({
           password
       },{
           "_id":0,
           "password":1
       })
  
         console.log(findPwd[0])
        // console.log(findEmail[0])
        if(findEmail[0].email == email){
            // console.log("1")
            if(findPwd[0].password == password){
                console.log("You're logged in")
            }
            else {
                console.log("Your password is wrong")
            }
        }
        else{
            console.log("Your email is wrong")
        }
        return{
            success:true,
            data:findEmail
        }
    }
    catch(err){
        return {
            success:false,
            error:err || "error"
        }
    }
}

module.exports = {
    login
}