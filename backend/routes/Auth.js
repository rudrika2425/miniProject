const express = require('express');
const router = express.Router();
const User=require('../models/UserSchema')
const Admin=require('../models/AdminSchema')
const jwt=require('jsonwebtoken');
const authToken=require('../middlewares/checkAuthToken')
const errorHandler=require('../middlewares/errorHandler')
router.get('/test',async(req,res)=>{
    res.json({
        message:"Auth api is working"
    })
})
function response(ok, message, data = null) {
    return {
        ok,
        message,
        data,
    };
}

router.post('/signup', async (req, res, next) => {
    try {
        const { name, email, password, designation } = req.body;

        if (!designation || !["tenant", "owner"].includes(designation.toLowerCase())) {
            return res.status(400).json(response(false, "Invalid designation. Please provide 'tenant' or 'owner'."));
        }

        if (designation.toLowerCase() === 'tenant') {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json(response(false, 'Email already exists in Tenant records'));
            }   
            const newUser = new User({ name, email, password, designation });
            await newUser.save();
            return res.status(201).json(response(true, 'User registered successfully as Tenant', { role: 'Tenant' }));
        } else if (designation.toLowerCase() === 'owner') {
            
            const existingAdmin = await Admin.findOne({ email });
            if (existingAdmin) {
                return res.status(409).json(response(false, 'Email already exists in Admin records'));
            }
            const newAdmin = new Admin({ name, email, password,designation });
            await newAdmin.save();
            return res.status(201).json(response(true, 'User registered successfully as Admin', { role: 'Admin' }));
        }
    } catch (err) {
        next(err);  
    }
});


router.post('/signin', async (req, res, next) => {
    try {
        const { email, password, designation } = req.body;

        if (!designation || !["tenant", "owner"].includes(designation.toLowerCase())) {
            return res.status(400).json(response(false, "Invalid designation. Please provide 'tenant' or 'admin'."));
        }

        let user = null;
 
        if (designation.toLowerCase() === 'tenant') {
            user = await User.findOne({ email });
            if (!user) { 
                return res.status(400).json(response(false, "Invalid credentials for Tenant"));
            }
        } else if (designation.toLowerCase() === 'owner') {
            user = await Admin.findOne({ email });
            if (!user) {
                return res.status(400).json(response(false, "Invalid credentials for Admin"));
            }
        }
 
        if (user.password !== password) {
            return res.status(400).json(response(false, "Invalid credentials"));
        }
 
        const authToken = jwt.sign(
            { userId: user._id, role: designation.toLowerCase() },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '50m' }
        );
        const refreshToken = jwt.sign(
            { userId: user._id, role: designation.toLowerCase() },
            process.env.JWT_REFRESH_SECRET_KEY,
            { expiresIn: '1d' }
        );

        res.cookie('authToken', authToken, { httpOnly: true, secure: true, sameSite: 'None' });
        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'None' });

        
        res.status(200).json(response(true, "Login successful", {
            authToken,
            refreshToken,
        }));
    } catch (err) {
        console.error(err);
        next(err);  
    }
});


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