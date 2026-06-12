const express=require("express");
const cors=require("cors");
require("dotenv").config();



const connectDB = require("./config/db");

const app=express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        success:true, 
        message:"Trifts API is running"
    });
    
});

const PORT=process.env.PORT || 8000;
connectDB();

const User = require("./models/User");

console.log(User.modelName);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
