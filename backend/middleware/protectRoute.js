import User from "../models/userModel.js";
import  jwt  from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;//take token
    if (!token) return res.status(401).json({ message: "Unauthorised" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);//verify that token

    const user = await User.findById(decoded.userId).select("-password");//get user id=find that user in db

    req.user=user;//if user exist 

    next();

  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error (login first)");
  }
};

export default protectRoute;
