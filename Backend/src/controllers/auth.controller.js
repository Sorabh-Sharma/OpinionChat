import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req,res)=>{
    const {email, fullName, password}= req.body;
    try {
        //haash password
        if(!email || !fullName || !password){
            return res.status(400).json({message: "All fields are required"});
        }
         
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters long"});
        }
        const user= await User.findOne({email}); 
        if(user){
            return res.status(400).json({message: "Email already exists"});
        }
        const salt= await bcrypt.genSalt(10); 
        const hashedPassword= await bcrypt.hash(password, salt);
        const newUser= new User({
            email,
            fullName,
            password: hashedPassword
        });
        if(newUser){
            //generate token
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic,
            });
        }
        else{
            res.status(400).json({message: "Error occurred while creating user"});
        }
        
    } catch (error) {
        console.error("Error in signup controller:", error);
        res.status(500).json({message: "Server error"});
    }
}
export const login = async(req,res)=>{
    const {email, password}= req.body;
    try{
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const isPasswordMatch= await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        //generate token
        generateToken(user._id,res);
        res.status(200).json({
            _id: user._id,
            email: user.email,
            fullName: user.fullName,
            profilePic: user.profilePic,
        });

    }catch(error){
        console.error("Error in login controller:", error);
        res.status(500).json({message: "Server error"});
    }
};
export const logout = (req,res)=>{
    try {
        res.cookie("token", "", {maxAge: 0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.error("Error in logout controller:", error.message);
        res.status(500).json({message: "Server error"});
    }
}
export const updateProfilePic= async(req,res)=>{
    try {
        const {profilePic}= req.body;
        const userId = req.user._id;
        if(!profilePic){
            return res.
            status(400).json({message: "Profile picture is required"});
        }
        const upholdResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser= await User.findByIdAndUpdate(userId, {profilePic: upholdResponse.secure_url}, {new: true}).select("-password");
        res.status(200).json(updatedUser);
    
    } catch (error) {
        console.error("Error in updateProfilePic controller:", error.message);
        res.status(500).json({message: "Server error"});
    }
}

export const removeProfilePic = async (req, res) => {
    try {
        const userId = req.user._id;
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: "" },
            { new: true }
        ).select("-password");

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error in removeProfilePic controller:", error.message);
        res.status(500).json({ message: "Server error" });
    }
}

export const checkAuth= async(req,res)=>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.error("Error in checkAuth controller:", error.message);
        res.status(500).json({message: "Server error"});
    }
};