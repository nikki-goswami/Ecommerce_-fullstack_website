const cartModel = require("../models/cart.model");
const OrderModel = require("../models/order.model");
const { sendServerError } = require("../utils/responseHelper")

const orderPlace =  async (req,res)=>{
    try {

        const {user_id,paymentMethod,shipping_Address} = req.body;
        // const cart = await cartModel.findOne({ userId: user_id }).populate("productId",'_id final_price')
    const cart = await cartModel.find({ userId: user_id }).populate("productId", "_id final_price");

       
    const productDetails = cart.map((product) => {
  return {
    product_id: product.productId._id,
    qty: product.qty,   // ✅ correct
    price: product.productId.final_price,
    total: product.productId.final_price * product.qty  // ✅ correct
  };
});

//console.log(productDetails);


const orderTotal= productDetails.reduce((sum,item)=>{
    return  sum+item.total
    
}, sum = 0)

// console.log(orderTotal)
       
 const order = await OrderModel.create({
        user_id:user_id,
        product_details:productDetails,
        order_total:orderTotal,
        payment_mode:paymentMethod,
        shipping_details:shipping_Address
        


      })
    

 if (paymentMethod == 0) {
  return res.status(201).json({
    success: true,
    message: "Order placed",
    order_id: order._id   // ✅ yaha se lo
  });
}

      else{

      }


        
    } catch (error) {
        console.log(error)

        return sendServerError(res)
      
        
    }
}
module.exports={orderPlace}