const {orderPlace} = require("../controllers/orderController"); // ✔️

const OrderRouter = require("express").Router();


OrderRouter.post("/createOrder",orderPlace);






module.exports = OrderRouter;