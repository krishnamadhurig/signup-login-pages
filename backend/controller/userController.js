const User=require('../model/user');
const bcrypt=require('bcrypt')
const signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
       
        //validation
        if(!name||!email||!password){
            return res.status(400).json({message:"All fields are required"})
        };
        //existing user
        const existing=await User.findOne({
            where:{email}
        })
        if(existing){
            return res.status(400).json({message:'User already registered'
            })

        }

        const hashedPassword=await bcrypt.hash(password,10)
        const user=await User.create({
            name,email,password:hashedPassword
        })

        return res.status(201).json({
         message:'signup success'})
    }catch(err){
        console.log(err)
        return res.status(500).json({err:err.message})
    }
}
const login=async(req,res)=>{
    try{
        const{email,password}=req.body;

          if(!email||!password){
        res.status(400).json({message:'All fields required'})
    }
    const user=await User.findOne({
        where:{email}
    })
    if(!user){
        return res.status(404).json({message:'User not found'})
    }
    //compare password
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({message:
            'Invalid Password'
        });

    }
    return res.status(200).json({message:'Login success'})
}catch(err){
    console.log(err);
    return res.status(500).json({error:err.message})
}
    }
  
module.exports={
    signup,
    login
}

