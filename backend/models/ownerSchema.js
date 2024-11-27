const mongoose=require('mongoose');

const ownerSchema=new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', 
        required: true
    },
    email:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', 
        required: true
    },
    phone_no:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
const Owner=mongoose.model('Owner',ownerSchema);
module.exports=Owner;