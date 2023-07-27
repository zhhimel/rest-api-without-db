const express=require("express");
const cors=require("cors");
const bodyParser= require("body-parser");
const app =express();
const users=require("./models/users.model");
const usersRouter=require("./routes/user.route")
app.use("/users",usersRouter); 
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/users",usersRouter);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.use((req,res,next)=>{
    res.status(404).json({
        "message":"resource not found"
    })
})
app.use((err,req,res,next)=>{
    res.status(500).json({
        "message":"Server Broke"
    })
})
module.exports=app;
