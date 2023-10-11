const asyncHandler = require('express-async-handler')
const Chats=require("../models/chatModel");
const User = require('../models/userModel');
const accessChat=asyncHandler(async(req,res)=>{ 
  const {userId}=  req.body;
  if(!userId){
   console.log('user id not send');
   return res.sendStatus(400); 
  }
  let isChat=await Chats.find({
    isGroupChat:false,
    $and:[
        {users:{$elemMatch:{$eq:req.user._id}}},
        {users:{$elemMatch:{$eq:userId}}}
    ]
  }).populate("users","-password").populate('leatestMessage');
  isChat=await User.populate(isChat,{
    path:"leatestMessage.sender",
    select:"name pic email"
  });
  if(isChat.length > 0){
    res.send(isChat[0])
  }else{
    let chatData={
      chatName:"sender",
      isGroupChat:false,
      users:[req.user._id,userId]
    }
    try {
      const createdChat=await Chats.create(chatData);
      const fullChat=await Chats.findOne({_id:createdChat._id}).populate("users",
      "-password")
      res.status(200).send(fullChat)
      
    } catch (error) {
      res.status(400);
      throw new Error(error.message)
    }
  }
})

module.exports={accessChat}