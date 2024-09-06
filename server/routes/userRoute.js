const router=require('express').Router()
const userModel=require('../models/user')

router.post('/add',async(req,res)=>{
    try{
   const data =req.body
   const newBook=new userModel(data)
   await newBook.save().then(()=>{
       res.status(200).json({message:"User addedsucccessfuly"})
   })
    }
    catch(error){
    console.log(error)
    }
   })
   ///getrequest
   router.get("/getUsers",async(req,res)=>{
   try{
   books=await userModel.find()
   res.status(200).json({user})
   }
   catch(error){
       console.log(error)
   }
   })