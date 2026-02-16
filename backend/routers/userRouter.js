const {register,login,cookiesget,logout,addressAdd } = require("../controllers/userController"); // ✔️


const authMiddleware= require("../middlware/authMiddlware")

const userRouter = require("express").Router();



userRouter.post("/register",register);
userRouter.post("/login",login)
userRouter.get('/getcookies',authMiddleware,cookiesget)
userRouter.get("/logout",logout)
userRouter.post("/address/:id",addressAdd)



module.exports = userRouter;