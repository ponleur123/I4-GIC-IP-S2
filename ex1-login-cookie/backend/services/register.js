const Users = require("../models/user")
const crypto = require("crypto")


const register = async(params) =>{

        try{
            const {email,password1,rpassword1} = params

            var myKey = crypto.createChiper('ase-128-cbc','password1')
            var password = myKey.update('abc','utf8','hex')
            password += myKey.final('hex')

            rpassword = password

            const newUser ={
                email,
                password,
                rpassword
            }
            const created = await Users.create(newUser)
            return{
                succes:true,
                data:created
            }
        }

        catch(err){
            return{
                success:false,
                error:err || "error"
            }
        }
}
module.exports ={
    register
}