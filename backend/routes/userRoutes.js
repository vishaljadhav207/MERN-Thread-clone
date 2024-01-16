import express from "express"
import { followUnfollowUser, getUserProfile, loginUser, logoutUser, signupUser, updateUser } from "../controllers/userController.js";
import protectRoute from "../middleware/protectRoute.js";


const router =express.Router();

// router.get("/signup",(req,res)=>{           // instead of this we use mvc pattern
//     res.send("sign-up succesfully")
// })
router.get("/profile/:query",getUserProfile)
router.post("/signup",signupUser);
router.post("/login",loginUser)
router.post("/logout",logoutUser)
router.post("/follow/:id",protectRoute,followUnfollowUser) //toggle state//protectRoute=middleware when login then only you can able to follow or unfollow
router.put("/update/:id",protectRoute,updateUser)
export default router;