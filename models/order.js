const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema({
  userId:{type:String, reqired:true, unique:true},
  prducts: [{
    productId:{type:String},
    quantity:{type:Number, default:1}
  }],
  amount:{type:Number, required:true},
  address:{type:Object, reqired:true},
  status:{type:String, default: "pending"}
      // createdAt:Date.now()
},
{timestamps:true}
);


module.exports = mongose.model("order", orderSchema)
