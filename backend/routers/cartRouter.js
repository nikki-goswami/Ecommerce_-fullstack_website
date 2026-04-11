const {CartSync,addtoCart} = require("../controllers/cartController"); // ✔️

const cartRouter = require("express").Router();


cartRouter.post("/api/sync",CartSync);
cartRouter.post("/api/add_to_cart",addtoCart)






module.exports = cartRouter;