const mongoose= require("mongoose")
const cartModel= new mongoose.Schema({
      userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",  // ye category user model ko export krte time jo naam dete h jismein database data store hoti h whi yaha reference dete h
            required:true
        },
        




        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",  // ye category product model ko export krte time jo naam dete h jismein database data store hoti h whi yaha reference dete h
            required:true
        },

        qty:{
            type:Number,
            default:0,  //1 save tha pahle
            required:true
        }
        

       

    
},
 {
            timestamps:true
        }

)


module.exports= mongoose.model("cart",cartModel);