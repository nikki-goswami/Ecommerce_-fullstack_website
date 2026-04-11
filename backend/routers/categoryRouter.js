const { create,getapi, statusUpdate ,categorydelete,getById,updateById} = require("../controllers/categoryController"); // ✔️

const categoryRouter=require("express").Router();

const fileUpload= require("express-fileupload")


categoryRouter.post("/api/create",fileUpload({createParentPath:true}),create);
categoryRouter.get("/api/findapi",getapi);
// ye /:id ke base pr find kr rha h
categoryRouter.patch("/api/status/:id",statusUpdate)
// ye slug ke base pr find krega h
//categoryRouter.patch("/status/:slug",statusUpdate)


// category delete krne ke liye 
categoryRouter.delete("/api/delete/:id",categorydelete);

categoryRouter.get("/:id",getById);
// getById is function  
// delete ke liye bana h category 


categoryRouter.put("/api/update/:id",fileUpload({createParentPath:true}),updateById);
//edit ke liye




module.exports=categoryRouter;