const userModel = require("../models/user.model");

const jwt = require('jsonwebtoken');
const { sendNotfound } = require("../utils/responseHelper");

async function authMiddleware(req,res,next){
    try {
        const token = req.headers.authorization;
            if (!token) {
              return res.status(401).json({ success: false, message: "Please log in" });
            }
        
            // Remove "Bearer " if present
            const jwtToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
        
            // Verify token
            const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);
            const user = await userModel.findById(decoded.id).select("-password");
            if(!user){
                return sendNotfound(res,"user not found")
            }
            req.user = user;
            next();
        
        
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"token expire"
        })
        
    }


}

module.exports= authMiddleware;




