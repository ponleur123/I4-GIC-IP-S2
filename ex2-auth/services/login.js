const {readUsers}=require('../db/db')

const login = (email,password)=>{
    console.log(email,password)

    //Get all users
    const users = readUsers()
    console.log(users.email)

    //Check if the user existed
    if(email == users.email){
        if(password == users.pwd){
            return users

            
        }
        else{
            return "Your password is incorrect!"
        }
    }
    else{
        return "Your email is incorrect!"
    }
    
    //Check if the password matched

    //Return the user's info
    // return 
    // return "The return from login"
}

module.exports = {
    login
}