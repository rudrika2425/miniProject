function errorHandler(StatusCode,err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    console.log("Error mIddle ware encountered");
    res.status(StatusCode || 500).json({
        ok: false,  
        message: err.message,
    });
}
module.exports=errorHandler;