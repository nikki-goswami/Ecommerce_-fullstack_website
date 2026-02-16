const { create,getapi, statusUpdate ,categorydelete,getById,updateById} = require("../controllers/colorController"); // ✔️

const colorRouter = require("express").Router();



colorRouter.post("/create",create);
colorRouter.get("/findapi",getapi);
// ye /:id ke base pr find kr rha h
colorRouter.patch("/status/:id",statusUpdate)
// ye slug ke base pr find krega h
//categoryRouter.patch("/status/:slug",statusUpdate)


// category delete krne ke liye 
colorRouter.delete("/delete/:id",categorydelete);

colorRouter.get("/:id",getById);
// getById is function  
// delete ke liye bana h category 


colorRouter.put("/update/:id",updateById);
//edit ke liye




module.exports = colorRouter;