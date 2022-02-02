const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
  title:{type:String, reqired:true},
  description: {type:String, required:true},
  image:{type:String, required:true},
  category:{type:Array},
  price:{type:Number, required:true},
      // createdAt:Date.now()
},{timestamps:true})


module.exports = mongose.model("Product", productSchema)
