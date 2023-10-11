const {  mongoose } = require('mongoose');
const bcrypt=require('bcryptjs')
const usersModel=mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
pic:{type:String,default:"https://picsum.photos/200/300"},

},{
  timestamps:true,
})
usersModel.methods.matchPassword=async function(enterPasword){
  return await bcrypt.compare(enterPasword, this.password)
}
usersModel.pre('save',async function(next){
if(!this.isModified){
  next()
}
const salt =await bcrypt.genSalt(10)
this.password=await bcrypt.hash(this.password, salt)
})
const User=mongoose.model('User',usersModel)

module.exports=User