
const { response } = require("express")
const BrandModal = require("../models/brand.model")  // ye models se import huaa h
const productModel= require("../models/product.model")
const {sendAllfeildRequired,sendallReadyexites, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotfound, sendDeleted} =require("../utils/responseHelper");
const uniqueName = require('../imageUnique/uniqueid');
const fs= require("fs");







const create = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const brand_images = req.files?.image;

    if (!name || !slug || !brand_images) {
      return sendAllfeildRequired(res);
    }

    const isbrandExits = await BrandModal.findOne({ name });
    if (isbrandExits) {
      return sendallReadyexites(res, "Category already exists");
    }

    // ✅ unique image name
    const image = uniqueName(brand_images.name);

    // ✅ correct destination path
    const destination = `./public/images/brand/${image}`;

    brand_images.mv(destination, async (error) => {
      if (error) {
        console.log(error);
      return sendServerError(res, "Unable to upload file");
      }

     const brand= await BrandModal.create({
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


    try {
        const brandApi= await BrandModal.find(dynamicFilter).limit(limit);
         const data = await Promise.all(
          brandApi.map(async(cat)=>{
         // console.log(cat)
         const productCount = await productModel.countDocuments({brand_id:cat._id})
         return{
          ...cat._doc,
          count:productCount
         }
        })
        )
        //console.log(data)
        
        





        return sendSuccess(res,"Brand find",{brandApi:data,imagebaseUrl:"http://localhost:5000/images/brand"});
        
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
        const usercategoryId = await BrandModal.findById(userId)
       // console.log([field],usercategoryId[field])
        if(!usercategoryId)
            return sendNotfound(res,"something worng")
        // await categoryModal.findByIdAndUpdate(userId,{$set:{status:!usercategoryId.status}})
         // sabka staus ek sath change krne ke liye used huaa h
     await BrandModal.findByIdAndUpdate(userId,{[field]:!usercategoryId[field]})

     const messagestatusupdate= `${field} Status Udated successfully`
        return sendUpdated(res,messagestatusupdate)
        
    } catch (error) {
      
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

const categorydelete = async (req, res) => {
  try {
    const id = req.params.id;

    // ✅ MODEL ka use
    const deletcategoryId = await BrandModal.findById(id);

    if (!deletcategoryId) {
      return sendNotfound(res, "Not found Deletedid");
    }

    // ✅ delete bhi MODEL se
    await BrandModal.findByIdAndDelete(id);

    fs.unlinkSync(`./public/images/brand/${deletcategoryId.image}`);

    return sendDeleted(res, "category delete");
  } catch (error) {
    console.log(error);
    return sendServerError(res, "Delete server error");
  }
};



const getById = async(req,res)=>{

    try {
      const id= req.params.id;
        const categoryApi= await BrandModal.findById(id);
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
      console.log(id)
      const category_image = req.files !=null ? req.files.image : null
        const categoryApi= await BrandModal.findById(id);
        if(!categoryApi) return sendNotfound(res,"edit id not found");
        const update={};
        if(name) update.name=name;
        if(slug) update.slug=slug;
        console.log(update,"update")
        if(category_image != null){
          // / ✅ unique image name
    const image = uniqueName(category_image.name);

    // ✅ correct destination path
    const destination = `./public/images/brand/${image}`;

    category_image.mv(destination, async (error) => {
      if (error) {
        //console.log(error);
        return sendServerError(res, "Unable to upload file");
      }
        update.image=image

        await BrandModal.updateOne(
            {_id:id},
            {
              $set:update
            }
          )
            fs.unlinkSync(`./public/images/brand/${categoryApi.image}`)

          return sendUpdated(res,"category edit update")

     

    });



        }
        else{
          await BrandModal.updateOne(
            {_id:id},
            {
              $set:update
            }
          )
          return sendUpdated(res,"category edit update")

        }

        
    } catch (error) {
      console.log(error);
        return sendServerError(res,"Edit server error")
        
    }
}

module.exports={create,getapi,statusUpdate,categorydelete,getById,updateById};
