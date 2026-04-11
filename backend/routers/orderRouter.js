const {orderPlace} = require("../controllers/orderController"); // ✔️

const OrderRouter = require("express").Router();


OrderRouter.post("/api/createOrder",orderPlace);






module.exports = OrderRouter;