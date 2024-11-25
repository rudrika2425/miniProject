const express = require('express');
const router = express.Router();
const User=require('../models/UserSchema')
const jwt=require('jsonwebtoken');
const authToken=require('../middlewares/checkAuthToken')
const errorHandler=require('../middlewares/errorHandler')
router.get('/test',async(req,res)=>{
    res.json({
        message:"Auth api is working"
    })
})

function response(ok,message,data){
    return {
    ok,
    message,
    data,
}
}
router.post('/signup',async (req,res,next)=>{
try{
    const {name,email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        return res.status(409).json(response(false,'Email already exists'));
    }
    const newUser=new User({
        name,
        email,
        password
    });
    await newUser.save();
    res.status(201).json(response(true,'User Registered Successfully'))
}
catch(err){
    next();
}
})

router.post('/signin',async(req,res,next)=>{
    try{
    const {email,password}=req.body;
    const exist=await User.findOne({email:email});
    if(!exist){
        return res.status(400).json(response("false","Invalid credentials"));
    }

    if(exist.password!== password){
        return res.status(400).json(response(false,"Invalid credentials"));
    }
    const authToken = jwt.sign(
        { userId: exist._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '50m' }
    );
    const refreshToken = jwt.sign(
        { userId: exist._id },
        process.env.JWT_REFRESH_SECRET_KEY,
        { expiresIn: '50m' }
    );
    res.cookie('authToken', authToken, { httpOnly: true, secure: true, sameSite: 'None' });
    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None' });

    res.status(200).json(response(true, "Login successful", {
        authToken,
        refreshToken,
    }));
}
catch(err){
    console.log(err);
}
})

router.get('/logout',async(req,res)=>{
    res.clearCookie('authToken');
    res.clearCookie('refreshToken');
    res.json({
        ok:true,
        message:'User logged out successfully'
    })
})

router.get('/getuser',authToken,async(req,res,next)=>{
    try{
const exist=await User.findOne({_id:req.userId});
if(!exist){
    return res.status(400).json(response(false,'Invalid credentials'))
}
    else{
        return res.status(200).json(response(true,'User found',exist.name))
    }
}catch(err){
    return res.status(500).json({ ok: false, message: 'Internal server error' });
}
})
router.use(errorHandler);

module.exports=router