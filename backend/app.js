



require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

const cors = require("cors")

const server = express();

server.use(express.json());
server.use(cors({
  origin: [
    "http://localhost:3000",
    "https://ecommerce-fullstack-website-theta.vercel.app"
  ],
  credentials: true
}));

// credentials:true coookies and ko aane ja jane do 
server.use(cookieParser());
server.use("/api/category", require("./routers/categoryRouter"));  //ise base url set krna bolte h
server.use("/brand" ,require("./routers/brandRouter")); // base url set for barnd

server.use("/api/color",require("./routers/colorRouter"));  // base url set for color
server.use("/api/product",require("./routers/productRouter")) ; // base url set for product
server.use("/api/userlogin",require("./routers/userRouter"));// base url set h for userlogin
server.use("/api/cart",require("./routers/cartRouter"));// base url set h for cart
server.use("/api/order",require("./routers/orderRouter"))


server.use(express.static("public"))

mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log("Database connected");

    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => {
        console.log(`server is started on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
    console.log("Database not connected");
});