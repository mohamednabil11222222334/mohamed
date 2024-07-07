
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import  jwt from "jsonwebtoken"

const signup = async (req, res) => {
    
let isFound = await User.findOne({ email: req.body.email });
    if (isFound) return res.status(200).json({ message: "user already exist" });
    req.body.password = bcrypt.hashSync(req.body.password, 8);


    let user = await User.create(req.body);
    res.status(200).json({ message: "success", user });
};
const signin =async (req , res) =>{

    
    let user = await User.findOne({email : req.body.email})

    if(!user || !bcrypt.compareSync(req.body.password, user.password))
        return res.status(401).json({message : "incorrect paaword or email "})
jwt.sign({nameId: user._id , name :user.name, role: user.role} , 'myname is hegazi',(err,token) =>{
    console.log(jwt.decode(token),user)
        res.json({message : "sign in success " , token})
            
    })
}
export { 
    signup,
    signin
    
};