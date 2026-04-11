const { create,getapi, statusUpdate ,categorydelete,getById,updateById} = require("../controllers/categoryController"); // ✔️

const categoryRouter=require("express").Router();

const fileUpload= require("express-fileupload")


categoryRouter.post("/create",fileUpload({createParentPath:true}),create);
categoryRouter.get("/findapi",getapi);
// ye /:id ke base pr find kr rha h
categoryRouter.patch("/status/:id",statusUpdate)
// ye slug ke base pr find krega h
//categoryRouter.patch("/status/:slug",statusUpdate)


// category delete krne ke liye 
categoryRouter.delete("/delete/:id",categorydelete);

categoryRouter.get("/:id",getById);
// getById is function  
// delete ke liye bana h category 


categoryRouter.put("/update/:id",fileUpload({createParentPath:true}),updateById);
//edit ke liye




module.exports=categoryRouter;