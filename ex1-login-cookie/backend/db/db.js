const mongoose = require("mongoose")

module.exports = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/exampledb",{
            autoIndex:true,
            serverSelectionTimeoutMS:30000
        })
        console.log("Database connected")
    }
    catch(err){
        console.log("Mongoose: ",err)
    }
}