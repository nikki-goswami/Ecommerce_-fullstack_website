const mongoose =require("mongoose");
 const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        // minLength: 3,
        // maxLength:10,
        required:true,
        unique:true
    },
    slug:{

        type:String,
        // minLength: 3,
        // maxLength:10,
        required:true,
        unique:true
    },
    image:{
        type: String,
        default:null
    },
    status:{
        type:Boolean,
        default: true
    },
    is_home:{
        type:Boolean,
        default:false
    },
    is_best:{
        type:Boolean,
        default:false

    },
    is_top:{
        type:Boolean,
        default:false

    }

 },
 {
        // category kab create hui kab updated hui uksa time save ho jayega using timestamps
        timestamps:true

 }

)




module.exports = mongoose.model("category",categorySchema)   // export kr rhe h  next jayenge router ke pass