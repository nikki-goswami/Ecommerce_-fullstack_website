const {CartSync,addtoCart} = require("../controllers/cartController"); // ✔️

const cartRouter = require("express").Router();


cartRouter.post("/sync",CartSync);
cartRouter.post("/add_to_cart",addtoCart)






module.exports = cartRouter;