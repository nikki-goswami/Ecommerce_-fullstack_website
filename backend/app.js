
// require('dotenv').config()

// const express= require("express");
// const mongoose= require("mongoose")

// const server = express();

// server.use(express.json());
// server.use("/category",require("./routers/categoryRouter"));




// // server.listen(
// //     "5000",
// //     ()=>{
// //             console.log("server is started")
// //     }
// // )


// mongoose.connect(process.env.DATABASE_URL).then(
//     ()=>{
//     console.log("Database connected")
//         server.listen(
//     process.env.PORT,
//     ()=>{
//         console.log("server is started")
//     }
// )


//     }
// ).catch(
//     (error)=>{
//         console.log(error)
//         console.log("Database not conneted")


//     }
// )




require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

const cors = require("cors")

const server = express();

server.use(express.json());
server.use(cors({origin:"http://localhost:3000",credentials:true})) // credentials:true coookies and ko aane ja jane do 
server.use(cookieParser());
server.use("/category", require("./routers/categoryRouter"));  //ise base url set krna bolte h
server.use("/brand" ,require("./routers/brandRouter")); // base url set for barnd

server.use("/color",require("./routers/colorRouter"));  // base url set for color
server.use("/product",require("./routers/productRouter")) ; // base url set for product
server.use("/userlogin",require("./routers/userRouter"));// base url set h for userlogin
server.use("/cart",require("./routers/cartRouter"));// base url set h for cart
server.use("/order",require("./routers/orderRouter"))


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