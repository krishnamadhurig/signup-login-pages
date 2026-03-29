const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('login','root','madhuri@123',{
    host:'localhost',
    dialect:'mysql'
})
module.exports=sequelize