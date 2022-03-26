const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String
    },
    rpassword:{
        type:String
    }
},{
    timestamps:true,
});

var Users = mongoose.model('Users',userSchema)

module.exports = Users