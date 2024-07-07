

import { User } from "../models/user.model.js"

export const updateuser = async (req , res) => {
    let user = await User.findOneAndUpdate({_id: req.params.id},req.body , {new : true})
res.ststus(200).json({message: "success " ,user })
}
    
 
export  const deleteuser = async(req , res) =>{
    let user = await User.findByIdAndDelete(req.params , req.body )

    res.ststus(200).json({message : "success" , user})
}



 export const findOne = async (req,res)=>{
    const user = await User.findById(req.params.id)
  
    delete user._doc.password
    res.status(200).json(user)
 } 



export const allUser = async(req,res)=>{
    const users = await User.find()
    res,json(users)

}