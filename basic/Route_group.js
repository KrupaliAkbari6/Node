const express=require('express');
const app=express();
app.use(express.json());

//import Routes
const productRoutes=require('./routes/Product_routes');

//implement Routes
app.use('/api',productRoutes);

app.listen(2000,()=>{
    console.log("Running in 2000")
})