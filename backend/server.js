import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import {v2 as cloudinary} from "cloudinary";


dotenv.config();

//connection
connectDB(); 
const app = express();
const PORT = process.env.PORT || 5001;


cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

//middlewares
app.use(express.json({limit:"50mb"}));//to parse json data in the req.body[limit:"50mb"=allow to pass until 50mb]
app.use(express.urlencoded({extended:true}));//to parse form data in the req.body
app.use(cookieParser());

//routes
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

//port
app.listen(PORT, () =>
  console.log(`server started on the port:${PORT}  hey..`)
);
