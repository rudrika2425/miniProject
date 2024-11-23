const mongoose=require("mongoose");
const dbgr=require("debug")("development:mongoose");
const config=require("config");
mongoose.connect(`mongodb://127.0.0.1:27017/PropertyRentalSystem`)
.then(function(){
    dbgr("connected to database")
})
.catch(function(err){
    dbgr(err)
})