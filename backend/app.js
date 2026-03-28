const express=require('express');
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