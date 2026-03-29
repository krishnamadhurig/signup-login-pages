const express=require('express');
const app=express();
const cors=require('cors')

const userRoutes=require('./route/userRoute');
const sequelize = require('./config/db');
app.use(express.json());
app.use(cors())
app.use('/api',userRoutes);
sequelize.sync()
.then(()=>{
    app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

}).catch((err)=>{
    console.log(err)
})

