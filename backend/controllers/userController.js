
// const userModel = require("../models/user.model");
// const Cryptr = require('cryptr');

// const {sendServerError, sendAllfeildRequired, sendCreated, sendNotfound, sendSuccess} =require("..//utils/responseHelper");
// const cryptr = new Cryptr(process.env.SECRET_KEY);
// var jwt = require('jsonwebtoken');



// const register = async (req, res) => {
// try {
//     const {name,email,password}= req.body;
//     if(!name || !email || !password) return sendAllfeildRequired(res,"all field required");
//     const encryptedPassword = cryptr.encrypt(password);

//      await userModel.create({name,email,password:encryptedPassword});
//      return sendCreated(res,"user account create")

    
    

//   } catch (error) {
//     return sendServerError(res);
//   }
// };

// const login = async (req, res) => {
// try {
//     const {email,password}= req.body;
//     if( !email || !password) return sendAllfeildRequired(res,"all field required");

//    const userfind= await userModel.findOne({email})
//    //console.log(userfind)
//    if(!userfind) return sendNotfound(res,"user email doesn't exits")


//     // password dicript hoga
//     if(password !== cryptr.decrypt(userfind.password)){

//         return sendNotfound(res,"incorrect password")
//     }

   


// const token = jwt.sign({
//   id : userfind._id,
//   email:userfind.email

// }, process.env.SECRET_KEY, { expiresIn: 7*24*60*60*1000 });



// // to makes cookies/ to send cookies
//       res.cookie("user_token",token,{
//         maxAge:7*24*60*60*1000,
//         httpOnly:true,
//         secure:false,
//         sameSite: 'Lax'

//       })

//     return sendSuccess(res,"user login")



   

    
    

//   } catch (error) {
//     console.log(error,"error")
//     return sendServerError(res);
//   }
// };
// // for cookie get ke liye 

// const cookiesget= async(req,res)=>{
//   try {
//     // const token = req.cookies.user_token;
//     const token = req.headers.authorization;


//     if(!token){
//       return res.status(401).json({
//         success: false,
//         message:"Please Logged In"
//       })
//     }
//     // verify a token symmetric - synchronous
// var decoded = jwt.verify(token,process.env.SECRET_KEY );
// const user = await userModel.findById({_id:decoded.id}).select("-password")
// //console.log(decoded)  bar
// //console.log( user)
// return sendSuccess(res,user)


    
//   } catch (error) {
//      console.log(error)
//     return sendServerError(res);

    
//   }
// };

// // address add api

// const addressAdd = async(req,res)=>{
//   try {
//     // const token = req.cookies.user_token;
//     const token = req.headers.authorization;


//     if(!token){
//       return res.status(401).json({
//         success: false,
//         message:"Please Logged In"
//       })
//     }
//     // verify a token symmetric - synchronous
// var decoded = jwt.verify(token,process.env.SECRET_KEY );
// const user = await userModel.findById({_id:decoded.id}).select("-password")
// //console.log(decoded)  bar
// //console.log( user)

// const {addressLine1,addressLine2,city,contact,state,postalCode,country} = req.body;
// user.address.push(addressLine1,addressLine2,city,contact,state,postalCode,country);
// await user.save();

// return sendSuccess(res,"user update",user)


    
//   } catch (error) {
//      console.log(error)
//     return sendServerError(res);

    
//   }
// };


// // change password api











// module.exports= {register,login,cookiesget,addressAdd}





const userModel = require("../models/user.model");
const Cryptr = require('cryptr');
const { sendServerError, sendAllfeildRequired, sendCreated, sendNotfound, sendSuccess } = require("../utils/responseHelper");
const cryptr = new Cryptr(process.env.SECRET_KEY); // Make sure SECRET_KEY is correct
const jwt = require('jsonwebtoken');

// ------------------- REGISTER -------------------
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return sendAllfeildRequired(res, "All fields required");

    // Encrypt password
    const encryptedPassword = cryptr.encrypt(password);

    // Save user
    await userModel.create({ name, email, password: encryptedPassword });
    return sendCreated(res, "User account created");

  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
};

// ------------------- LOGIN -------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return sendAllfeildRequired(res, "All fields required");

    const userfind = await userModel.findOne({ email });
    if (!userfind) return sendNotfound(res, "User email doesn't exist");

    // ---------------- FIX: decrypt safely ----------------
    let decryptedPassword;
    try {
      decryptedPassword = cryptr.decrypt(userfind.password);
    } catch (err) {
      console.log("Cryptr decrypt error:", err);
      return sendServerError(res, "Password decryption failed. Please check SECRET_KEY or DB data.");
    }

    if (password !== decryptedPassword) {
      return sendNotfound(res, "Incorrect password");
    }
    // -----------------------------------------------------

    // JWT token
    const token = jwt.sign(
      { id: userfind._id, email: userfind.email },
      process.env.SECRET_KEY,
      { expiresIn: "7d" } // 7 days
    );

    // Send token in cookie
    res.cookie("user_token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'Lax'
    });

    return sendSuccess(res, "User login", { userId: userfind._id.toString() });
  } catch (error) {
    console.log(error, "error");
    return sendServerError(res);
  }
};

// ------------------- COOKIE GET -------------------
const cookiesget = async (req, res) => {
  try {
    const user = req.user;
    // const token = req.headers.authorization;
    // if (!token) {
    //   return res.status(401).json({ success: false, message: "Please log in" });
    // }

    // // Remove "Bearer " if present
    // const jwtToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;

    // // Verify token
    // const decoded = jwt.verify(jwtToken, process.env.SECRET_KEY);
    // const user = await userModel.findById(decoded.id).select("-password");

    return sendSuccess(res,"user Data",user);
  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
};

// ------------------- ADDRESS ADD -------------------
// address add api create
  const addressAdd = async (req, res) => {
  try {

    const userid = req.params.id;

    const userdata = await userModel.findByIdAndUpdate(
      userid,
      { $push: { shipping_Address: { ...req.body } } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Address added",
      data: userdata
    });

  } catch (error) {
    console.log(error);
    return sendServerError(res);
  }
};



  // logout api


  const logout = (req,res)=>{
    try {
      res.clearCookie("user_token",{
        httpOnly:true,
        secure:false,
        sameSite:"Lax",
        path:"/"
      });
      return res.status(200).json({
        success:true,
        message:"Logout successful"
      })
      
    } catch (error) {
      console.log(error)
    return sendServerError(res);
      
    }

  }

module.exports = { register, login, cookiesget, addressAdd,logout };
