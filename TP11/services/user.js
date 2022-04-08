const Users = require("../models/users")

const findById = async (id) => {
  try {
    const user = await Users.findById(id);
    return user;
  } catch (err) {
    throw "User is not found"
  }
}

const findAll = async ()=>{
  // to do
  try{
    const user = await Users.findAll({})
    return{
      success:true,
      data:user
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}

const updatePass = async (params) => {
  // to do
  try{
    const {id,password}=params

    const updateP = await Users.updateOne({_id:id},{password:password})
    return{
      success:true,
      data:updateP
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}

const update = async (params) => {
  // to do
  try{
    const {id,email,username,firstname,lastname} = params
    const updateP = await Users.updateOne({_id:id},{email:email,username:username,firstName:firstname,lastName:lastname})
    return{
      success:true,
      date:updateP
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
  
}

const remove = async (id) => {
  // to do
  const _id=id
  const removeA = await Users.deleteOne(_id)
  return{
    success:true,
    data:removeA
  }
}

module.exports = {
  findById,
  updatePass,
  update,
  remove,
  findAll
}