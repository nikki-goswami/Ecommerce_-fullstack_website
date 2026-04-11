
const { response } = require("express")
const categoryModal = require("../models/categoryModel");
const productModel= require("../models/product.model")
const {sendAllfeildRequired,sendallReadyexites, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotfound, sendDeleted} =require("../utils/responseHelper");
const uniqueName = require('../imageUnique/uniqueid');
const fs= require("fs");

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
    const { name, slug } = req.body;
    const category_images = req.files?.image;

    if (!name || !slug || !category_images) {
      return sendAllfeildRequired(res);
    }

    const iscategoryExits = await categoryModal.findOne({ name });
    if (iscategoryExits) {
      return sendallReadyexites(res, "Category already exists");
    }

    // ✅ unique image name
    const image = uniqueName(category_images.name);

    // ✅ correct destination path
    const destination = `./public/images/categryimages/${image}`;

    category_images.mv(destination, async (error) => {
      if (error) {
        console.log(error);
        return sendServerError(res, "Unable to upload file");
      }

      await categoryModal.create({
        name,
        slug,
        image
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
  const dynamicFilter= {};
  const limit= query.limit!=null ?query.limit :0
  if(query.id){
    dynamicFilter._id= query.id
  }
  if(query.status){
    dynamicFilter.status=  query.status=="true"? true :false
  }
   if(query.home){
    dynamicFilter.is_home =  query.home=="true"? true :false
  }
   if(query.is_best){
    dynamicFilter.is_best =  query.is_best=="true"? true :false
  }
   if(query.is_top){
    dynamicFilter.is_top =  query.is_top=="true"? true :false
  }
  //console.log(dynamicFilter)


//const categoryApi= await categoryModal.find();
const categoryApi = await categoryModal.find(dynamicFilter).limit(limit);
 const data = await Promise.all(
  categoryApi.map(async(cat)=>{
 // console.log(cat)
 const productCount = await productModel.countDocuments({category_id:cat._id})
 return{
  ...cat._doc,
  count:productCount
 }
})
)
//console.log(data)


return sendSuccess(res,"Category find",{categoryApi:data,
  // imagebaseUrl:"http://localhost:5000/images/categryimages"
imagebaseUrl:"https://ecommerce-fullstack-website.onrender.com/images/categryimages"


}
);
        
    } catch (error) {
        return sendServerError(res)
        
    }
}


const statusUpdate= async(req,res)=>{
    try {

        // step 2 is_home is_best value nikalnenke ke feild ka use liye sabka status ek sath kaise change
        const {field} = req.body;
        const userId= req.params.id;
        //console.log(userId)
        const fields=["status","is_home","is_best","is_top"]
        const usercategoryId= await categoryModal.findById(userId)
       // console.log([field],usercategoryId[field])
        if(!usercategoryId)
            return sendNotfound(res)
        // await categoryModal.findByIdAndUpdate(userId,{$set:{status:!usercategoryId.status}})
         // sabka staus ek sath change krne ke liye used huaa h
     await categoryModal.findByIdAndUpdate(userId,{[field]:!usercategoryId[field]})

     const messagestatusupdate= `${field} Status Udated successfully`
        return sendUpdated(res,messagestatusupdate)
        
    } catch (error) {
      console.log(error)
        return sendServerError(res)
        
        
     }
    // try {

    //     // step 2 is_home is_best value nikalnenke ke feild ka use liye sabka status ek sath kaise change
    //     const {field} = req.body;
    //     // slug ke base pr nikalni hot to
    //     const userSlug= req.params.slug;
    //     //console.log(userId)
    //     const usercategoryId= await categoryModal.findOne({slug:userSlug})
    //    // console.log([field],usercategoryId[field])
    //    const allowFeild =["status","is_top","is_best","is_home"];
    //    if(!allowFeild.includes(field)){
    //     return res.send({
    //         message:"Invalid field",
    //         success:false
    //     })
    //    }


    //     if(!usercategoryId)
    //         return sendNotfound(res)
    //      await categoryModal.findByIdAndUpdate(userId,{$set:{status:!usercategoryId.status}})
    //      // sabka staus ek sath change krne ke liye used huaa h
    // //  await categoryModal.updateOne({slug:userSlug},{[field]:!usercategoryId[field]})

    //     return sendUpdated(res)
        
    // } catch (error) {
    //     return sendServerError(res)
        
        
    // }
}


const categorydelete= async (req,res)=>{

    try {
        const id= req.params.id;
        console.log(id)
         const deletcategoryId= await categoryModal.findById(id)
        // console.log(deletcategoryId)
    
        if(!deletcategoryId){
            return sendNotfound(res,"Not found Deletedid")
        }
        
        await categoryModal.findByIdAndDelete(id);
        fs.unlinkSync(`./public/images/categryimages/${deletcategoryId.image}`)
        return sendDeleted(res,"category delete")
    } catch (error) {
        console.log(error)
        return sendServerError(res,"Delete server error")
        
    }


}


const getById = async(req,res)=>{

    try {
      const id= req.params.id;
        const categoryApi= await categoryModal.findById(id);
        if(!categoryApi) return sendNotfound(res,"edit id not found")
        return sendSuccess(res,"Edit id find",categoryApi);
        
    } catch (error) {
        return sendServerError(res,"Edit server error")
        
    }
}

const updateById  = async(req,res)=>{

    try {
      const {name,slug} =req.body;
      const id= req.params.id;
      const category_image=req.files !=null ? req.files.image : null
        const categoryApi= await categoryModal.findById(id);
        if(!categoryApi) return sendNotfound(res,"edit id not found");
        const update={};
        if(name) update.name=name;
        if(slug) update.slug=slug;
        //console.log(update)
        if(category_image != null){
          // / ✅ unique image name
    const image = uniqueName(category_image.name);

    // ✅ correct destination path
    const destination = `./public/images/categryimages/${image}`;

    category_image.mv(destination, async (error) => {
      if (error) {
        //console.log(error);
        return sendServerError(res, "Unable to upload file");
      }
        update.image=image

        await categoryModal.updateOne(
            {_id:id},
            {
              $set:update
            }
          )
            fs.unlinkSync(`./public/images/categryimages/${categoryApi.image}`)

          return sendUpdated(res,"category edit update")

     

    });



        }
        else{
          await categoryModal.updateOne(
            {_id:id},
            {
              $set:update
            }
          )
          return sendUpdated(res,"category edit update")

        }

        
    } catch (error) {
      console.log(error)
        return sendServerError(res,"Edit server error")
        
    }
}

module.exports={create,getapi,statusUpdate,categorydelete,getById,updateById};
