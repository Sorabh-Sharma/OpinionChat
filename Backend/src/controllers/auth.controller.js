export const signup = (req,res)=>{
    const {email, fullname, password}= req.body;
    try {
        //haash password
    } catch (error) {
    }
}
export const login = (req,res)=>{
    res.send("Login route");
};
export const logout = (req,res)=>{
    res.send("Logout route");
}