const {register,login,cookiesget,logout,addressAdd, sendOtp, resetPasswordWithOtp } = require("../controllers/userController"); // ✔️


const authMiddleware= require("../middlware/authMiddlware")

const userRouter = require("express").Router();



userRouter.post("/register",register);
userRouter.post("/login",login)
userRouter.get('/getcookies',authMiddleware,cookiesget)
userRouter.get("/logout",logout)
userRouter.post("/address/:id",addressAdd)


userRouter.post("/send-otp", sendOtp)
userRouter.post("/reset-password", resetPasswordWithOtp);





module.exports = userRouter;