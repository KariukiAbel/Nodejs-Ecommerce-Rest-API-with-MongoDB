const mongoose = require("mongoose")


const cartSchema = new mongoose.Schema({
  userId:{type:String, reqired:true, unique:true},
  pruducts: [{
    productId:{type:String},
    quantity:{type:Number, default:1}
  }]
      // createdAt:Date.now()
},{timestamps:true})


module.exports = mongose.model("cart", cartSchema)
