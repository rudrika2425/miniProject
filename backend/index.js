const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors=require("cors");
const cookieParser = require("cookie-parser");
const authRoute=require('./routes/Auth');
const adminRoute=require('./routes/Admin');
const allowedOrigins = ['http://localhost:3000','http://localhost:5174','http://localhost:5173']

require("dotenv").config();
require("./db");
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
    origin:function(origin,callback){
        if(!origin || allowedOrigins.includes(origin)){
            callback(null,true);
        }
        else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
}))


app.use('/auth',authRoute)
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})