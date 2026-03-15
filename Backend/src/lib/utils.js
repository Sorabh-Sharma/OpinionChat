import jwt from "jsonwebtoken";

export const generateToken = (userId,res)=>{
    //generate token using jwt
    const token=jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: "7d"});
    res.cookie("token", token, {
        maxAge: 7*24*60*60*1000, //7 days
        httpOnly: true, //prevent client-side access to the cookie  
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    });
    return token;
}