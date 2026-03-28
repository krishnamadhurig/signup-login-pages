const User=require('../model/user');
const bcrypt=require('bcrypt');
const signup=async(req,res)=>{
    try{
    const{name,email,password}=req.body;
   
    //validation
    if(!name||!email||!password){
        return res.json({message:'All fields are required'})
    }
    //check existing user
    const existing=await User.findOne({
        where:{email}
    });
    if(existing){
        return res.json({message:'User already exists'});
    }
    //hash password
    const hashedPassword=await bcrypt.hash(password,10);
    //save to db
    await User.create({
        name,
        email,
        password:hashedPassword
    });
    res.json({message:'Signup success'})
    }catch(err){
        console.log(err);
        res.json({message:err.message})
    }

}
module.exports=signup