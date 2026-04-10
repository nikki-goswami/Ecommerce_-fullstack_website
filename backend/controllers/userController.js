
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
const bcrypt = require('bcrypt');
const { sendEmail } = require("../Transpoter/createTranspoter");
const nodemailer = require("nodemailer");


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



// const sendOtp = async (req, res) => {
//   const { email } = req.body;

//   const user = await userModel.findOne({ email });
//   if (!user) {
//     return res.status(404).json({ msg: "User not found" });
//   }

//   // OTP generate (6 digit)
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   user.otp = otp;
//   user.otpExpire = Date.now() + 5 * 60 * 1000; // 5 min

//   await user.save();

//   // 👉 For now console me print kar do (no email needed)
//   console.log("OTP:", otp);

//   res.json({ msg: "OTP sent (check console 😄)" });
// };
const sendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpire = Date.now() + 5 * 60 * 1000; // 5 min expiry
    await user.save();

    // Send OTP email
    const { success, preview, error } = await sendEmail({
      to: email,
      subject: "Your OTP Code",
      html: `<h3>OTP Verification</h3>
             <p>Your OTP is: <b>${otp}</b></p>
             <p>This code will expire in 5 minutes.</p>`
    });

    if (success) {
      res.json({ msg: "OTP sent successfully", preview });
    } else {
      res.status(500).json({ msg: "Failed to send OTP", error });
    }
  } catch (err) {
    console.error("OTP error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};



 const resetPasswordWithOtp = async (req, res) => {
  const { email, otp, password } = req.body;

  const user = await userModel.findOne({
    email,
    otp,
    otpExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ msg: "Invalid or expired OTP" });
  }

  // password hash
  user.password = await bcrypt.hash(password, 10);

  // OTP clear
  user.otp = undefined;
  user.otpExpire = undefined;

  await user.save();

  res.json({ msg: "Password reset successful" });
};








module.exports = { register, login, cookiesget, addressAdd,logout,sendOtp,resetPasswordWithOtp };
