const mongoose=require('mongoose');
// const bcrypt=require('bcrypt');


const propertySchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type: String,
        required: true,
    },
    college:{
        type: [],
        required: true,

    },
    propertyType:{
        type:String,
        required:true,
    },
    bhk1:{
        type:Number,
    },
    bhk2:{
        type:Number,
    },
    bhk3:{
        type:Number,
    },
    bhk4:{
        type:Number,
    },
    beds:{
        type:Number,
        required:true
    },
    facility:{
        type:[],
    },
    image:{
        type:[],
        required:true
    }

})
const Property=mongoose.model('Property',propertySchema);
module.exports=Property;
