const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const authRoute=require('./routes/Auth');
require("dotenv").config();




// app.use('/auth',authRoute)
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})