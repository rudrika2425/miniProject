const jwt=require('jsonwebtoken')

function checkAdminToken(req,res,next){
    const adminAuthToken=req.cookies.adminAuthToken;
    if(!adminAuthToken){
        return res.status(401).json({message:'Admin authentication failed:'})
    }
    jwt.verify(adminAuthToken,process.env.JWT_ADMIN_SECRET_KEY,(err,decode)=>{
        if(err){
            return res.status(401).json({message:'Admin authentication failed:Invalid'})
        }
        else{
            req.adminId=decode.adminId;
            next();
        }
    })
}
module.exports=checkAdminToken;

//pending