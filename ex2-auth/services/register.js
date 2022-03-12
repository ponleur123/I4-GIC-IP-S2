const {readUsers, writeUsers}= require('../db/db')

const register = (email,pwd,rpwd)=>{
    // console.log(email,pwd,rpwd)
   
    //Get all users
    const users = readUsers()
    return users

    //check if the user existed
    if(email != users.email){

        //Write the user into db
        writeUsers({email,pwd,rpwd})
        return "You register successfully!"
    }
    else{
        return "Email is already taken"
    }
    

     
}
module.exports ={
    register,

}