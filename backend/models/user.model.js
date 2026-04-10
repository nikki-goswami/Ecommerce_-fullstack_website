const mongoose= require("mongoose")
const ShippingAddressSchema= new mongoose.Schema(
    {
        addressLine1:{type:String, required:true,trim:true},
        addressLine2:{type:String, required:true},
        city:{type:String,default:null},
        contact:{type:String,default:null},
        state:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true}

    },
    {_id:false} // Disabled _id for this schema
)

const userSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            trim:true,
            minLength:4
        },
        
            email:{
                type:String,
                required:true,
                unique:true,
                trim:true
            },
            password:{
                type:String,
                required:[true,"password is required"]
                
            },
            shipping_Address:{
                type:[ShippingAddressSchema],  // this supportive schema
                default:[]
            },
            isDefault:{
                type:Boolean,
                default:false
            },
            otp: String,
            otpExpire: Date

        
    },
    {
        timestamps:true
    }
)


const userModel= mongoose.model("User",userSchema)
module.exports= userModel;
