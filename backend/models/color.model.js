const mongoose =require("mongoose");
 const colorSchema =new mongoose.Schema({
    name:{
        type:String,
        // minLength: 3,
         maxLength:10,
        required:true,
        unique:true
    },
    slug:{

        type:String,
        // minLength: 3,
         maxLength:10,
        required:true,
        unique:true
    },
    code:{
        type: String,
        unique:true
    },
    status:{
        type:Boolean,
        default: true
    }   

 },
 {
        // category kab create hui kab updated hui uksa time save ho jayega using timestamps
        timestamps:true

 }

)




module.exports = mongoose.model("color",colorSchema)   // export kr rhe h  next jayenge router ke pass