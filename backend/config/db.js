const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('signup','root','madhuri@123',{
    host:'localhost',
    dialect:'mysql'
})
module.exports=sequelize