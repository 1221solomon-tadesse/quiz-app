const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose');
const bodyParser=require('body-parser')
const e = require('cors');
require ('dotenv').config();
const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true,limit:'20mb'
}))
app.use(bodyParser.json({limit:'20mb'}))
const port=3000
mongoose.Connection(process.env.DB_URL,{
    useUnifideTopology :true,
    useNewURLParser: true
}).then(()=>console.log("connection established"))
.catch(err=>console.log("error occured",err));
app.listen(port,()=>{
    console.log("server running")
})