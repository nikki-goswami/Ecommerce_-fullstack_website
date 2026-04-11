
const { response } = require("express")
const productModel = require("../models/product.model")
const categoryModal= require("../models/categoryModel")
const brandModel= require("../models/brand.model");

const {sendAllfeildRequired,sendallReadyexites, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotfound, sendDeleted} =require("../utils/responseHelper");
const uniqueName = require('../imageUnique/uniqueid');
const fs= require("fs");
const { json } = require("stream/consumers");

// const create= async (req,res)=>{
//     try {
//         // console.log(req.body)
//         // res.send("hello")

//         const {name,slug}=req.body
//         if(!name || !slug){ 
//             res.status(500).send({
//                 message:"All feild are required",
//                 flag:0
//             })
//         }
//         const iscategoryExits= await categoryModal.findOne({name});
//        // console.log(iscategoryExits)
//        if(iscategoryExits){
//         res.status(500).send({
//             message:"Category allready created",
//             flag:0
//         })
//        }
//         const savedatabse =await categoryModal.create({name,slug})
//         res.status(201).send({
//             message:"Data is created",
//             flag:1
//         })

        
        
//     } catch (error) {
//        // console.log(error)
//         res.status(500).send(
//             {
//                 message:"Internal server error",
//                 flag:0
//             }
//         )
        
//     }
// }





const create = async (req, res) => {
  try {
    const { name, slug,description,original_price,discount_percentage,final_price,category_id,color_id,brand_id } = req.body;
    const thumbnail = req.files?.thumbnail;

    if (!name || !slug || !thumbnail || !description || !original_price || !discount_percentage || !final_price || !category_id || !color_id || !brand_id) {
      return sendAllfeildRequired(res);
    }

    const isproductExits = await productModel.findOne({ name });
    if (isproductExits) {
      return sendallReadyexites(res, "Category already exists");
    }

    // ✅ unique image name
    const image = uniqueName(thumbnail.name);

    // ✅ correct destination path
    const destination = "./public/images/product/main/" + image;

    thumbnail.mv(destination, async (error) => {
      if (error) {
        console.log(error);
        return sendServerError(res, "Unable to upload file");
      }

 const product= await productModel.create({
       ...req.body,color_id:JSON.parse(color_id), thumbnail:image
      });

      return sendCreated(res, "Image file created");
    });

  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
};

const getapi = async(req,res)=>{

    try {
      const query= req.query;
     console.log(query)
  const dynamicFilter= {};
  const limit= query.limit!=null ?query.limit : 0
  if(query.id){
    dynamicFilter._id= query.id
  }
  if(query.status){
    dynamicFilter.status=  query.status=="true"? true :false
  }
   if(query.stock){
    dynamicFilter.stock =  query.stock=="true"? true :false 
  }
   if(query.show_home){
    dynamicFilter.show_home =  query.show_home=="true"? true :false
  }
   if(query.is_best_seller){
    dynamicFilter.is_best_seller =  query.is_best_seller=="true"? true :false
  }
   if(query.is_featured){
    dynamicFilter.is_featured =  query.is_featured=="true"? true :false
  }
    if(query.is_hot){
    dynamicFilter.is_hot =  query.is_hot=="true"? true :false
  }
   if(query.is_top){
    dynamicFilter.is_top =  query.is_top=="true"? true :false
  }

  if(query.min_price && query.max_price){
    dynamicFilter.final_price= {
      $gte:Number(query.min_price),
      $lte:Number(query.max_price)
    };


  }
  //console.log(dynamicFilter)


  // for categoryslug
if(query.productSlug){
    const categoryDoc = await categoryModal.findOne({ slug: query.productSlug });
    //console.log(categoryDoc._id)
     dynamicFilter.category_id = categoryDoc._id;
   
}

// for color id


if(query.color_id){
  dynamicFilter.color_id = { $in: [query.color_id] };
}


//console.log(dynamicFilter)

 // for brand name  ke liye

 if(query.brand_slug){
    const brandDoc = await brandModel.findOne({ slug: query.brand_slug });
    //console.log(categoryDoc._id)
     dynamicFilter.brand_id = brandDoc._id;  
   
}

// for sort base on price low to high and high to low

const sortfilter = {}
if(query.sort){
  if(query.sort ==="price_assen" ){
    sortfilter.final_price = 1
  }
  if(query.sort ==="price_dessen"){
    sortfilter.final_price = -1
  }
}
else{
  sortfilter.createdAt = -1


}

















  //console.log(dynamicFilter)


        const productApi= await productModel.find(dynamicFilter).populate(
          [
            {
              path:"category_id",
              select:"name slug"
            },
            {
              path:"brand_id",
              select:"name slug"
            },
             {
              path:"color_id",
              select:"name code"
            }
          ]
        ).sort(sortfilter).limit(limit);
       // return sendSuccess(res,"Product find",productApi);  productapi ek object ja rha h
        return sendSuccess(res,"Product find",{productApi,
          // imagebaseUrl:"http://localhost:5000/images/product"
            imagebaseUrl:"https://ecommerce-fullstack-website.onrender.com/images/product"

        
        
        });
        
    } catch (error) {
        return sendServerError(res,"server error in productapi")
        
    }
}
const statusUpdate= async(req,res)=>{  //status update krne ke liye
    try {

        // step 2 is_home is_best value nikalnenke ke feild ka use liye sabka status ek sath kaise change
        const {field} = req.body;
        const userId= req.params.id;
        //console.log(userId)
        const fields=["status","is_home","is_hot","is_featured"]
        const usercategoryId= await productModel.findById(userId)
       // console.log([field],usercategoryId[field])
        if(!usercategoryId)
            return sendNotfound(res)
        // await categoryModal.findByIdAndUpdate(userId,{$set:{status:!usercategoryId.status}})
         // sabka staus ek sath change krne ke liye used huaa h
     await productModel.findByIdAndUpdate(userId,{[field]:!usercategoryId[field]})

     const messagestatusupdate= `${field} Status Udated successfully`
        return sendUpdated(res,messagestatusupdate)
        
    } catch (error) {
      console.log(error)
        return sendServerError(res)
        
        
     }
 
}




const productdelete = async (req, res) => {  // product delete krne ke liye based id
  try {
    const id = req.params.id;
    console.log(id);

    const deletcategoryId = await productModel.findById(id);
    console.log(deletcategoryId);

    if (!deletcategoryId) {
      return sendNotfound(res, "Not found Deletedid");
    }

    await productModel.findByIdAndDelete(id);

    // ✅ SAFE IMAGE DELETE
    if (
      deletcategoryId.thumbnail &&
      fs.existsSync(`./public/images/main/${deletcategoryId.thumbnail}`)
     ) {
      fs.unlinkSync(`./public/images/main/${deletcategoryId.thumbnail}`);
     }

    return sendDeleted(res, "product delete");
  } catch (error) {
    console.log(error,"catech");
    return sendServerError(res, "Delete server error");
  }
};

const getById = async(req,res)=>{

    try {
const id= req.params.id;
        const productId = await productModel.findById(id);
        if(!productId) return sendNotfound(res,"product id not found")
        return sendSuccess(res,"product  id find",{productId,imagebaseUrl:"http://localhost:5000/images/product"});
        
    } catch (error) {
        return sendServerError(res,"ProductId server error")
        
    }
}

// const updateById  = async(req,res)=>{

//     try {
//       const {name,slug} =req.body;
//       const id= req.params.id;
//       console.log(id)
//       const category_image=req.files !=null ? req.files.image : null
//         const categoryApi= await productModel.findById(id);
//         if(!categoryApi) return sendNotfound(res,"edit id not found");
//         const update={};
//         if(name) update.name=name;
//         if(slug) update.slug=slug;
//         console.log(update,"update")
//         if(category_image != null){
//           // / ✅ unique image name
//     const image = uniqueName(category_image.name);

//     // ✅ correct destination path
//     const destination = `./public/images/product/main/${image}`;

//     category_image.mv(destination, async (error) => {
//       if (error) {
//         //console.log(error);
//         return sendServerError(res, "Unable to upload file");
//       }
//         update.image=image

//         await productModel.updateOne(
//             {_id:id},
//             {
//               $set:update
//             }
//           )
//             fs.unlinkSync(`./public/images/product/main/${categoryApi.image}`)

//           return sendUpdated(res,"category edit update")

     

//     });



//         }
//         else{
//           await productModel.updateOne(
//             {_id:id},
//             {
//               $set:update
//             }
//           )
//           return sendUpdated(res,"category edit update")

//         }

        
//     } catch (error) {
//       console.log(error);
//         return sendServerError(res,"Edit server error")
        
//     }
// }
const updateById = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const id = req.params.id;

    // 🛑 id safety check
    if (!id) {
      return sendError(res, "Product id missing");
    }

    const product = await productModel.findById(id);
    if (!product) {
      return sendNotfound(res, "Edit id not found");
    }

    const update = {};

    if (name) update.name = name;
    if (slug) update.slug = slug;

    // ✅ IMAGE UPDATE (KEY MUST MATCH FRONTEND)
    if (req.files && req.files.image) {
      const file = req.files.image;
      const imageName = uniqueName(file.name);
      const destination = `./public/images/product/main/${imageName}`;

      await file.mv(destination);

      // 🔥 IMPORTANT: field name = thumbnail
      update.thumbnail = imageName;

      // ✅ delete old image safely
      if (product.thumbnail) {
        const oldPath = `./public/images/product/main/${product.thumbnail}`;
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
    }

    // 🛑 nothing to update
    if (Object.keys(update).length === 0) {
      return sendError(res, "Nothing to update");
    }

    await productModel.findByIdAndUpdate(id, { $set: update });

    return sendUpdated(res, "Product updated successfully");

  } catch (error) {
    console.log(error,"edit");
    return sendServerError(res, "Edit server error");
  }
};



const otherImagesadd = async(req,res)=>{  // multiple image add krne ke liye

    try {
      const id= req.params.id;
      const imagefile= req.files.image; // ye image payload se aaya h multipleimage.jsx se
        const productId = await productModel.findById(id);
        if(!productId) return sendNotfound(res,"product id not found");
const other_images_name= productId.other_images;

if(Array.isArray(imagefile)==true){
  // save multiple images ke liye logic
const all_promise=  imagefile.map(async(fileobject)=>{
      const image = uniqueName(fileobject.name);
      const destination = "./public/images/product/other/" + image;
    other_images_name.push(image)
    return await fileobject.mv(destination)



  })
  //console.log(all_promise)
  // in sab promise ko ek sath reslove krenge
  await Promise.all(all_promise);


}
else{
  const image = uniqueName(imagefile.name);
// save one image ke liye logic
    // ✅ correct destination path
    const destination = "./public/images/product/other/" + image;
    other_images_name.push(image)
    await imagefile.mv(destination)

}
// save one/and multiple   images also save

productId.other_images= other_images_name
await productId.save()
return sendCreated(res,"one nd multiple image created")


        
    } catch (error) {
      console.log(error)
        return sendServerError(res,"ProductId server error")
        
    }
}





module.exports={create,getapi,getById,otherImagesadd,statusUpdate,productdelete,updateById};
