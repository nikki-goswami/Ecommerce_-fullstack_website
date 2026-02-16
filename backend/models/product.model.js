const mongoose= require("mongoose")
const productModel= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxLength:150
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
        description:{
            type:String,


        },
        thumbnail:{
            type:String,// store file name and full url
            required:true
        },
        original_price:{
            type:Number,
            required:true
        },
        discount_percentage:{
            type:Number,
            default:0

        },
        final_price:{
            type:Number,
            required:true
        },
        status:{
            type:Boolean,
            default:true
        },
        stock:{
            type:Boolean,
            default:false
        },
        is_best_seller:{
            type:Boolean,
            default:false
        },
        show_home:{
            type:Boolean,
            default:false
        },
        is_featured:{
            type:Boolean,
            default:false
        },
        is_hot:{
            type:Boolean,
            default:false
        },
        other_images:[
            {
                type:String  // multiple filenames/urls
            }
        ],
        category_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"category",  // ye category category model ko export krte time jo naam dete h jismein database data store hoti h whi yaha reference dete h
            required:true
        },
        color_id:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"color",
            required:true
        }
    ],
   

        brand_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"brand",
            required:true
        }

       

    
},
 {
            timestamps:true
        }

)


module.exports= mongoose.model("product",productModel);