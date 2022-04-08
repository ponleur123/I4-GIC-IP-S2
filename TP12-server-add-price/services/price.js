const Price = require('../models/price')

const findById = async(id) =>{
    const price = await Price.findById(id)
    return{
        success:true,
        data:price
    }
}

const findAll = async () =>{
    const price = await Price.find({})
    return{
        success:true,
        data:price
    }
}

const create = async(newPrice) =>{
    const createdPrice = await Price.create(newPrice)
    return createdPrice
}

const update = async ( params) =>{
    const {id,product,price,source} = params

    const update = await Price.updateOne({_id:id},{product:product,price:price,source:source})
    return{
        success:true,
        data:update
    }
}

const remove = async (id) =>{
    const _id=id
    const removeById = await Price.deleteOne(_id)
    return{
        success:removeById
    }

}

module.exports = {
    findAll,
    create,
    update,
    remove,
    findById
}