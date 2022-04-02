const Users = require('../models/user')

const register = async (params)=>{
    // console.log(email,pwd,rpwd)
   
    //Get all users
    try{
        const {email,password,rpassword} = params

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