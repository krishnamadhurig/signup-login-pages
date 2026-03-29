const express=require('express');
<<<<<<< HEAD
const cors=require('cors');
const sequelize=require('./config/db');
const routes=require('./routes/userRoute');
const app=express();
app.use(cors());
app.use(express.json())
app.use('/api',routes);
sequelize.sync()
.then(()=>{
    app.listen(5000,()=>{
        console.log('server is running on 5000')
    })
})
=======
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
>>>>>>> 8aea241 (Add to login page)
