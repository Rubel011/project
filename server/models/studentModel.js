const mongoose=require("mongoose");
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    class:{type:String,required:true},
    marks:{type:Number,required:true},
})


const Student=mongoose.model("Student",studentSchema);

module.exports={Student}