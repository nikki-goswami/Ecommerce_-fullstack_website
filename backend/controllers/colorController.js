
const { response } = require("express")
const colorModal = require("../models/color.model") // ye model se aa aaya h
const {sendAllfeildRequired,sendallReadyexites, sendCreated, sendServerError, sendSuccess, sendUpdated, sendNotfound, sendDeleted} =require("../utils/responseHelper");

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
    const { name, slug,code } = req.body;

    if (!name || !slug || !code) {
      return sendAllfeildRequired(res);
    }

    const iscategoryExits = await colorModal.findOne({ name });
    if (iscategoryExits) {
      return sendallReadyexites(res, "Color already exists");
    }

   
    // ✅ correct destination path

    

  const color=    await colorModal.create({
        name,
        slug,
        code
      });

      return sendCreated(res, "color  created");
    

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
 
  //console.log(dynamicFilter)


        const categoryApi= await colorModal.find(dynamicFilter).limit(limit);
        return sendSuccess(res,"Color find",categoryApi);
        
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
        //const fields=["status","is_home","is_best","is_top"]
        const usercategoryId= await colorModal.findById(userId)
       // console.log([field],usercategoryId[field])
        if(!usercategoryId)
            return sendNotfound(res)
        // await categoryModal.findByIdAndUpdate(userId,{$set:{status:!usercategoryId.status}})
         // sabka staus ek sath change krne ke liye used huaa h
     await colorModal.findByIdAndUpdate(userId,{[field]:!usercategoryId[field]})

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


const categorydelete= async (req,res)=>{

    try {
        const id= req.params.id;
        console.log(id)
         const deletcategoryId= await colorModal.findById(id)
        // console.log(deletcategoryId)
    
        if(!deletcategoryId){
            return sendNotfound(res,"Not found Deletedid")
        }
        
        await colorModal.findByIdAndDelete(id);
        return sendDeleted(res,"category delete")
    } catch (error) {
        console.log(error)
        return sendServerError(res,"Delete server error")
        
    }


}


const getById = async(req,res)=>{

    try {
      const id= req.params.id;
        const categoryApi= await colorModal.findById(id);
        if(!categoryApi) return sendNotfound(res,"edit id not found")
        return sendSuccess(res,"Edit id find",categoryApi);
        
    } catch (error) {
        return sendServerError(res,"Edit server error")
        
    }
}


const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, code } = req.body;

    if (!name && !slug && !code) {
      return res.status(400).json({
        success: false,
        message: "Nothing to update"
      });
    }

    const updatedColor = await colorModal.findByIdAndUpdate(
      id,
      { name, slug, code },
      { new: true }
    );

    if (!updatedColor) {
      return res.status(404).json({
        success: false,
        message: "Color not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Color updated successfully",
      data: updatedColor
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};




module.exports={create,getapi,statusUpdate,categorydelete,getById,updateById};
