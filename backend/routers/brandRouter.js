const { create,getapi, statusUpdate ,categorydelete,getById,updateById} = require("../controllers/brandController"); // ✔️

const brandRouter=require("express").Router();

const fileUpload= require("express-fileupload")


brandRouter.post("/create",fileUpload({createParentPath:true}),create);
brandRouter.get("/findapi",getapi);
// ye /:id ke base pr find kr rha h
brandRouter.patch("/status/:id",statusUpdate)
// ye slug ke base pr find krega h
//categoryRouter.patch("/status/:slug",statusUpdate)


// category delete krne ke liye 
brandRouter.delete("/delete/:id",categorydelete);

brandRouter.get("/:id",getById);
// getById is function  
// delete ke liye bana h category 


brandRouter.put("/update/:id",fileUpload({createParentPath:true}),updateById);
//edit ke liye




module.exports= brandRouter;// next setep controller