const mongoose=require('mongoose');
// const bcrypt=require('bcrypt');


const propertySchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
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
    propertyType: { 
        type: String,
         enum: ['flats', 'PG'],
          required: true
     },
    beds: {
        type: Number,
        required: function () { return this.propertyType === 'PG'; }
     },
    bhk1: {
         type: Number,
          default: 0 
    },
    bhk2: {
         type: Number,
         default: 0 
        },
    bhk3: {
         type: Number,
          default: 0 
    },
    bhk4: { 
        type: Number,
         default: 0 
    },
    facility: {
        type: [String],
        default: [] },
    images: { 
        type: [String],
       default: [] },
})
const Property=mongoose.model('Property',propertySchema);
module.exports=Property;
