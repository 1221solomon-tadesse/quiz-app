 const mongoos=require('mongoos')
 const userSchema=new mongoos.Schema({
    name:{
        type:String,
        require:true
    },
    emaile:{
        type:String,
        required:true
    },
    password:{
        required:true,
        type:String
    }
 })
module.exports=new mongoos.model('user',userSchema)