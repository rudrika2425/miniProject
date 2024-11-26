const express = require('express');
const router = express.Router();
const Property=require('../models/PropertySchema');

function response(ok,message,data){
    return {
        ok,message,data,
    }
}

router.post('/addproperty', async (req, res) => {
    try {
        const {
            email,
            name,
            address,
            college,
            propertyType,
            bhk1,
            bhk2,
            bhk3,
            bhk4,
            beds,
            facility,
            images,
        } = req.body;

        if (!email || !name || !address || !college || !propertyType) {
            return res.status(400).json(response(false, 'Missing required fields'));
        }

        if (propertyType === 'PG' && !beds) {
            return res.status(400).json(response(false, '`beds` is required for PG properties'));
        }

        const propertyData = {
            email,
            name,
            address,
            college,
            propertyType,
            facility: Array.isArray(facility) ? facility : [],
            images: Array.isArray(images) ? images : [],
        };

        if (propertyType === 'flats') {
            propertyData.bhk1 = bhk1;
            propertyData.bhk2 = bhk2;
            propertyData.bhk3 = bhk3;
            propertyData.bhk4 = bhk4;
        } else {
            propertyData.beds = beds;
        }

        const newProperty = new Property(propertyData);
        const saved = await newProperty.save();
        return res.status(201).json(response(true, 'Property added successfully', saved));
    } catch (err) {
        console.error(err);
        res.status(500).json(response(false, 'Unable to add property', err.message));
    }
});

 router.get('/getproperty',async (req,res)=>{
    try{
        const prpty=await Property.find();
        res.status(200).json(response(true,'properties retrieved',prpty))
    }
    catch(err){
        console.log(err);
    }
 })
module.exports=router;