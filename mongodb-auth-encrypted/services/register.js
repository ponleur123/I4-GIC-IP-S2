const Users = require('../models/user')
const crypto = require('crypto')

const register = async (params)=>{
    // console.log(email,pwd,rpwd)
  
    
    try{
        const {email,password1,rpassword1} = params

        
        var mykey = crypto.createCipher('aes-128-cbc', 'password1');
        var password = mykey.update('abc', 'utf8', 'hex')
        password += mykey.final('hex');
        
        console.log(password);
        rpassword = password
        
        const newUser={
            email,
            password,
            rpassword
        }

       const created = await Users.create(newUser)
        return{
                success:true,
                data: created,
            }

    }
    
    catch(err){
        return{
            success:false,
            error:err || 'error'
        }
    }
     
}
module.exports ={
    register,

}