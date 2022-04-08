const Items = require("../models/items")

const findById = async (id) => {
  try {
    const item = await Items.findById(id)
    return {
      success: true,
      data: item
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async ()=>{
  // to do
  try{
    const find = await Items.find()
    return{
      success:true,
      data:find
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}

const create = async (params) => {
  // to do
  try{
    const {name, desc, category} = params
    
    const newItem = {
      name,desc,category
    }

    const createItem = await Items.create(newItem)
    return{
      success:true,
      data:createItem
    }
  }
  catch(err){
    return{
      success:false,
      error:err||"error"
    }
  }
}

const update = async (params) => {
  // to do
  try{
    const {id,name,desc,category}=params
    // const newValue = {$set:{name:name1, desc:desc1, category:category1}}

    const update = await Categories.updateOne({_id:id},{name:name,desc:desc,category:category})
    return{
      success:true,
      data:update
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
  try{
    const cate = await Items.deleteOne(id)
    return{
      success:true,
      data:cate
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}