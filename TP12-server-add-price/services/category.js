const Categories = require("../models/categories")

const findById = async (id) => {
  // to do
  try{
    const cate = await Categories.findById(id)
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

const findAll = async () => {
  // to do
  try{
    const find = await Categories.find({})
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
    const {name,desc,imageUrl}=params

    const newCategory = {
      name,
      desc,
      imageUrl
    }

    const createCategory = await Categories.create(newCategory)
    return{
      success:true,
      data:createCategory
    }
  }
  catch(err){
    console.log(err)
    return{
      success:false,
      error: JSON.stringify(err) || "error"
    }
  }

}

const update = async (params) => {
  // to do
  try{
    const {id,name,desc,imageUrl}=params
  

    console.log(params);

    const update = await Categories.updateOne({_id: id}, {name:name, desc:desc, imageUrl:imageUrl})
    console.log(id);
    // const update = await Categories.findByIdAndUpdate(id, {name:name1, desc:desc1, imageUrl:imageUrl1})
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
  // to doF
  try{
    const _id = id
    const cate = await Categories.deleteOne(_id)
    return{
      success:true,
      data: cate
    }
  }
  catch(err){
    return{
      success:false,
      error:err
    }
  }
}
const findCategoriezedItem = async()=>{
  return await Categories.aggregate([
    {
      $lookup:{
        from:"item",
        localField:"_id",
        foreignField:"category",
        as:"items"
      }
    },
    {
      $project:{
        _id:1,
        name:1,
        desc:1,
        imageUrl:1,
        items:{
          _id:1,
          name:1,
          category:1,
          desc:1
        }
      }
    }
  ])
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
  findCategoriezedItem
}