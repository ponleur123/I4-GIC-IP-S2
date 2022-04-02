const mongoose = require('mongoose')

module.exports = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/exampledb',{
            autoIndex:true,
            serverSelectionTimeoutMS: 30000
        });
        console.log("MongoDB connected")
    }catch(err){
        console.log("Moogoose: ",err)
    }
}


// const readUsers = ()=>{
//     let rawdata = fs.readFileSync(path.join(process.cwd(),'db/user.json'),'utf8')
//     if(!rawdata)
//         return []

//     return JSON.parse(rawdata)
// }

// const writeUsers = async(data)=>{
//     fs.writeFileSync(path.join(process.cwd(),'db/user.json'),JSON.stringify(data),'utf8')
// }

// module.exports={
//     readUsers,
//     writeUsers
// }