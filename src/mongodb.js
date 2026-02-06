const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/vaishnavi")
.then(()=>{
    console.log("Mongo db connected")
})
.catch(()=>{
    console.log("failed")
})

const LoginSchema=new mongoose.Schema({
    name:String,
    password:String,
})

const collection=new mongoose.model("csm20",LoginSchema)
module.exports=collection


