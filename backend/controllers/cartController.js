const mongoose = require("mongoose"); // ✅ added


const cartModel = require("../models/cart.model");


const { sendServerError, sendSuccess } = require("../utils/responseHelper");

const CartSync = async (req, res) => {
  try {
    const { Cart, userId } = req.body;
     if(Cart== null || Cart.length<0)

      {
 return res.status(200).json(
  {
    message:"User cart found",
    Cart: await cartModel.find({userId}).populate('productId'),
    success:true,
    imagebaseUrl:"http://localhost:5000/images/product/main/"


  }
)
      }
    
await Promise.all(
  Cart.map(async(cd)=>{
    const {qty,id}= cd
    const exitingProduct= await cartModel.findOne({
      userId:userId,
      productId:id
    })
    // qty increse ke liye if mein logic h

    if(exitingProduct){
      exitingProduct.qty += Number(qty);
      await exitingProduct.save();
    }
    else{
      // new item add hoga

    await cartModel.create({
        userId,
        productId:id,
        qty
      })

    }
  
})

)

return res.status(200).json(
  {
    message:"User cart found",
    Cart: await cartModel.find({userId}).populate('productId'),
    success:true,
    imagebaseUrl:"http://localhost:5000/images/product/main/"


  }
)

   

  } catch (error) {
    console.log(error)
    return sendServerError(res);
  }
};



// new add here

// const addtoCart = async (req, res) => {
//   try {
//     const { productId, userId,flag } = req.body;
 
    

//     const exitingProduct= await cartModel.findOne({
//       userId:userId,
//       productId: productId
//     });
//     // qty increse ke liye if mein logic h

//     if(exitingProduct){
//       if(flag == 2){
//         exitingProduct.qty--;

//       }
//       else{
//         exitingProduct.qty++;

//       }
//       await exitingProduct.save();
//     }
//     else{
//       // new item add hoga

// const updateCart= await cartModel.create({
//         userId,
//         productId:productId,
//         qty: 1
//       })

//     }
  



// return res.status(200).json(
//   {
//     message:"Catt update succesfully",
//     //Cart: await cartModel.find({userId}).populate('productId'),
//     success:true,
//     // Cart:updateCart,
//     // imagebaseUrl:"http://localhost:5000/images/product/main/"


//   }
// )

   

//   } catch (error) {
//     console.log(error)
//     return sendServerError(res);
//   }
// };

// const addtoCart = async (req, res) => {
//   try {
//     const { productId, userId, flag } = req.body;
//     console.log("ADD TO CART API HIT");


//     const exitingProduct = await cartModel.findOne({
//       userId: userId,
//       productId: productId
//     });

//     if (exitingProduct) {

//       // minus
//       if (flag == 2) {
//         if (exitingProduct.qty > 1) {
//           exitingProduct.qty = exitingProduct.qty - 1;
//           await exitingProduct.save();
//         }
//         // qty == 1 hai to kuchh nahi karenge
//       }

//       // plus
//       else {
//         exitingProduct.qty = exitingProduct.qty + 1;
//         await exitingProduct.save();
//       }
//     }

//     else {
//       await cartModel.create({
//         userId: userId,
//         productId: productId,
//         qty: 1
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Cart updated"
//     });

//   } catch (error) {
//     console.log(error);
//     return sendServerError(res);
//   }
// };




const addtoCart = async (req, res) => {
  try {
    const { productId, userId, flag } = req.body;
    

    const exitingProduct = await cartModel.findOne({
      userId,
      productId
    });

    if (exitingProduct) {

      // ➕ PLUS
      if (flag === 1) {
        exitingProduct.qty = exitingProduct.qty + 1;
      }

      // ➖ MINUS
      if (flag === 2 && exitingProduct.qty > 1) {
        exitingProduct.qty = exitingProduct.qty - 1;
      }

      await exitingProduct.save();
    } 
    else {
      await cartModel.create({
        userId,
        productId,
         qty: 1
      });
    }

    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};





module.exports = { CartSync,addtoCart };
