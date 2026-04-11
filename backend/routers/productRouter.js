const { create,getapi,getById,otherImagesadd,statusUpdate, productdelete,updateById} = require("../controllers/product.controller"); // ✔️

const productRouter=require("express").Router();

const fileUpload= require("express-fileupload")


productRouter.post("/api/create",fileUpload({createParentPath:true}),create);
productRouter.get("/api/findapi",getapi);
// ye /:id ke base pr find kr rha h
productRouter.patch("/api/status/:id",statusUpdate) // status update ke liye
// ye slug ke base pr find krega h
//productRouter.patch("/status/:slug",statusUpdate)


// product delete krne ke liye  based on id
productRouter.delete("/api/delete/:id",productdelete);



productRouter.get("/:id",getById);
// getById is function  

productRouter.post("/api/otherImagesAdd/:id",fileUpload({createParentPath:true}),otherImagesadd)// muktiple images add krne ke liye bana h





productRouter.put("/api/update/:id",fileUpload({createParentPath:true}),updateById);
//edit ke liye product ko




module.exports=productRouter;