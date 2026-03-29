<<<<<<< HEAD
const {DataTypes, EmptyResultError}=require('sequelize');
const sequelize=require('../config/db');
const User=sequelize.define('User',{
=======
const sequelize=require('../config/db');
const {DataTypes}=require('sequelize');
const User=sequelize.define('User',({
>>>>>>> 8aea241 (Add to login page)
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
<<<<<<< HEAD
});
=======

}))
>>>>>>> 8aea241 (Add to login page)
module.exports=User