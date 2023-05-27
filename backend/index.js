const express=require("express");
require('dotenv').config();
const connection= require("./db")
const app=express();
const cors=require("cors");
const {userRouter}=require("./route/user.route")
const {authenticate}=require("./middleware/authentication.middleware")

const { carRouter}=require("./route/car.route")

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/user",userRouter)

app.use("/cars",carRouter)

app.use(authenticate)




app.listen(process.env.port,async()=>{
    try {
        
        await connection
        console.log("Connected ");
    } catch (error) {
        console.log(error.message);
    }
   console.log(`sever running at port ${process.env.port}`)
})