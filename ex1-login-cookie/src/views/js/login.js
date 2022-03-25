const Users = require('@/models/user')

// const email = document.getElementById('email').value
// const password = document.getElementById('password').value

const login= async(email,password)=>{
    try{
        const findEmail = await Users.find({
            email
        },{
                "_id":0,
                "email":1
            }
        )
        const findPwd = await Users.find({
            password
        },{
            "_id":0,
            "password":1
        })

        if(findEmail[0].email == email){
            if(findPwd[0].password==password){
                alert("You're logged in")
            }
            else{
                alert("Your password is wrong")
            }
        }
        else{
            alert("Your email is not found")
        }
        return {
            success:true,
            data:findEmail,findPwd
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