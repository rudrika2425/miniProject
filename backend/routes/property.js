const express = require('express');
const router = express.Router();
const Property=require('../models/PropertySchema');

function response(ok,message,data){
    return {
        ok,message,data,
    }
}

router.post('/addproperty',async (req,res,next)=>{
    try{
        
    }
    catch(err){

    }
})