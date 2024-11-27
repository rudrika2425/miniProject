const mongoose=require('mongoose');
// const bcrypt=require('bcrypt');

const adminSchema= new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        password:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        designation:{
            type:String,
            required:true,
        }
        
})

const Admin=mongoose.model('Admin',adminSchema);
module.exports=Admin;