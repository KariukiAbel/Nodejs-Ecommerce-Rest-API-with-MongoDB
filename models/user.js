const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  username:{type:String, reqired:true},
  email: {type:String, required:true, unique:true},
  password:{type:String, required:true},
  isAdmin:{type:Boolean, default:false},
  // createdAt:Date.now()
},{timestamps:true})


module.exports = mongose.model("User", userSchema)
